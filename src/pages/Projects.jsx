import ProjectCard from "../components/ProjectCard";
import PageWrapper from "../components/PageWrapper";

export default function Projects({ texts }) {
  return (
    <PageWrapper>
      <main className="container">
        <h1>{texts.projects.title}</h1>

      <p className="subtitle">{texts.projects.intro}</p>

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
    </PageWrapper>
  );
}

