export default function Home({ texts }) {
  return (
    <section>
      <h1>{texts.home.title}</h1>
      <p>{texts.home.subtitle}</p>
    </section>
  );
}
