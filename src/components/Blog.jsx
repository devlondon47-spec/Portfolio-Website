import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2026',
      excerpt: 'Exploring how AI and edge computing are reshaping the way we build and deploy applications.',
      date: 'May 12, 2026',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Mastering Framer Motion for Smooth UI',
      excerpt: 'A deep dive into creating natural-feeling animations that enhance user experience without distraction.',
      date: 'April 28, 2026',
      readTime: '8 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Why I Switched to Headless CMS',
      excerpt: 'The benefits of decoupling your content from your presentation layer and how it improved our workflow.',
      date: 'April 15, 2026',
      readTime: '6 min read',
      category: 'Workflow',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Latest Insights</h2>
        
        <div className="blog-grid">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              className="blog-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="blog-footer">
          <a href="https://github.com/devlondon47-spec?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View All Posts
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog {
          background-color: var(--background);
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .blog-card {
          border-radius: 1.25rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .blog-image {
          position: relative;
          height: 200px;
        }
        
        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .blog-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
        }
        
        .blog-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .blog-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        
        .blog-meta span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        
        .blog-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        
        .blog-content p {
          color: var(--text-muted);
          font-size: 0.9375rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .read-more {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9375rem;
        }
        
        .read-more:hover gap: 0.75rem;
        
        .blog-footer {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
        }
      `}} />
    </section>
  );
};

export default Blog;
