import PageWrapper from "../components/PageWrapper";

export default function Contact({ texts }) {
  return (
    <PageWrapper>
      <main className="container contact">
        <h1>{texts.contact.title}</h1>
        <p className="contact-text">{texts.contact.text}</p>

        <ul className="contact-list">
          <li>
            <span>{texts.contact.email}:</span>
            <a href="mailto:reny.alvarezxd@gmail.com">reny.alvarezxd@gmail.com</a>
          </li>

          <li>
            <span>{texts.contact.github}:</span>
            <a
              href="https://github.com/Renox1527"
              target="_blank"
              rel="noreferrer"
            >github.com/Renox1527
            </a>
          </li>

          <li>
            <span>{texts.contact.linkedin}:</span>
            <a
              href="https://www.linkedin.com/in/reny-rafael-alvarez"
              target="_blank"
              rel="noreferrer"
            >www.linkedin.com
            </a>
          </li>
        </ul>
      </main>
    </PageWrapper>
  );
}
