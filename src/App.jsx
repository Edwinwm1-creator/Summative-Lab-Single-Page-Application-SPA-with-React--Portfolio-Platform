import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import Search from "./components/Search";
import ProjectList from "./components/ProjectList";
import hero from "./assets/download.jpeg";
import imageCopy from "./assets/image copy.png";
import image from "./assets/image.png";
import "./App.css";

function App() {
 
  const [projects, setProjects] = useState([
    { id: 1, name: "Web Development", image: hero },
    { id: 2, name: "Robotics software development", image: imageCopy },
    { id: 3, name: "Robotics engineering", image: image }
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
