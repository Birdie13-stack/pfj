/* eslint-disable react/prop-types */
import { useState } from "react";
import film from "../assets/film.png";
import github from "../assets/github.png";
import { X } from "lucide-react";

function ProjectModal({ showModal, setShowModal, project }) {
  return (
    <div className={`${showModal ? "show_modal" : "hide_modal"}`}>
      <div
        className="backdrop"
        onClick={() => {
          setShowModal(false);
        }}
      ></div>

      <div className="modal scrollbar">
        <ProjectDetails project={project} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

function ProjectDetails({ project, setShowModal }) {
  return (
    <div>
        {/* Close button */}
      <div
        className="close"
        onClick={() => {
          setShowModal(false);
        }} 
      >
        <X />
      </div>

      {project ? <ProjectInfo project={project} /> : <p>No project found</p>}
    </div>
  );
}

function ProjectInfo({ project }) {
  return (
    <div className="project-info">
      <div className="info">
        <p style={{ fontWeight: "bold" }}>{project.name}</p>
        <p>{project.desc}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            //
            <div key={tag} className="tag">{tag}</div>
            //
          ))}
        </div>
        <br />

        <div className="links">
          {project.demo_link && (
            <button
              className="demo"
              onClick={() => window.open(project.demo_link)}
            >
              <img src={film} alt="" />
              <span>View Demo</span>
            </button>
          )}

          {project.github_link && (
            <button
              className="github"
              onClick={() => window.open(project.github_link)}
            >
              <img src={github} alt="" />
            </button>
          )}
        </div>
      </div>

      <SlideShow project={project} />
    </div>
  );
}

function SlideShow({ project }) {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div>
      {project.images && project.images.length > 0 && (
        <img src={project.images[slideIndex]} alt="" width="100%" height="50%"/>
      )}

      {project.images && project.images.length > 0 && (
        <div className="arrows">
          <button
            disabled={slideIndex == 0}
            onClick={() => {
              setSlideIndex(slideIndex - 1);
            }}
          >
            &#x2190;
          </button>
          <button
            disabled={slideIndex == project.images.length - 1}
            onClick={() => {
              setSlideIndex(slideIndex + 1);
            }}
          >
            &#x2192;
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
