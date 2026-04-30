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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <motion.div 
        className="container nav-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-content">
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
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.5 }}
              >
                <a href={link.href} className="nav-link-item">{link.name}</a>
              </motion.li>
            ))}
            <motion.button 
              onClick={toggleTheme} 
              className="theme-toggle"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
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
      </motion.div>

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
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .nav-container {
          padding: 0.75rem 2rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
          border: 1px solid transparent;
          border-radius: 0;
        }

        .navbar.scrolled {
          padding: 1.25rem 0;
        }
        
        .navbar.scrolled .nav-container {
          max-width: 900px;
          border-radius: 5rem;
          background: var(--glass-bg);
          border-color: var(--border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);
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
          font-size: 1.25rem;
          color: var(--text);
        }
        
        .primary-icon { color: var(--primary); }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link-item {
          font-weight: 600;
          color: var(--text-muted);
          position: relative;
          font-size: 0.9375rem;
          transition: color 0.3s ease;
        }
        
        .nav-link-item:hover {
          color: var(--primary);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link-item:hover::after {
          width: 100%;
        }
        
        .theme-toggle {
          padding: 0.6rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          color: var(--text);
          box-shadow: var(--card-shadow);
          border: 1px solid var(--border);
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
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 4rem);
          max-width: 500px;
          margin-top: 1rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          border-radius: 2rem;
          border: 1px solid var(--border);
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
        }
        
        @media (max-width: 992px) {
           .navbar.scrolled .nav-container {
             max-width: calc(100% - 2rem);
           }
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
