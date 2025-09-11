import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Software Artisan</span>
          </div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">Software</span>
              <span className="title-line accent">Artisan</span>
            </h1>
            <p className="hero-subtitle">Crafting elegant digital solutions with precision and creativity</p>
            <div className="hero-description">
              <p>I transform complex problems into simple, beautiful, and functional software solutions. 
              With a passion for clean code and innovative design, I create digital experiences that matter.</p>
            </div>
            <div className="cta-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">View Projects</button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Web Application Platform</h3>
                <span className="project-type">Full-Stack</span>
              </div>
              <p className="project-description">
                A scalable web platform built with modern technologies, featuring real-time data processing 
                and intuitive user interfaces.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>Mobile-First Design System</h3>
                <span className="project-type">Frontend</span>
              </div>
              <p className="project-description">
                A comprehensive design system and component library that ensures consistency 
                across multiple platforms and devices.
              </p>
              <div className="project-tech">
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Figma</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>API Integration Suite</h3>
                <span className="project-type">Backend</span>
              </div>
              <p className="project-description">
                A robust API integration platform that connects multiple services with 
                efficient data handling and error management.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-content">
            <div className="skills-category">
              <h3 className="skills-category-title">Frontend Craft</h3>
              <div className="skills-list">
                <span className="skill-item">React & Vue.js</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">CSS3 & Sass</span>
                <span className="skill-item">Responsive Design</span>
                <span className="skill-item">UI/UX Principles</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3 className="skills-category-title">Backend Engineering</h3>
              <div className="skills-list">
                <span className="skill-item">Node.js & Python</span>
                <span className="skill-item">API Development</span>
                <span className="skill-item">Database Design</span>
                <span className="skill-item">Cloud Services</span>
                <span className="skill-item">DevOps Practices</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3 className="skills-category-title">Tools & Methods</h3>
              <div className="skills-list">
                <span className="skill-item">Git & GitHub</span>
                <span className="skill-item">Agile Development</span>
                <span className="skill-item">Testing Frameworks</span>
                <span className="skill-item">CI/CD Pipelines</span>
                <span className="skill-item">Code Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Collaborate</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-description">
                Ready to bring your ideas to life? I'm always excited to work on innovative projects 
                and collaborate with like-minded professionals.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">hello@softwareartisan.dev</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/ilir2001</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Professional Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Software Artisan. Crafted with precision and passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
