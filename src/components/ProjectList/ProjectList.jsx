import ProjectItem from '../ProjectItem/ProjectItem';
import './ProjectList.css';

function ProjectList({ projects }) {
if (!projects)
return null;

return (
<div className="project-list-wrapper">
{projects.map((project) => (
<ProjectItem 
key={project.id} 
title={project.title} 
description={project.description} 
gitHubUrl={project.gitHubUrl} 
/>
))}
</div>
);
}

export default ProjectList;
