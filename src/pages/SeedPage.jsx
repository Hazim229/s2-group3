// Feature: Base · seed your own shop into Firestore
// Owner: 2419247
import { useState } from 'react'
import { doc, writeBatch } from 'firebase/firestore'
import { db } from '../firebase.js'
import { useAuth } from '../hooks/useAuth.js'

// Every shops/<matric>.json is picked up automatically, so nobody edits a shared list.
const shopFiles = import.meta.glob('../../shops/*.json', { eager: true, import: 'default' })
const shops = Object.values(shopFiles)

// One batch = all or nothing: the shop document plus every menu item.
// ownerUid marks the signed-in vendor as the owner (firestore.rules checks it).
async function seedShop({ id, menu, ...shop }, uid) {
  const batch = writeBatch(db)
  batch.set(doc(db, 'vendors', id), { ...shop, ownerUid: uid })
  for (const { id: itemId, ...item } of menu) {
    batch.set(doc(db, 'vendors', id, 'menu', itemId), item)
  }
  await batch.commit()
}

function SeedPage() {
  const { user } = useAuth()
  const [message, setMessage] = useState('')

  async function handleSeed(shop) {
    setMessage(`Seeding ${shop.name}…`)
    try {
      await seedShop(shop, user.uid)
      setMessage(`Done: ${shop.name} with ${shop.menu.length} items is in Firestore.`)
    } catch (err) {
      // permission-denied = not a vendor yet, or this shop belongs to someone else
      setMessage(`Failed: ${err.message}`)
    }
  }

  return (
    <section className="card">
      <h2 className="section-title">Seed your shop</h2>
      <p className="muted">
        Log in as your vendor account and press Seed on <strong>your own</strong> shop only.
      </p>
      {shops.length === 0 && <p className="muted">No shop files in shops/ yet.</p>}
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>
            {shop.name} <span className="muted">({shop.id}, {shop.menu.length} items)</span>{' '}
            <button className="btn" onClick={() => handleSeed(shop)}>Seed</button>
          </li>
        ))}
      </ul>
      {message && <p>{message}</p>}
    </section>
  )
}

export default SeedPage
