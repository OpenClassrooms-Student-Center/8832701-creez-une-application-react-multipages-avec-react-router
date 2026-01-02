import { Outlet, NavLink } from 'react-router-dom'
import './ProjectsLayout.css'

function ProjectsLayout() {
  return (
    <div className="page">
      <h1>Nos projets 🚀</h1>
      <nav className="projects-nav">
        <NavLink to="/projects" end className="projects-link">Tous</NavLink>
        <NavLink to="/projects/in-progress" className="projects-link">En cours</NavLink>
        <NavLink to="/projects/completed" className="projects-link">Terminés</NavLink>
        <NavLink to="/projects/planned" className="projects-link">Planifiés</NavLink>
      </nav>
      <div className="projects-content">
        <Outlet />
      </div>
    </div>
  )
}

export default ProjectsLayout
