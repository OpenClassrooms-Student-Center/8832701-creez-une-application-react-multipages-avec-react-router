import { getProjectsByStatus } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function Planned() {
  const projects = getProjectsByStatus('Planifié')

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Planned
