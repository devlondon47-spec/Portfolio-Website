import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Terminal size={24} className="primary-icon" />
            <span>Ansh Patel</span>
          </div>
          <p>Building the future of the web, one pixel at a time.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="link-group">
            <h4>Social</h4>
            <a href="https://github.com/devlondon47-spec" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dev-london-a09416394" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Ansh Patel. Made with <Heart size={14} className="heart-icon" /> and React.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          padding: 6rem 0 0;
          background: var(--background);
          border-top: 1px solid var(--border);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        
        .footer-brand p {
          margin-top: 1rem;
          color: var(--text-muted);
          max-width: 300px;
        }
        
        .footer-links {
          display: flex;
          justify-content: flex-end;
          gap: 5rem;
        }
        
        .link-group h4 {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          color: var(--text);
        }
        
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .link-group a {
          color: var(--text-muted);
          font-size: 0.9375rem;
        }
        
        .link-group a:hover {
          color: var(--primary);
        }
        
        .footer-bottom {
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          text-align: center;
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        .heart-icon {
          color: #ef4444;
          fill: #ef4444;
          display: inline;
          vertical-align: middle;
        }
        
        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; text-align: center; }
          .footer-brand { display: flex; flex-direction: column; align-items: center; }
          .footer-links { justify-content: center; gap: 3rem; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
