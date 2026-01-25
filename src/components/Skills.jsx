export default function Skills({ texts }) {
  return (
    <section className="skills">
      <h2>{texts.skills.title}</h2>

      <div className="skills-grid">
        <div className="skill-group">
          <h3>{texts.skills.frontend}</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (Aprendiendo/Learning)</li>
            <li>React (Aprendiendo/Learning)</li>
            <li>Responsive Design</li>
            <li>Wordpress</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>{texts.skills.backend}</h3>
          <ul>
            <li>Laravel</li>
            <li>Git & GitHub</li>
            <li>Basic SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
