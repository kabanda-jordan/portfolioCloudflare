import { useEffect, useRef, useState } from 'react'
import { site, socials, heroStats, skills, books, experience, projects } from './data.js'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

function useLockBody(lock) {
  useEffect(() => {
    document.body.style.overflow = lock ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lock])
}

function Preloader({ done }) {
  const [pct, setPct] = useState(0)
  const [fading, setFading] = useState(false)
  useLockBody(!fading)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += Math.random() * 16 + 7
      if (n >= 100) {
        n = 100
        clearInterval(id)
        setTimeout(() => setFading(true), 500)
      }
      setPct(Math.floor(n))
    }, 110)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (fading) {
      const t = setTimeout(done, 850)
      return () => clearTimeout(t)
    }
  }, [fading, done])

  const letters = (word) =>
    word.split('').map((ch, i) => (
      <span className="load-letter" key={i} style={{ animationDelay: `${i * 70}ms`, animationPlayState: 'running' }}>
        {ch}
      </span>
    ))

  return (
    <div className={`preloader ${fading ? 'preloader-out' : ''}`}>
      <div className="preloader-bg">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>
      <div className="preloader-inner">
        <div className="load-name">
          <span className="load-word">{letters(site.firstNameUpper)}</span>
          <span className="load-word">{letters(site.lastNameUpper)}</span>
        </div>
        <div className="load-bar-wrap">
          <div className="load-bar" style={{ width: `${pct}%` }} />
        </div>
        <div className="load-meta">
          <span className="load-pct mono">{pct < 10 ? `0${pct}` : pct}%</span>
          <span className="load-label mono">Initializing Experience</span>
        </div>
      </div>
    </div>
  )
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${seen ? 'reveal-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="brand mono" href="#top">KJ.</a>
      <nav className={open ? 'nav-open' : ''}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="mono" onClick={() => setOpen(false)}>{s.label}</a>
        ))}
      </nav>
      <div className="nav-right">
        <a className="nav-cta btn btn-ghost" href="#contact">Hire me</a>
        <button
          className="nav-toggle mono"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grid-lines" />
      </div>
      <div className="hero-inner">
        <Reveal delay={100}>
          <p className="hero-kicker mono">{'< hello, world >'} — I'm</p>
        </Reveal>
        <Reveal delay={220}>
          <h1 className="hero-name">
            <span>{site.firstName}</span>&nbsp;<span className="hero-last">{site.lastName}</span>
          </h1>
        </Reveal>
        <Reveal delay={340}>
          <p className="hero-role">
            <span className="hero-role-arrow">→</span> {site.role}
            <span className="hero-cursor">_</span>
          </p>
        </Reveal>
        <Reveal delay={460}>
          <p className="hero-tagline">{site.tagline}</p>
        </Reveal>
        <Reveal delay={580}>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View my work</a>
            <a className="btn btn-ghost" href="#contact">Let's talk</a>
          </div>
        </Reveal>
        <Reveal delay={700}>
          <div className="hero-chips">
            <span className="chip chip-accent">Frontend · React</span>
            <span className="chip">Backend · Node · Spring Boot</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Web Security · Burp Suite</span>
          </div>
        </Reveal>
        <Reveal delay={820}>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <a className="scroll-hint mono" href="#about">
        <span className="scroll-line" />
        SCROLL
      </a>
    </section>
  )
}

function SectionHead({ kicker, title }) {
  return (
    <Reveal className="section-head">
      <p className="mono section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </Reveal>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead kicker="01 · about" title="The engineer behind the stack" />
        <Reveal delay={100}>
          <p className="lead">
            I'm <strong>{site.name}</strong>, a full-stack engineer in {site.location} who treats the entire
            stack like one system — not separate islands.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p>
            On the frontend I operate at a <em>god mode</em> level with <b>React</b>, building interfaces
            that feel instant. On the backend I run at <em>super god mode</em> — shipping robust products
            on <b>Node.js</b>, <b>Express</b>, <b>Java</b>, <b>Jakarta EE</b> and <b>Spring Boot</b>, backed
            by <b>PostgreSQL</b> databases engineered for integrity and scale. And when it comes to security,
            I hold my own with <b>Burp Suite</b>, auditing applications through an attacker's eyes.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <p>
            My foundations were forged in the canon — from <i>Designing Data-Intensive Applications</i> to{' '}
            <i>The Web Application Hacker's Handbook</i>. That's why my code isn't just pretty on the surface;
            it's built to survive the real world.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead kicker="02 · experience" title="Where I've proven it" />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 120}>
              <article className="timeline-item">
                <div className="timeline-dot" />
                <div className="card">
                  <div className="card-head">
                    <h3>{job.role} <span className="muted">— {job.company}</span></h3>
                    <span className="period mono">{job.period}</span>
                  </div>
                  <ul>
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="books">
            <p className="books-label mono">// foundations from the books</p>
            <div className="books-grid">
              {books.map((b) => (
                <a className="book-card" href={b.amazon} target="_blank" rel="noreferrer" key={b.title}>
                  <div className="book-cover">
                    <img
                      src={b.cover}
                      alt={`${b.title} cover`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling.style.display = 'grid'
                      }}
                    />
                    <span className="book-cover-fallback" aria-hidden="true">{b.title}</span>
                  </div>
                  <div className="book-meta">
                    <h4>{b.title}</h4>
                    <p>{b.author}</p>
                    <span className="project-link mono">AMAZON ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead kicker="03 · skills" title="Crafted at god mode" />
        <div className="grid skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 100} className="h-full">
              <div className="card skill-card">
                <div className="skill-icon" aria-hidden="true">
                  <span>{g.group[0]}</span>
                </div>
                <div className="card-head">
                  <h3>{g.group}</h3>
                  <span className="tag">{g.level}</span>
                </div>
                <ul>
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHead kicker="04 · work" title="Products that shipped" />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120} className="h-full">
              <a className="project" href={p.url} target="_blank" rel="noreferrer">
                <div className="project-img">
                  <img src={p.image} alt={`${p.name} preview`} loading="lazy" />
                  <span className="project-year mono">{p.year}</span>
                </div>
                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="project-foot">
                    <div className="project-stack mono">
                      {p.stack.map((s) => <span key={s}>{s}</span>)}
                    </div>
                    <span className="project-link mono">VISIT →</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="wrap">
        <Reveal>
          <p className="contact-kicker mono">05 · contact</p>
          <h2 className="contact-title">Got a challenge<br />worth solving?</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="contact-sub">
            My inbox is always open — whether it's a full product, a gnarly bug, or just talking shop over coffee.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a className="btn btn-primary btn-lg" href={`mailto:${socials.email}`}>kabandajordan784@gmail.com</a>
        </Reveal>
        <Reveal delay={360}>
          <div className="contact-links mono">
            <a href={`mailto:${socials.email}`}>Email</a>
            <a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/jordan-kabanda-2932a7336/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </Reveal>
      </div>
      <footer className="footer mono">
        © {new Date().getFullYear()} {site.name} — Designed & built with React on Cloudflare Pages.
      </footer>
    </section>
  )
}

export default function App() {
  const [host, setHost] = useState(false)

  return (
    <>
      {!host && <Preloader done={() => setHost(true)} />}
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main className="site-enter">
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