import "../styles/about.css";

export default function AboutMe() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src="./imgs/me.jpg" alt="Enrique's picture" />
        </div>
        <div className="about-text">
          <p>
            Hi! I'm Enrique Hernández Carrillo, a technology enthusiast from Havana, Cuba. I'm 22 years old and just starting my journey in software development, continuously learning and exploring different areas of computing.
            I'm especially interested in programming, automation, and digital solutions that make life more efficient. I enjoy facing challenges, finding creative solutions, and gaining practical experience that allows me to grow professionally.
            My goal is to keep improving step by step, turning my curiosity into solid skills and meaningful experiences, always focusing on innovation and continuous learning.
          </p>
        </div>
      </div>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or want to talk about technology or projects, don't hesitate to reach out.
          I'll be happy to reply as soon as possible
        </p>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/Enrike-Hdez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./imgs/github.png" alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="mailto:enrikehdezc@gmail.com?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./imgs/mail.png" alt="Gmail" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
