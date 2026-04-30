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
        
        <motion.div 
          className="skills-grid"
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
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              className="skill-category glass glass-glow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
        
        .skills-list {
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
        
        .skill-bar {
          width: 100%;
          height: 8px;
          background: var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
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
