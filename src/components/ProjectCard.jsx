import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  status,
  github,
  demo,
}) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      {status && (
      <p className="project-status"><em>{status}</em></p>)}

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
    </motion.div>
  );
}
