import React from "react";
import { projects } from "../Database/Database";

function Projects() {
  return (
    <div>
      <h2>Latest Projects</h2>

      {projects.map((project) => {
        <div className="project-card">
          <img src={project.image} alt="" />

          <p>{project.name}</p>

          <p>Hola!</p>
        </div>;
      })}
    </div>
  );
}

export default Projects;
