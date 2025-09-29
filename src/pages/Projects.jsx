import "../styles/projects.css";
import ProjectsTargets from "../components/ProjectstTarget";

export default function Projects() {
  return (
    <>
      <div className="intro-projects">
        <h1>Projects:</h1>
      </div>

      <div className="projects-container">
        <ProjectsTargets />

      </div>
    </>
  );
}
