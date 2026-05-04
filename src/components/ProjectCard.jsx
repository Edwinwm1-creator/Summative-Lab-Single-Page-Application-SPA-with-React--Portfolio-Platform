import React from "react";

function ProjectCard({ project }) {
  return (
    <li className="card">
      <img src={project.image} alt={project.name} />
      <h4>{project.name}</h4>
    </li>
  );
}

export default ProjectCard;
