import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Breadcrumb />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
