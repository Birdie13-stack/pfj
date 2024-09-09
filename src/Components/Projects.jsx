import React from "react";
import { projects } from "../Database/Database";
import film from "../assets/film.png";

function Projects() {
  return (
    <div className="projects">
      <h2>Latest Projects</h2>

      {projects.map((project) => (
        <div className="project-card">
          <img src={project.image} alt="" />

          <div>
            <p style={{ fontWeight: "bold" }}>{project.name}</p>
            <p>{project.desc}</p>

            {project.tags.map((tag) => (
              // <div className="tags">
              <div className="tag">{tag}</div>
              // </div>
            ))}
            <br />

            <button className="demo">
              <img src={film} alt="" />
              View Demo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
