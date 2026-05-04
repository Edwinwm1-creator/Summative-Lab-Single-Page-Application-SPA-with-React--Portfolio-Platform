import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import Search from "./components/Search";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  // A simple placeholder image (a gray box) encoded in base64 since the images i tried to use were not working
  const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QYXCxwS5v9vVAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLm3EAAABmklEQVR42u3dv0vDQBzA8S9pS9XWSR10shVcBAs66SCo4OLf4STiX6uDIn4shgo66CCIdXBy6SRisS6pS8VreS9D9S6X3C9I7v38uByX97673He5Y8S97Y9XUAsGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAYEAwEBgQDAQGBAOBAcFAbm0vA+AArp6Zz7YAAAAASUVORK5CYII=";

  const [projects, setProjects] = useState([
    { id: 1, name: "Project One", image: placeholder },
    { id: 2, name: "Project Two", image: placeholder },
    { id: 3, name: "Project Three", image: placeholder }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    const projectWithId = { ...newProject, id: projects.length + 1 };
    setProjects([...projects, projectWithId]);
  }

  const displayedProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

    return (
    <div className="App">
      <Header />
      
      <ProjectForm onAddProject={handleAddProject} />
      
      <Search 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />
      
      <ProjectList projects={displayedProjects} />
    </div>
  );
}
export default App;
