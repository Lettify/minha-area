import { useEffect, useState } from 'react'
import './App.css'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'stack', label: 'Stack' },
  { id: 'conhecimentos', label: 'Conhecimentos' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'contato', label: 'Contato' },
]

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id)
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection((visibleEntries[0].target as HTMLElement).id)
        }
      },
      {
        rootMargin: '-34% 0px -54% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    const handleHashChange = () => {
      const nextHash = window.location.hash.replace('#', '')
      if (sectionIds.includes(nextHash)) {
        setActiveSection(nextHash)
      }
    }

    const handleTopScroll = () => {
      if (window.scrollY < 84) {
        setActiveSection('inicio')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scroll', handleTopScroll, { passive: true })
    handleHashChange()

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleTopScroll)
    }
  }, [])

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Voltar para o inicio">
          <svg className="brand-icon brand-icon--geo" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M14 3.8L22.5 8.7V18.3L14 23.2L5.5 18.3V8.7L14 3.8Z" />
            <path d="M10 11.2L14 14L18 11.2M14 14V19.4" />
            <circle cx="14" cy="8.3" r="1.2" />
            <circle cx="18.2" cy="11.1" r="1.2" />
            <circle cx="9.8" cy="11.1" r="1.2" />
            <circle cx="14" cy="19.6" r="1.2" />
          </svg>
          <span className="brand-name">Michael Silva</span>
        </a>
        <nav aria-label="Navegacao principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="intro" id="inicio">
          <p className="section-label">Apresentacao</p>
          <h1>Michael Silva - Dev Full Stack</h1>
          <p>
            Desenvolvo scripts para jogos e bots para Discord com foco em
            qualidade tecnica, eficiencia e manutenção no longo prazo.
          </p>
        </section>

        <section className="panel" id="sobre">
          <p className="section-label">Sobre mim</p>
          <h2>Perfil profissional</h2>
          <p>
            Atuo no desenvolvimento de scripts para jogos e bots para Discord.
            Priorizo código limpo, boa organização de componentes e interface
            focada em usabilidade. Gosto de trabalhar com clareza de requisitos
            e melhoria contínua.
          </p>
        </section>

        <section className="panel" id="stack">
          <p className="section-label">Stack principal</p>
          <ul className="simple-list">
            <li>JavaScript e TypeScript</li>
            <li>Node.js e React</li>
            <li>Python e Lua</li>
            <li>APIs REST e Git</li>
          </ul>
        </section>

        <section className="panel" id="conhecimentos">
          <p className="section-label">Conhecimentos</p>
          <h2>Tecnologias e práticas</h2>
          <div className="tag-grid" aria-label="Conhecimentos em tecnologia">
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 4L10 20" />
              </svg>
              <span>HTML5</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="6" rx="1" />
                <rect x="4" y="14" width="16" height="6" rx="1" />
              </svg>
              <span>Node.js</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="18" cy="12" r="2" />
              </svg>
              <span>REST API</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 4L10 20" />
              </svg>
              <span>JavaScript</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3L4 7V12C4 16.5 7.1 20.7 12 22C16.9 20.7 20 16.5 20 12V7L12 3Z" />
              </svg>
              <span>Lua</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 4L10 20" />
              </svg>
              <span>TypeScript</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Python</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" />
              </svg>
              <span>React</span>
            </span>
            <span className="tech-chip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 7H18M6 12H14M6 17H12" />
              </svg>
              <span>Discord Bots</span>
            </span>
          </div>
        </section>

        <section className="panel" id="cursos">
          <p className="section-label">Cursos e formação</p>
          <h2>Capacitação contínua</h2>
          <ul className="simple-list">
            <li>
              Superior em Tecnologia de Análise e Desenvolvimento de Sistemas -
              UDF
            </li>
            <li>Curso de Ciberseguranca - Cisco</li>
          </ul>
        </section>

        <section className="contact" id="contato">
          <p className="section-label">Contato</p>
          <h2>Redes e contato profissional</h2>
          <p>
            Fique a vontade para entrar em contato por email ou pelas redes.
          </p>
          <div className="contact-actions">
            <a href="mailto:contato@michael.dev.br">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6H20V18H4V6ZM4 7L12 13L20 7" />
              </svg>
              <span>contato@michael.dev.br</span>
            </a>
            <a href="https://github.com/Lettify" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 4L10 20" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-felipe-ss"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="8" cy="8" r="2" />
                <path d="M6 20V13H10V20M14 20V11H18C19.1 11 20 11.9 20 13V20" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Michael Silva. Desenvolvimento com foco em resultado.</p>
      </footer>
    </div>
  )
}

export default App
