import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  ExternalLink, Layers3, MousePointer2, Code2, Sparkles, MonitorSmartphone,
  Check, ArrowRight
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'TrafficEye AI',
    category: 'PRODUCT CONCEPT · COMPUTER VISION',
    description: 'A traffic-violation workflow that brings detection, number-plate recognition, and digital challan management into one clear experience.',
    tags: ['React', 'FastAPI', 'YOLO', 'OCR'],
    tone: 'traffic',
    outcome: 'Workflow-first interface',
    details: ['Contributed to the detection workflow and UI direction for the project.', 'Organized violation details so important evidence is easy to scan.', 'Explored a dashboard structure for operational users.'],
    link: 'https://github.com/yagnesh747/trafficeye-ai7'
  },
  {
    number: '02',
    title: 'Phishing & Smishing Detection',
    category: 'AI PRODUCT · TRUST & SAFETY',
    description: 'A security-focused concept for checking suspicious URLs and SMS messages, with the result and reasoning presented in a user-friendly way.',
    tags: ['React', 'Python', 'FastAPI', 'NLP'],
    tone: 'phishing',
    outcome: 'Explainable risk feedback',
    details: ['Worked on SMS analysis and NLP processing as part of the phishing-detection project.', 'Presents risk feedback in plain language instead of model jargon.', 'Separates the input, result, and supporting signals into clear sections.'],
    link: 'https://github.com/yagnesh747/url-and-sms-phishing-detection'
  },
  {
    number: '03',
    title: 'GigShield',
    category: 'INSURANCE PLATFORM · HACKATHON CONCEPT',
    description: 'A parametric-insurance concept designed to make protection for gig workers easier to understand, explore, and access.',
    tags: ['JavaScript', 'APIs', 'Product thinking'],
    tone: 'gig',
    outcome: 'User-centered service flow',
    details: ['Frames the value proposition around workers’ real needs.', 'Breaks a complex insurance concept into smaller steps.', 'Explores how status and next actions can stay visible to users.'],
    link: 'https://github.com/yagnesh747/Ai-Github-Worker-Insurance'
  },
  {
    number: '04',
    title: 'TravelGenie AI',
    category: 'AI WEB APP · DISCOVERY',
    description: 'An AI travel-planning project focused on making destination discovery and itinerary exploration feel approachable.',
    tags: ['JavaScript', 'AI', 'Web UI'],
    tone: 'travel',
    outcome: 'Discovery-led experience',
    details: ['Prioritizes a straightforward starting point for trip planning.', 'Groups related trip information for easier browsing.', 'Uses a modular interface approach that can grow with features.'],
    link: 'https://github.com/yagnesh747/TravelGenie-AI'
  }
]

