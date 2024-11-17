import { useState } from "react";
import { projects } from "../Database/Database";
import film from "../assets/film.png";
import github from "../assets/github.png";
import ProjectModal from "./project_details";
import { MoveUpRight } from "lucide-react";

function Projects() {
  const [showModal, setShowModal] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects" id="projects">
      {showModal && activeProject && (
        <ProjectModal
          showModal={showModal}
          setShowModal={setShowModal}
          project={activeProject}
        />
      )}
      <h2>Latest Projects</h2>

      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt="" className="banner" />

          <div>
            <p style={{ fontWeight: "bold" }}>{project.name}</p>
            <p>{project.desc}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                </div>
                //
              ))}
            </div>
            <br />

            <div className="links">
              <button
                className="view"
                onClick={() => {
                  setActiveProject(project);
                  setShowModal(true);
                }}
              >
                <MoveUpRight />
              </button>

              {project.github_link && (
                <button
                  className="github"
                  onClick={() => window.open(project.github_link)}
                >
                  <img src={github} alt="" />
                  {/* <span>View Code</span> */}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
