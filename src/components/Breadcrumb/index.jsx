import { useLocation, Link } from 'react-router-dom'
import { getEmployeeById } from '../../data/employees'
import { getProjectById } from '../../data/projects'
import './Breadcrumb.css'

function Breadcrumb() {
  const location = useLocation()

  // Parser le pathname en segments
  const pathnames = location.pathname.split('/').filter(x => x)

  // Si on est sur la page d'accueil, ne rien afficher
  if (pathnames.length === 0) {
    return null
  }

  // Mapping des segments vers leurs labels
  const labelMap = {
    'employees': 'Employés',
    'projects': 'Projets',
    'about': 'À propos',
    'team': 'Équipe',
    'contact': 'Contact',
    'in-progress': 'En cours',
    'completed': 'Terminés',
    'planned': 'Planifiés'
  }

  // Créer les breadcrumb items
  const breadcrumbs = [{ label: 'Dashboard', path: '/' }]

  let currentPath = ''
  pathnames.forEach((segment, index) => {
    currentPath += `/${segment}`

    let label = segment

    // Vérifier si c'est un segment connu
    if (labelMap[segment]) {
      label = labelMap[segment]
    } else if (!isNaN(segment)) {
      // C'est un ID numérique
      const prevSegment = pathnames[index - 1]

      if (prevSegment === 'employees') {
        const employee = getEmployeeById(parseInt(segment))
        label = employee ? employee.name : segment
      } else if (prevSegment === 'projects') {
        const project = getProjectById(parseInt(segment))
        label = project ? project.name : segment
      }
    }

    breadcrumbs.push({ label, path: currentPath })
  })

  return (
    <nav className="breadcrumb">
      {breadcrumbs.map((item, index) => (
        <span key={item.path}>
          {index > 0 && <span className="breadcrumb-separator"> / </span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="breadcrumb-current">{item.label}</span>
          ) : (
            <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
