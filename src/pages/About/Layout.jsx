import { Outlet, NavLink } from 'react-router-dom'
import './AboutLayout.css'

function AboutLayout() {
  return (
    <div className="page">
      <nav className="about-nav">
        <NavLink to="/about" end className="about-link">Présentation</NavLink>
        <NavLink to="/about/team" className="about-link">Équipe</NavLink>
        <NavLink to="/about/contact" className="about-link">Contact</NavLink>
      </nav>
      <div className="about-content">
        <Outlet />
      </div>
    </div>
  )
}

export default AboutLayout
