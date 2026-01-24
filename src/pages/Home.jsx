import Skills from "../components/Skills";

export default function Home({ texts }) {
  return (
    <main className="container">
      <h1>{texts.home.title}</h1>
      <p className="subtitle">{texts.home.subtitle}</p>

      <Skills texts={texts} />
    </main>
  );
}

