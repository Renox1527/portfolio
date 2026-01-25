import ProjectCard from "../components/ProjectCard";

export default function Projects({ texts }) {
  return (
    <main className="container">
      <h1>{texts.projects.title}</h1>

    <p className="subtitle">
      Algunos de los proyectos en los que he trabajado y que representan mi
      experiencia profesional.
    </p>

      <div className="projects-grid">
        <ProjectCard
          title={texts.projects.main.title}
          description={texts.projects.main.description}
          status={texts.projects.main.status}
          github={null}
          demo={null}
        />

        <ProjectCard
          title={texts.projects.professional.title}
          description={texts.projects.professional.description}
          status={texts.projects.professional.note}
        />

      </div>
    </main>
  );
}

