// Feature: Base · shop page from Firestore
// Owner: 2419247
import { Link, useParams } from 'react-router'
import { useVendor } from '../hooks/useVendor.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

// The :id part of /vendor/:id arrives through useParams().
function VendorPage() {
  const { id } = useParams()
  const { vendor, menu, loading, error, reload } = useVendor(id)

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p className="muted">There is no vendor called “{id}”. <Link to="/">Back to vendors</Link></p>
      </section>
    )
  }

  return (
    <section>
      <p><Link to="/">← All vendors</Link></p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">{vendor.location} · {vendor.openHours}</p>
      <MenuList items={menu} />
    </section>
  )
}

export default VendorPage
