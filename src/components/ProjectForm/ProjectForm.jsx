import { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ onAddProject }) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [gitHubUrl, setGitHubUrl] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
if (!title || !description){
console.error('Error!')
} return;
onAddProject(title, description, gitHubUrl);
setTitle('');
setDescription('');
setGitHubUrl('');
};

return (
<section className="form-card">
<h2>Add New Project</h2>
<form onSubmit={handleSubmit}>
<div className="input-field">
<label>Project Title</label>
<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="input your project name" />
</div>
<div className="input-field">
<label>Description</label>
<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief description for your project" />
</div>
<div className="input-field">
<label>GitHub Link</label>
<input value={gitHubUrl} onChange={(e) => setGitHubUrl(e.target.value)} placeholder="https:..." />
</div>
<button type="submit" className="add-btn">Add Project</button>
</form>
</section>
);
}
export default ProjectForm;
