import { projectsData } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function All() {
  return (
    <div className="projects-grid">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default All