const skills = [
  { title: 'Frontend engineering', text: 'React fundamentals, JavaScript, HTML5, CSS3, responsive layouts, reusable UI components' },
  { title: 'Interface & UX', text: 'Learning UI/UX principles, visual hierarchy, user flows, information architecture, usability, interaction states, consistency' },
  { title: 'Product thinking', text: 'Problem framing, task-focused screens, clear feedback, simplifying technical concepts for users' },
  { title: 'Tools & collaboration', text: 'Git, GitHub, VS Code, Figma / UI/UX (learning), API integration, iterative prototyping' }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const email = 'jallavenkatesh747@gmail.com'

  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="nav-wrap">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Jalla Yagnesh home">
          <span className="mark">jy<span>.</span></span><span className="wordmark-label">DESIGN × ENGINEERING</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#about" onClick={closeMenu}>About</a>\n          <a href="#credentials" onClick={closeMenu}>Experience</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR INTERNSHIP & FULL-TIME OPPORTUNITIES</div>
            <p className="hero-name">JALLA YAGNESH</p>
            <h1>I build digital<br />experiences that feel<br /><span className="serif-accent">clear, useful & human.</span></h1>
            <p className="hero-intro">I’m Jalla Venkata Naga Sai Manikanta Yagnesh — a B.Tech Computer Science Engineering (AI) student at Parul University, building web and AI projects while developing my frontend engineering and UI/UX design skills.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">FOCUS</span><strong>Frontend + Product UX</strong></div>
              <div><span className="meta-label">BASED IN</span><strong>India · Open to Hyderabad</strong></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract interface design illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-caption caption-top"><span>FIG. 01</span><span>DESIGN IN MOTION</span></div>
            <div className="mock-window">
              <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>experience.studio</span><span className="window-menu">•••</span></div>
              <div className="mock-content">
                <div className="mock-kicker"><span className="tiny-square" /> PRODUCT SNAPSHOT</div>
                <div className="mock-title">Make the<br/><em>complex</em> feel simple.</div>
                <div className="mock-line line-long" /><div className="mock-line line-short" />
                <div className="mock-bottom"><span className="mock-button">Explore flow <ArrowUpRight size={12}/></span><div className="mock-avatar">jy</div></div>
              </div>
            </div>
            <div className="floating-card card-a"><span className="float-icon"><MousePointer2 size={15}/></span><div><b>Thoughtful UI</b><small>Designed for real tasks</small></div></div>
            <div className="floating-card card-b"><span className="float-icon purple"><Layers3 size={15}/></span><div><b>Reusable systems</b><small>Built to scale</small></div></div>
            <div className="visual-caption caption-bottom"><span>STRUCTURE</span><span>DETAIL</span><span>INTENT</span></div>
          </div>
          <div className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
        </section>

        <section className="trust-strip" aria-label="Areas of practice">
          <span>CURIOUS BY NATURE</span><i>✳</i><span>ENGINEERED WITH INTENT</span><i>✳</i><span>DESIGNED FOR PEOPLE</span><i>✳</i><span>ALWAYS ITERATING</span>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div><div className="eyebrow">01 / SELECTED WORK</div><h2>Projects with a<br/><span className="serif-accent">purpose behind the pixels.</span></h2></div>
            <p className="section-note">A selection of AI and web projects where I’ve explored how technology can become a more understandable, usable product.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-art">
                  <div className="art-top"><span>PROJECT / {project.number}</span><span className="art-arrow"><ArrowUpRight size={18}/></span></div>
                  {project.tone === 'traffic' && <div className="traffic-ui"><div className="traffic-sidebar"><b>TE<span>.</span></b><i/><i/><i/></div><div className="traffic-main"><div className="art-label">LIVE OVERVIEW</div><div className="traffic-stat"><b>Detection<br/>overview</b><span>↗</span></div><div className="traffic-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="traffic-footer"><span>REVIEW QUEUE</span><b>12 items <ArrowRight size={12}/></b></div></div></div>}
                  {project.tone === 'phishing' && <div className="phish-ui"><div className="shield"><Check size={27}/></div><div className="phish-label">MESSAGE ANALYSIS</div><div className="phish-url">https://example-check.com <ArrowUpRight size={13}/></div><div className="risk-row"><span className="risk-dot"/><b>Review recommended</b><span>72 / 100</span></div><div className="risk-track"><i/></div><div className="phish-foot">RISK SIGNALS <span>03 FOUND</span></div></div>}
                  {project.tone === 'gig' && <div className="gig-ui"><div className="gig-pill">GIGSHIELD / MEMBER SPACE</div><div className="gig-big">Protection<br/><em>that moves<br/>with you.</em></div><div className="gig-bottom"><span>YOUR COVER, AT A GLANCE</span><span className="gig-circle">↗</span></div></div>}
                  {project.tone === 'travel' && <div className="travel-ui"><div className="travel-top"><span>TRAVELGENIE</span><span>✳</span></div><div className="travel-big">Find your<br/><em>somewhere.</em></div><div className="travel-search"><span>Where do you want to go?</span><span className="search-go">↗</span></div><div className="travel-chips"><i>WEEKEND</i><i>NATURE</i><i>CULTURE</i></div></div>}
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-bottom"><span>{project.outcome}</span><button onClick={() => setActiveProject(activeProject === index ? null : index)} aria-expanded={activeProject === index}>{activeProject === index ? 'Close details −' : 'View thinking +'}</button></div>
                  {activeProject === index && <div className="project-details"><strong>Design & build notes</strong><ul>{project.details.map(item => <li key={item}>{item}</li>)}</ul><a href={project.link} target="_blank" rel="noreferrer">Explore repository <ExternalLink size={13}/></a></div>}
                </div>
              </article>
            ))}
          </div>
          <p className="portfolio-note"><span>NOTE</span> Project visuals on this page are original portfolio mockups to communicate the product direction. Open each repository to review the actual implementation and current project status.</p>
        </section>

        <section className="approach-section" id="approach">
          <div className="section approach-inner">
            <div className="eyebrow">02 / HOW I THINK</div>
            <div className="approach-layout">
              <h2>Good UX isn’t<br/>decoration. It’s <span className="serif-accent">clarity.</span></h2>
              <div className="approach-right"><p className="approach-intro">I like asking what a user is trying to accomplish before deciding what a screen should look like. Then I work to make the path obvious, the feedback useful, and the interface consistent.</p>
                <div className="principles">
                  <div><span>01</span><div><h3>Start with the user</h3><p>Understand the task, the context, and what “done” means.</p></div></div>
                  <div><span>02</span><div><h3>Make hierarchy do the work</h3><p>Use layout, typography, and spacing to guide attention naturally.</p></div></div>
                  <div><span>03</span><div><h3>Build for real states</h3><p>Think through loading, empty, error, and success—not just the happy path.</p></div></div>
                  <div><span>04</span><div><h3>Refine through iteration</h3><p>Keep components consistent and improve details with feedback.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="about">
          <div className="section-heading">
            <div><div className="eyebrow">03 / TOOLKIT & MINDSET</div><h2>Engineering meets<br/><span className="serif-accent">design sensibility.</span></h2></div>
            <p className="section-note">My foundation is in computer science. I’m actively building my frontend craft and developing a stronger product-design practice.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => <div className="skill-item" key={skill.title}><span className="skill-index">0{i + 1}</span><div><h3>{skill.title}</h3><p>{skill.text}</p></div><ArrowUpRight className="skill-arrow" size={18}/></div>)}
          </div>
          <div className="education-band"><div className="edu-icon"><MonitorSmartphone size={22}/></div><div><span className="meta-label">EDUCATION</span><h3>B.Tech, Computer Science Engineering (AI)</h3><p>Parul University, Vadodara · Expected 2027 · CGPA 7.89</p></div><div className="edu-right"><span className="meta-label">CURRENTLY</span><strong>Learning by building</strong></div></div>
        </section>

        <section className="section credentials-section" id="credentials">
          <div className="section-heading">
            <div><div className="eyebrow">04 / EXPERIENCE & RECOGNITION</div><h2>Learning through<br/><span className="serif-accent">building and doing.</span></h2></div>
            <p className="section-note">Internship, certificates, and hackathon milestones shared so far. Dates, certificate links, and any details not supplied are clearly left unconfirmed.</p>
          </div>
          <div className="credential-grid">
            <article className="credential-card">
              <span className="credential-number">01 / INTERNSHIP</span>
              <h3>WeIntern — Artificial Intelligence Intern</h3>
              <p>Artificial Intelligence Intern, as shared. Internship dates, specific responsibilities, deliverables, and completion status have not been provided.</p>
            </article>
            <article className="credential-card">
              <span className="credential-number">02 / CERTIFICATE</span>
              <h3>Wipro Java Certification</h3>
              <p>Title provided by the portfolio owner. Official certificate wording and credential link have not been independently verified.</p>
            </article>
            <article className="credential-card">
              <span className="credential-number">03 / CERTIFICATES</span>
              <h3>Infosys AI & UI/UX · Deloitte</h3>
              <p>Infosys Artificial Intelligence Certificate and Infosys UI UX Certificate, as provided. “Deloitte certificate” was supplied without a specific title; official titles and credential links remain unconfirmed.</p>
            </article>
            <article className="credential-card">
              <span className="credential-number">04 / HACKATHONS</span>
              <h3>HackVega 2.0 & Gridlock Hackathon 2.0</h3>
              <p>HackVega 2.0: finalist / shortlisted for the final round. Gridlock Hackathon 2.0: shortlisted for Round 2 — Prototype Phase, as provided.</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section contact-inner">
            <div className="eyebrow">05 / THE NEXT CHAPTER</div>
            <h2>Let’s make something<br/><span className="serif-accent">worth using.</span></h2>
            <p>I’m interested in opportunities that let me bring frontend craft, curiosity, and a user-first mindset to a product team.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={16}/>{copied ? 'Email copied' : 'Copy email'} {copied && <Check size={15}/>}</button>
              <a className="button button-outline" href="https://github.com/yagnesh747" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={15}/></a>
              <a className="button button-outline" href="https://www.linkedin.com/in/yagnesh-jalla-23b060345/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={15}/></a>
            </div>
            <div className="contact-email">{email}</div>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="wordmark" href="#home"><span className="mark">jy<span>.</span></span></a><span>DESIGNED WITH INTENT · BUILT TO KEEP EVOLVING</span><a href="#home">BACK TO TOP ↑</a><span>© 2026 JALLA YAGNESH</span></footer>
    </div>
  )
}

export default App
