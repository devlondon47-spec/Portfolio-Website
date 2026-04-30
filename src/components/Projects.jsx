import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X, BookOpen } from 'lucide-react';
import { Github } from './SocialIcons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'NexGen E-Commerce',
      description: 'A full-scale headless commerce solution with real-time inventory and global payments.',
      problem: 'Existing e-commerce platforms were slow, hard to customize, and had high transaction fees for global sellers.',
      solution: 'Built a custom headless architecture using Next.js and Stripe, resulting in 40% faster load times and 15% lower operational costs.',
      tech: ['React', 'Next.js', 'Node.js', 'Stripe', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'CryptoTrack Pro',
      description: 'Real-time cryptocurrency portfolio tracker with advanced analytics and price alerts.',
      problem: 'Users struggled to track assets across multiple exchanges and wallets in a unified, secure dashboard.',
      solution: 'Developed a secure aggregation engine that connects to major exchanges via encrypted APIs, providing a 360-degree view of holdings.',
      tech: ['TypeScript', 'React', 'Tailwind', 'Firebase', 'CoinGecko API'],
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=600',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'AI TaskMaster',
      description: 'Intelligent project management tool that automates task prioritization using machine learning.',
      problem: 'Teams spend 20% of their time just managing and prioritizing tasks instead of actually completing them.',
      solution: 'Implemented an AI model that analyzes task urgency and team capacity to automatically suggest the most efficient workflow.',
      tech: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
      github: '#',
      live: '#',
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div 
          className="projects-grid"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card glass"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-btns">
                    <button onClick={() => setSelectedProject(project)} className="overlay-btn">
                      <BookOpen size={20} /> Case Study
                    </button>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                      <Eye size={20} /> Preview
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} className="link-icon"><Github size={20} /></a>
                  <a href={project.live} className="link-icon"><ExternalLink size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="view-all-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/devlondon47-spec?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content glass"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-header-text">
                   <h2>{selectedProject.title}</h2>
                   <div className="project-tech">
                    {selectedProject.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-section">
                  <h3><span className="dot error"></span> The Problem</h3>
                  <p>{selectedProject.problem}</p>
                </div>
                <div className="modal-section">
                  <h3><span className="dot success"></span> The Solution</h3>
                  <p>{selectedProject.solution}</p>
                </div>
                <div className="modal-footer">
                  <a href={selectedProject.live} className="btn btn-primary">Live Demo</a>
                  <a href={selectedProject.github} className="btn btn-secondary">Source Code</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects {
          background-color: var(--surface);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        
        .view-all-wrapper {
          display: flex;
          justify-content: center;
        }
        
        .project-card {
          border-radius: 1.5rem;
          overflow: hidden;
          transition: transform var(--transition-fast);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
        }
        
        .project-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .overlay-btns {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .overlay-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--surface);
          color: var(--text);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
        }
        
        .project-info {
          padding: 2rem;
        }
        
        .project-info h3 {
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
        }
        
        .project-info p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .project-tech span {
          background: var(--background);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid var(--border);
        }
        
        .project-links {
          display: flex;
          gap: 1.25rem;
          border-top: 1px solid var(--border);
          padding-top: 1.25rem;
        }
        
        .link-icon {
          color: var(--text-muted);
        }
        
        .link-icon:hover {
          color: var(--primary);
        }
        
        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .modal-content {
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 2rem;
          position: relative;
          background: var(--background);
        }
        
        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--surface);
          color: var(--text);
          padding: 0.5rem;
          border-radius: 50%;
          z-index: 10;
        }
        
        .modal-header img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }
        
        .modal-header-text {
          padding: 2rem 2.5rem 1rem;
        }
        
        .modal-header-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .modal-body {
          padding: 0 2.5rem 2.5rem;
        }
        
        .modal-section {
          margin-bottom: 2rem;
        }
        
        .modal-section h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .dot.error { background: #ef4444; }
        .dot.success { background: #22c55e; }
        
        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
        }
        
        @media (max-width: 768px) {
          .modal-header-text h2 { font-size: 1.75rem; }
          .modal-header img { height: 200px; }
          .modal-header-text, .modal-body { padding: 1.5rem; }
        }
      `}} />
    </section>
  );
};

export default Projects;
