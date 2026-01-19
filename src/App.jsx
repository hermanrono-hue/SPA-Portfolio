import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ProjectForm from './components/ProjectForm/ProjectForm'
import ProjectList from './components/ProjectList/ProjectList'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
const [projects, setProjects] = useState([
{ id: 1, 
title: 'Wordly-Dictionary ', 
description: 'Search for any words', 
gitHubUrl:'https://github.com/hermanrono-hue/Wordly-Dictionary.git' },
]);
const [searchTerm, setSearchTerm] = useState('');
const [nextId, setNextId] = useState(1)

const addProject = (title, description, gitHubUrl) => {
const newProject = {
id:nextId,
title,
description,
gitHubUrl
};
setProjects([...projects, newProject])
setNextId(nextId + 1);
};

const filteredProjects = projects.filter(p => 
p.title.toLowerCase().includes(searchTerm.toLowerCase())
);
return (
<>
<div className="page-wrapper">
<div className="content-container">
<Header />
<ProjectForm onAddProject={addProject} />
<hr className="divider" />
<SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
<ProjectList projects={filteredProjects} />
</div>
</div>
</>
)
}

export default App
