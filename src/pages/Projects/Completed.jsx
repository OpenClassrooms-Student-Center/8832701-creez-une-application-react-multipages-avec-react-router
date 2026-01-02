import { getProjectsByStatus } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function Completed() {
  const projects = getProjectsByStatus('Terminé')

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Completed
