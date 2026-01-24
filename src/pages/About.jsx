export default function About({ texts }) {
  return (
    <main className="container">
      <h1>{texts.about.title}</h1>
      <p className="about-text">{texts.about.description}</p>
    </main>
  );
}
