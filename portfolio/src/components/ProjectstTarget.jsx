import "../styles/projectsTargets.css";
import { Link } from "react-router-dom";

export default function ProjectsTargets() {
  const project = {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Sample Project",
    description: "At the moment, I don't have published projects, so this card serves as a demonstration of the portfolio.",
    projectLink: "https://ejemplo.com/proyecto1",
    gitLink: "https://github.com/usuario/proyecto1",
  };

  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-links">
          <Link to={project.projectLink} target="_blank" rel="noopener noreferrer">
          View Project
          </Link>
          <Link to={project.gitLink} target="_blank" rel="noopener noreferrer">
          View GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
