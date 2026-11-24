// Feature: Base · one shop and its menu from Firestore
// Owner: 2419247
import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase.js'

// One shop plus its menu subcollection: vendors/{vendorId}/menu/{itemId}.
// Two listeners, so the cleanup stops both.
export function useVendor(vendorId) {
  const [vendor, setVendor] = useState(undefined) // undefined = loading, null = not found
  const [menu, setMenu] = useState([])
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    setVendor(undefined)
    setError(null)
    const onError = (err) => setError(err.message)

    const stopVendor = onSnapshot(
      doc(db, 'vendors', vendorId),
      (snap) => setVendor(snap.exists() ? { id: snap.id, ...snap.data() } : null),
      onError,
    )
    const stopMenu = onSnapshot(
      collection(db, 'vendors', vendorId, 'menu'),
      // vendorId on each item so the cart knows which shop it came from
      (snapshot) => setMenu(snapshot.docs.map((d) => ({ id: d.id, vendorId, ...d.data() }))),
      onError,
    )
    return () => {
      stopVendor()
      stopMenu()
    }
  }, [vendorId, reloadKey])

  const reload = () => setReloadKey((k) => k + 1)
  return { vendor, menu, loading: vendor === undefined && !error, error, reload }
}
