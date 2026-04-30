import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const ResumeView = ({ onClose }) => {
  return (
    <motion.div 
      className="resume-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="resume-header-bar glass">
        <div className="container header-bar-content">
          <button onClick={onClose} className="btn btn-secondary back-btn">
            <ArrowLeft size={20} /> Back to Site
          </button>
          <a href="./Ansh_Patel_Resume.html" target="_blank" className="btn btn-primary download-btn">
            <Download size={20} /> Save as PDF
          </a>
        </div>
      </div>

      <div className="resume-paper-container">
        <motion.div 
          className="resume-paper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Header */}
          <header className="resume-header">
            <h1>Ansh Patel</h1>
            <p className="subtitle">MERN Stack Developer & AI/ML Enthusiast</p>
            <div className="resume-contact">
              <span><Mail size={14} /> anshpatel8780@gmail.com</span>
              <span><Phone size={14} /> +91 8780XXXXXX</span>
              <span><MapPin size={14} /> India</span>
            </div>
            <div className="resume-links">
              <a href="https://github.com/devlondon47-spec"><Github size={14} /> GitHub</a>
              <a href="https://www.linkedin.com/in/dev-london-a09416394"><Linkedin size={14} /> LinkedIn</a>
              <a href="#"><Globe size={14} /> Portfolio</a>
            </div>
          </header>

          <div className="resume-grid">
            <div className="resume-left">
              <section>
                <h3>Profile Summary</h3>
                <p>Passionate Full-Stack Developer with a strong foundation in the MERN stack and a growing expertise in Artificial Intelligence and Machine Learning. Committed to building scalable, user-centric applications and exploring intelligent automation solutions.</p>
              </section>

              <section>
                <h3>Technical Skills</h3>
                <div className="skill-group">
                  <h4>Frontend</h4>
                  <p>React.js, Next.js, Tailwind CSS, Framer Motion, HTML5, CSS3</p>
                </div>
                <div className="skill-group">
                  <h4>Backend</h4>
                  <p>Node.js, Express.js, RESTful APIs</p>
                </div>
                <div className="skill-group">
                  <h4>Database</h4>
                  <p>MongoDB, PostgreSQL, Firebase</p>
                </div>
                <div className="skill-group">
                  <h4>AI & ML</h4>
                  <p>Python, Pandas, NumPy, Scikit-Learn, Predictive Modeling</p>
                </div>
              </section>
            </div>

            <div className="resume-right">
              <section>
                <h3>Education</h3>
                <div className="edu-item">
                  <h4>B.Tech in Computer Science</h4>
                  <p className="edu-date">2022 - 2026</p>
                  <p>Focusing on Core CS principles and Advanced Web Technologies.</p>
                </div>
              </section>

              <section>
                <h3>Key Projects</h3>
                <div className="project-item">
                  <h4>NexGen E-Commerce</h4>
                  <p>Full-stack commerce solution with real-time inventory management.</p>
                </div>
                <div className="project-item">
                  <h4>AI TaskMaster</h4>
                  <p>Intelligent project management tool using OpenAI and FastAPI.</p>
                </div>
              </section>

              <section>
                <h3>Certifications</h3>
                <ul>
                  <li>Meta Front-End Developer Professional Certificate</li>
                  <li>Machine Learning Specialization - Coursera</li>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .resume-view {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: var(--background);
          overflow-y: auto;
          color: #1a1a1a;
        }

        .resume-header-bar {
          position: sticky;
          top: 0;
          width: 100%;
          padding: 1rem 0;
          z-index: 10;
          border-bottom: 1px solid var(--border);
        }

        .header-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .resume-paper-container {
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          background: #f1f5f9;
        }

        [data-theme='dark'] .resume-paper-container {
          background: #020617;
        }

        .resume-paper {
          width: 100%;
          max-width: 850px;
          background: white;
          padding: 4rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 3rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 2rem;
        }

        .resume-header h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          color: #0f172a;
          font-family: var(--font-heading);
        }

        .resume-header .subtitle {
          font-size: 1.25rem;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .resume-contact, .resume-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        .resume-contact span, .resume-links a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .resume-links a {
          color: #3b82f6;
          text-decoration: none;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
        }

        section {
          margin-bottom: 2.5rem;
        }

        section h3 {
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0f172a;
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin-bottom: 1.5rem;
        }

        .skill-group {
          margin-bottom: 1rem;
        }

        .skill-group h4 {
          font-size: 0.9375rem;
          color: #475569;
          margin-bottom: 0.25rem;
        }

        .skill-group p {
          color: #64748b;
          font-size: 0.875rem;
        }

        .edu-item, .project-item {
          margin-bottom: 1.5rem;
        }

        .edu-item h4, .project-item h4 {
          font-size: 1rem;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .edu-date {
          font-size: 0.8125rem;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        section p, section li {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #475569;
        }

        ul {
          padding-left: 1.25rem;
        }

        @media (max-width: 768px) {
          .resume-paper { padding: 2rem; }
          .resume-grid { grid-template-columns: 1fr; }
          .resume-contact, .resume-links { flex-direction: column; gap: 0.5rem; align-items: center; }
        }
      `}} />
    </motion.div>
  );
};

export default ResumeView;
