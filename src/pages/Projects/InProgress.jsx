import { getProjectsByStatus } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function InProgress() {
  const projects = getProjectsByStatus('En cours')

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default InProgress
