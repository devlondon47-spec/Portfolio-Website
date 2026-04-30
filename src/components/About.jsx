import { motion } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code size={20} />, label: 'Experience', value: 'Freshman' },
    { icon: <Briefcase size={20} />, label: 'Projects', value: '10+' },
    { icon: <User size={20} />, label: 'Learning', value: 'Continuous' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'BCA' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="lead">
              A forward-thinking developer bridging the gap between Full-Stack Web Development and Artificial Intelligence.
            </p>
            <p>
              I am Ansh, a 2026 graduate passionate about building scalable web applications and exploring the frontiers of Machine Learning. My journey into tech began with a curiosity for how the internet works, which led me to master the MERN stack (MongoDB, Express, React, Node.js).
            </p>
            <p>
              Driven by the potential of AI to transform industries, I've spent significant time learning AIML through various online platforms, specializing in predictive modeling and intelligent automation. I believe that the future of the web lies in intelligent, data-driven experiences.
            </p>
            <p>
              I am currently seeking opportunities where I can apply my MERN expertise while continuing to grow in the AI/ML space. Let's build something intelligent together!
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card glass">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-experience"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>My Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2026</div>
                <h4 className="timeline-title">Bachelor of Technology</h4>
                <p className="timeline-company">Computer Science & Engineering</p>
                <p className="timeline-desc">Focused on data structures, algorithms, and core software engineering principles. Graduating in 2026.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2023 - Present</div>
                <h4 className="timeline-title">MERN Stack Mastery</h4>
                <p className="timeline-company">Self-Led / Online Platforms</p>
                <p className="timeline-desc">Deep-dived into full-stack development, building multiple real-world projects from scratch.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2024 - Present</div>
                <h4 className="timeline-title">AI & Machine Learning</h4>
                <p className="timeline-company">Online Certifications</p>
                <p className="timeline-desc">Mastering Python for AI, neural networks, and computer vision through intensive online courses.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about {
          background-color: var(--surface);
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        
        .lead {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        
        .about-info p {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        
        .stat-card {
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: center;
          transition: transform var(--transition-fast);
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .stat-icon {
          color: var(--primary);
          margin-bottom: 0.75rem;
          display: flex;
          justify-content: center;
        }
        
        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        .about-experience h3 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
        }
        
        .timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid var(--border);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }
        
        .timeline-dot {
          position: absolute;
          left: -2.7rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          border: 4px solid var(--surface);
          box-shadow: 0 0 0 4px var(--border);
        }
        
        .timeline-date {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .timeline-title {
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }
        
        .timeline-company {
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        
        .timeline-desc {
          font-size: 0.9375rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default About;
