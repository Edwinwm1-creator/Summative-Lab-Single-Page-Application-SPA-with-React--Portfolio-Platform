import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddProject({ name, image });
    setName("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Project Name" 
      />
      <input 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="Image URL" 
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
