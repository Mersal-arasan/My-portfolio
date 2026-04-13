import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";

const navLinks = [
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#internships", id: "internships", label: "Internships" },
  { href: "#portfolio", id: "portfolio", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/your-profile",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/your-username",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.instagram.com/your-handle",
    label: "Instagram",
    icon: InstagramIcon,
  },
];

const skills = [
  "Advanced Excel",
  "SQL",
  "Python",
  "Data Validation",
  "Data Cleaning",
  "Reporting",
];

const experienceItems = [
  {
    title: "AI System Engineer",
    company: "BluBridge Technologies",
    period: "Mar 2026",
    points: [
      "Understood hardware requirements for training an efficient client-based AI application.",
      "Optimized system resources to improve hardware efficiency for AI workloads.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company: "Skill Builder Academy",
    period: "Jun 2024",
    points: [
      "Collected and cleaned IoT sensor data using Excel and Python.",
      "Performed data validation and prepared structured reports from processed datasets.",
    ],
  },
];

const internshipItems = [
  {
    title: "Data Analytics Intern",
    org: "Skill Builder Academy",
    description:
      "Worked on collecting, cleaning, and validating IoT sensor data using Excel and Python.",
  },
  {
    title: "AI System Engineer",
    org: "BluBridge Technologies",
    description:
      "Learned hardware planning and optimization for efficient client-based AI application workflows.",
  },
  {
    title: "Structured Data Handling",
    org: "Hands-on Practice",
    description:
      "Built practical experience in data entry, validation, and maintaining accuracy in datasets.",
  },
];

const projectItems = [
  {
    title: "RFID-Based Student Data System",
    description:
      "Developed a system to collect and manage user data using Python and MySQL with a strong focus on data accuracy.",
    tags: ["Python", "MySQL", "Data Accuracy"],
  },
  {
    title: "Teaching Robot Using AI by User Inputs",
    description:
      "Collected and processed sensor data to improve response accuracy in an AI-driven teaching robot workflow.",
    tags: ["AI", "Sensor Data", "Python"],
  },
  {
    title: "Data Analytics with Python",
    description:
      "Applied Python-based analysis techniques in certification work focused on structured data handling and insights.",
    tags: ["Python", "Analytics", "Certification"],
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.96c0 1.05.86 1.92 1.93 1.92h.02c1.09 0 1.95-.87 1.95-1.92C7.2 3.88 6.34 3 5.25 3ZM20.7 12.74c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.67c.04.68 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.93.27-.68.89-1.39 1.93-1.39 1.36 0 1.9 1.04 1.9 2.57V20h3.39v-6.9Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.73.5 12.18c0 5.16 3.3 9.54 7.88 11.09.58.11.79-.26.79-.57 0-.28-.01-1.03-.02-2.03-3.2.71-3.88-1.57-3.88-1.57-.53-1.36-1.29-1.72-1.29-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.22 1.78 1.22 1.04 1.82 2.72 1.29 3.38.98.11-.77.41-1.29.74-1.59-2.55-.3-5.24-1.3-5.24-5.79 0-1.28.45-2.33 1.18-3.15-.12-.3-.51-1.53.11-3.19 0 0 .97-.32 3.19 1.2a10.85 10.85 0 0 1 5.81 0c2.22-1.52 3.18-1.2 3.18-1.2.63 1.66.24 2.89.12 3.19.74.82 1.18 1.87 1.18 3.15 0 4.5-2.7 5.48-5.28 5.78.42.37.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.69.8.57A11.71 11.71 0 0 0 23.5 12.18C23.5 5.73 18.35.5 12 .5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95h-8.5ZM17.4 6.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -40% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}

function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal='section']");

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    sections.forEach((section, index) => {
      section.style.setProperty("--reveal-delay", `${index * 90}ms`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}

function useInlineNavbar(heroRef) {
  const [showInlineNav, setShowInlineNav] = useState(false);

  useEffect(() => {
    const heroElement = heroRef.current;

    if (!heroElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowInlineNav(!entry.isIntersecting);
      },
      {
        threshold: 0.18,
        rootMargin: "-72px 0px 0px 0px",
      }
    );

    observer.observe(heroElement);

    return () => observer.disconnect();
  }, [heroRef]);

  return showInlineNav;
}

function handleTilt(event) {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const rotateY = ((x / bounds.width) * 14 - 7).toFixed(2);
  const rotateX = (((bounds.height - y) / bounds.height) * 14 - 7).toFixed(2);

  card.style.setProperty("--rotate-x", `${rotateX}deg`);
  card.style.setProperty("--rotate-y", `${rotateY}deg`);
  card.style.setProperty("--glow-x", `${(x / bounds.width) * 100}%`);
  card.style.setProperty("--glow-y", `${(y / bounds.height) * 100}%`);
}

function resetTilt(event) {
  const card = event.currentTarget;
  card.style.setProperty("--rotate-x", "0deg");
  card.style.setProperty("--rotate-y", "0deg");
  card.style.setProperty("--glow-x", "50%");
  card.style.setProperty("--glow-y", "50%");
}

function TiltCard({ className = "", children }) {
  return (
    <div
      className={`tilt-card ${className}`.trim()}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      <div className="tilt-card-inner panel-card">{children}</div>
    </div>
  );
}

function Section({ id, kicker, title, description, children }) {
  return (
    <section
      id={id}
      className="section-shell section-fade"
      data-reveal="section"
    >
      <div className="section-heading">
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Hero({ heroRef }) {
  return (
    <header ref={heroRef} className="hero-section">
      <div className="hero-copy">
        <span className="mini-label hero-eyebrow">Data Analyst</span>
        <span className="hero-badge">Open To Data Analyst Opportunities</span>
        <h1>Udhaya K</h1>
        <p>
          Detail-oriented and motivated fresher with a strong foundation in data
          handling, Excel, and basic data analysis, with a focus on accurate
          structured datasets and clear reporting.
        </p>
        <div className="hero-highlights">
          <span>Data Entry</span>
          <span>Data Validation</span>
          <span>Excel Analysis</span>
        </div>
        <div className="hero-actions">
          <a className="button-primary" href="#portfolio">
            View Projects
          </a>
          <a className="button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="social-links hero-social-links">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                className="social-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="hero-stats">
          <div className="hero-stat-card">
            <strong>Excel</strong>
            <span>Cleaning, formatting, and basic analysis</span>
          </div>
          <div className="hero-stat-card">
            <strong>Python</strong>
            <span>Data processing and structured reporting workflows</span>
          </div>
          <div className="hero-stat-card">
            <strong>Accuracy</strong>
            <span>Validation, detail focus, and reliable data handling</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-core">
          <strong>Data + Accuracy</strong>
          <span>Analyst Role</span>
        </div>
        <div className="hero-floating-card hero-floating-top">
          Excel Reports
        </div>
        <div className="hero-floating-card hero-floating-bottom">
          Data Validation
        </div>
        <div className="hero-floating-card hero-floating-side">
          Excel | Python | MySQL
        </div>
      </div>
    </header>
  );
}

function InlineNavbar({ activeSection, showInlineNav }) {
  return (
    <div
      className={`navbar-inline ${
        showInlineNav ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="name">Udhaya K</div>
      <div className="nav-items">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "nav-link-active" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeSection = useActiveSection(sectionIds);
  const heroRef = useRef(null);
  const showInlineNav = useInlineNavbar(heroRef);

  useSectionReveal();

  return (
    <div className="app-shell">
      <div className="page-grid" />
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <InlineNavbar
        activeSection={activeSection}
        showInlineNav={showInlineNav}
      />

      <main className="content-shell">
        <Hero heroRef={heroRef} />

        <Section
          id="about"
          kicker="Introduction"
          title="Working carefully with data to create reliable insights"
          description="I am interested in data analyst roles where accuracy, structured thinking, and clean reporting help teams make better decisions."
        >
          <div className="two-column">
            <TiltCard>
              <span className="mini-label">Professional Summary</span>
              <h3>Strong foundation in data handling and validation</h3>
              <p>
                Detail-oriented and motivated fresher with problem-solving
                ability and a keen interest in working with structured data and
                content processing tasks.
              </p>
            </TiltCard>
            <TiltCard>
              <span className="mini-label">What I Work With</span>
              <h3>Excel, Python, MySQL, and data validation workflows</h3>
              <p>
                I focus on maintaining data quality, preparing clear reports,
                and supporting analysis with accuracy and consistency.
              </p>
            </TiltCard>
          </div>
        </Section>

        <Section
          id="skills"
          kicker="Toolkit"
          title="Core analytical skills"
          description="A practical toolkit for cleaning data, validating records, and supporting basic analysis and reporting."
        >
          <div className="cards-grid cards-grid-three">
            {skills.map((skill) => (
              <TiltCard key={skill}>
                <span className="mini-label">Skill</span>
                <h3>{skill}</h3>
                <p>
                  Applied to data preparation, structured analysis, and accurate
                  reporting tasks.
                </p>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          kicker="Journey"
          title="Internship and technical experience"
          description="Hands-on experience in data analytics, reporting, and technical problem-solving."
        >
          <div className="cards-grid">
            {experienceItems.map((item) => (
              <TiltCard key={item.title}>
                <div className="card-topline">
                  <span className="mini-label">{item.company}</span>
                  <span>{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <ul className="feature-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section
          id="internships"
          kicker="Internships"
          title="Hands-on exposure to analytics and data workflows"
          description="Early experience that strengthened my understanding of data collection, accuracy, and structured reporting."
        >
          <div className="cards-grid cards-grid-three">
            {internshipItems.map((item) => (
              <TiltCard key={item.title}>
                <span className="mini-label">{item.org}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section
          id="portfolio"
          kicker="Featured Work"
          title="Projects focused on data handling and analysis"
          description="Selected projects that highlight data collection, validation, storage, and analysis-oriented problem solving."
        >
          <div className="cards-grid cards-grid-three">
            {projectItems.map((project) => (
              <TiltCard key={project.title}>
                <span className="mini-label">Project</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          kicker="Contact"
          title="Let's connect for data analyst opportunities"
          description="If you are looking for a detail-oriented fresher for data analyst or related data roles, I would love to connect."
        >
          <div className="two-column">
            <TiltCard className="contact-card">
              <span className="mini-label">Reach Out</span>
              <h3>
                <a href="mailto:kudhaya21042004@gmail.com">
                  kudhaya21042004@gmail.com
                </a>
              </h3>
              <p>
                Chennai | +91 6385599874. Share your opportunity, project, or
                collaboration plan and I will get back to you.
              </p>
            </TiltCard>

            <div className="panel-card contact-card">
              <span className="mini-label">Quick Message</span>
              <form className="contact-form">
                <input placeholder="Your Name" />
                <input placeholder="Your Email" />
                <textarea placeholder="Message" rows="5" />
                <button type="submit" className="button-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Udhaya K. Data Analyst Portfolio.</p>
      </footer>
    </div>
  );
}
