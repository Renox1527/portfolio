import ProjectCard from "../components/ProjectCard";

export default function Projects({ texts }) {
  return (
    <main className="container">
      <h1>{texts.projects.title}</h1>

      <div className="projects-grid">
        <ProjectCard
          title={texts.projects.main.title}
          description={texts.projects.main.description}
          status={texts.projects.main.status}
          github={null}
          demo={null}
        />
      </div>
    </main>
  );
}

