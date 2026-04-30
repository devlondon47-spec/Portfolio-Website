import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // User should replace this

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormState('success');
        e.target.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about your project</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="contact-methods">
              <div className="method">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>anshpatel8780@gmail.com</p>
                </div>
              </div>
              <div className="method">
                <div className="method-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="method">
                <div className="method-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/devlondon47-spec" target="_blank" rel="noopener noreferrer" className="glass"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/dev-london-a09416394" target="_blank" rel="noopener noreferrer" className="glass"><Linkedin size={20} /></a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Ansh" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="ansh@example.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${formState}`}
                disabled={formState === 'loading'}
              >
                {formState === 'idle' && <><Send size={18} /> Send Message</>}
                {formState === 'loading' && 'Sending...'}
                {formState === 'success' && 'Message Sent!'}
                {formState === 'error' && 'Error! Try Again'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact {
          background-color: var(--surface);
          position: relative;
          overflow: hidden;
        }
        
        .contact::before {
          content: '';
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: var(--primary);
          filter: blur(150px);
          opacity: 0.05;
          z-index: 0;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          position: relative;
          z-index: 1;
        }
        
        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .contact-info p {
          color: var(--text-muted);
          margin-bottom: 3rem;
          font-size: 1.125rem;
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .method {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        
        .method-icon {
          width: 48px;
          height: 48px;
          background: var(--background);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--card-shadow);
        }
        
        .method h4 {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }
        
        .method p {
          margin-bottom: 0;
          font-weight: 600;
          color: var(--text);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--text);
        }
        
        .social-links a:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
        }
        
        .contact-form-wrapper {
          padding: 3rem;
          border-radius: 2rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        
        .form-group input, .form-group textarea {
          padding: 0.875rem 1.25rem;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          color: var(--text);
          font-family: inherit;
          transition: border-color var(--transition-fast);
        }
        
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        
        .submit-btn {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: var(--primary);
          color: white;
          transition: all var(--transition-fast);
        }
        
        .submit-btn:hover:not(:disabled) {
          background: var(--primary-hover);
          transform: translateY(-2px);
        }
        
        .submit-btn.success { background: #22c55e; }
        .submit-btn.error { background: #ef4444; }
        
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .contact-form-wrapper { padding: 2rem; }
        }
      `}} />
    </section>
  );
};

export default Contact;
