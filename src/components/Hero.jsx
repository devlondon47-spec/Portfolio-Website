import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Available for new opportunities
          </motion.span>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm <span className="highlight">Ansh Patel</span>
          </motion.h1>
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            MERN Stack Developer & AI/ML Enthusiast
          </motion.h2>
          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting pixel-perfect digital experiences with modern web technologies. 
            Focused on building scalable applications that solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href="/Ansh_Patel_Portfolio.pdf" download className="btn btn-glass">
              <Download size={18} /> Download Portfolio
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/devlondon47-spec" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/dev-london-a09416394" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
            <a href="/Ansh_Patel_Portfolio.pdf" download className="social-icon"><Download size={20} /></a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="blob-bg"></div>
          <div className="image-wrapper floating">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Ansh" />
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
          background: radial-gradient(circle at 10% 20%, var(--glass-bg) 0%, transparent 40%);
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        
        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(37, 99, 235, 0.1);
          color: var(--primary);
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        
        .highlight {
          color: var(--primary);
        }
        
        .hero-subtitle {
          font-size: 1.75rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        .hero-tagline {
          font-size: 1.125rem;
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        
        .hero-btns {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        
        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          background: var(--surface);
          color: var(--text);
          border: 1px solid var(--border);
        }
        
        .btn-secondary:hover {
          background: var(--border);
        }
        
        .btn-glass {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary);
        }
        
        .hero-socials {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-icon {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }
        
        .social-icon:hover {
          color: var(--primary);
        }
        
        .hero-image {
          position: relative;
        }
        
        .blob-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: var(--primary);
          filter: blur(80px);
          opacity: 0.15;
          z-index: -1;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: blobby 10s infinite alternate;
        }
        
        @keyframes blobby {
          from { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          to { border-radius: 50% 50% 20% 80% / 60% 40% 60% 40%; }
        }
        
        .image-wrapper {
          width: 380px;
          height: 380px;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          border: 4px solid var(--surface);
        }
        
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-text {
            order: 2;
          }
          
          .hero-image {
            order: 1;
            display: flex;
            justify-content: center;
          }
          
          .hero-btns, .hero-socials {
            justify-content: center;
          }
          
          .hero-tagline {
            margin-left: auto;
            margin-right: auto;
          }
          
          .image-wrapper {
            width: 300px;
            height: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.5rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
