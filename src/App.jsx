import { site, skills, books, experience, projects, contact } from './data.js'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">{site.name}</a>
      <nav>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>{s.label}</a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-badge">Available for work</div>
      <h1>{site.name}</h1>
      <p className="hero-title">{site.title}</p>
      <p className="hero-tagline">{site.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">View my work</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>
        I'm a full-stack engineer based in {site.location} who obsesses over the whole stack.
        On the frontend I work at a <strong>god-mode level with React</strong> — building interfaces
        that feel instant and responsive. On the backend I operate at a <strong>super god-mode level</strong>,
        shipping robust applications with Node.js, Express, Java, Jakarta EE, and Spring Boot, backed by
        PostgreSQL databases designed for integrity and scale.
      </p>
      <p>
        I'm equally at home in the security arena — auditing and hardening web applications with Burp Suite.
        My craft is grounded in deep reading of the classics: HTTP: The Definitive Guide, Designing
        Data-Intensive Applications, High Performance Browser Networking, Database Internals, The Web
        Application Hacker's Handbook, Designing Distributed Systems, and The Tangled Web.
      </p>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experience.map((job) => (
        <div className="card" key={job.role + job.company}>
          <div className="card-head">
            <h3>{job.role} — {job.company}</h3>
            <span className="period">{job.period}</span>
          </div>
          <ul>
            {job.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((g) => (
          <div className="card" key={g.group}>
            <div className="card-head">
              <h3>{g.group}</h3>
              <span className="tag">{g.level}</span>
            </div>
            <ul>
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="subhead">Foundations from the books</h3>
      <div className="chips">
        {books.map((b) => <span className="chip" key={b}>{b}</span>)}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <a className="project" href={p.url} target="_blank" rel="noreferrer" key={p.name}>
            <div className="project-img">
              <img src={p.image} alt={`${p.name} preview`} loading="lazy" />
            </div>
            <div className="project-body">
              <div className="card-head">
                <h3>{p.name}</h3>
                <span className="tag">{p.stack.join(' · ')}</span>
              </div>
              <p>{p.description}</p>
              <span className="project-link">Visit site →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="contact-intro">
        Have a project in mind, or just want to talk shop? Reach out.
      </p>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <span>{contact.phone}</span>
      </div>
      <footer className="footer">© {new Date().getFullYear()} {site.name}. Built with React. Deployed on Cloudflare Pages.</footer>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}