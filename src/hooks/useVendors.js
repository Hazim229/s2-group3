// Feature: Base · shops from Firestore
// Owner: 2419247
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase.js'

// All shops, live from the vendors collection.
// Same return values as the Week 5 fetch version, so HomePage did not change.
export function useVendors() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError(null)
    const unsubscribe = onSnapshot(
      collection(db, 'vendors'),
      (snapshot) => {
        setVendors(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
    )
    return unsubscribe // stop listening when the page closes
  }, [reloadKey])

  const reload = () => setReloadKey((k) => k + 1)
  return { vendors, loading, error, reload }
}
