import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddProject({ name, description, image });
    setName("");
    setDescription("");
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project Description"
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
