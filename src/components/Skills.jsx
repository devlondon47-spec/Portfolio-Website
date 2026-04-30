import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'MERN Stack Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Node.js / Express', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Data Analysis (Pandas/NumPy)', level: 80 },
        { name: 'Predictive Modeling', level: 75 },
        { name: 'Neural Networks', level: 70 },
        { name: 'Scikit-Learn', level: 78 },
        { name: 'Online Learning (Continuous)', level: 100 },
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Docker (Basics)', level: 60 },
        { name: 'Postman', level: 90 },
        { name: 'Figma (Design)', level: 75 },
        { name: 'Vercel / Netlify', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-category glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .skills {
          background-color: var(--background);
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .skill-category {
          padding: 2.5rem;
          border-radius: 1.5rem;
        }
        
        .skill-category h3 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
          color: var(--primary);
        }
        
        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-weight: 600;
          font-size: 0.9375rem;
        }
        
        .skill-bar-bg {
          width: 100%;
          height: 8px;
          background: var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-bar-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 4px;
        }
        
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skill-category { padding: 1.5rem; }
        }
      `}} />
    </section>
  );
};

export default Skills;
