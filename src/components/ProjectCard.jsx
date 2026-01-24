export default function ProjectCard({
  title,
  description,
  status,
  github,
  demo,
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <span className="project-status">{status}</span>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
