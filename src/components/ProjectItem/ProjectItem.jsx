ProjectItem.jsx
import './ProjectItem.css';

function ProjectItem({ title, description, gitHubUrl }) {
return (
<>
<div className="project-item-card">
<div className="status-icon">📂</div>
<div className="project-content">
<h3>{title}</h3>
<p>{description}</p>
{gitHubUrl && (<a href={gitHubUrl} target="_blank" className="github-button">View on GitHub</a>)}
</div>
</div>
</>
);
}

export default ProjectItem;
