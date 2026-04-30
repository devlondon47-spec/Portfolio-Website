import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <motion.a 
          href="#" 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <Terminal size={24} className="primary-icon" />
          <span>Ansh Patel</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            className="mobile-menu glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all var(--transition-fast);
        }
        
        .navbar.scrolled {
          padding: 1rem 0;
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--text);
        }
        
        .primary-icon { color: var(--primary); }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        
        .nav-links a {
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }
        
        .theme-toggle {
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          color: var(--text);
          box-shadow: var(--card-shadow);
        }
        
        .mobile-actions {
          display: none;
          gap: 1rem;
        }
        
        .menu-toggle {
          color: var(--text);
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          border-top: 1px solid var(--border);
        }
        
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-actions { display: flex; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
