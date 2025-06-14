import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Mail, Linkedin } from 'lucide-react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('ventures'); // 'ventures' or 'academia'

  const togglePage = () => {
    setCurrentPage(currentPage === 'ventures' ? 'academia' : 'ventures');
  };

  return (
    <div className={`app ${currentPage}`}>
      {/* Navigation */}
      <nav className="nav">
        <button 
          onClick={togglePage}
          className="page-toggle"
          aria-label={`Switch to ${currentPage === 'ventures' ? 'Academia' : 'Ventures'} page`}
        >
          {currentPage === 'ventures' ? 'Academia' : 'Ventures'}
          <ArrowRight size={16} />
        </button>
      </nav>

      {/* Page Container */}
      <div className="page-container">
        {/* Ventures Page */}
        <div className={`page ventures-page ${currentPage === 'ventures' ? 'active' : ''}`}>
          <div className="container">
            {/* Hero */}
            <section className="hero">
              <h1 className="name">Fuad Rahman</h1>
              <p className="title">Serial Entrepreneur</p>
              <p className="subtitle">Building enterprise software for 25+ years. Four successful exits.</p>
              <div className="metrics">
                <span className="metric">Silicon Valley, CA</span>
                <span className="metric">4 Successful Exits</span>
                <span className="metric">25+ Years</span>
              </div>
            </section>

            {/* Current Ventures */}
            <section className="section">
              <h2 className="section-title">Current Ventures</h2>
              
              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">Apurba Technologies</h3>
                  <span className="status-badge active">Active</span>
                </div>
                <p className="role">Founder & CEO</p>
                <p className="period">2009 – Present</p>
                <p className="description">Silicon Valley enterprise specializing in big data solutions for natural language processing. Leading product development and strategic partnerships across global markets.</p>
              </div>

              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">WSD</h3>
                  <span className="status-badge current">Current</span>
                </div>
                <p className="role">Head of Filing Services</p>
                <p className="period">2023 – Present</p>
                <p className="description">SaaS-based technology solutions for structured products and OTC derivatives. Overseeing regulatory compliance and filing automation systems.</p>
              </div>
            </section>

            {/* Recent Exits */}
            <section className="section">
              <h2 className="section-title">Recent Exits</h2>
              
              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">EDGAR Filing Service</h3>
                  <span className="status-badge acquired">Acquired</span>
                </div>
                <p className="role">Founder & CEO</p>
                <p className="period">2020 – 2023</p>
                <p className="description">First fully automated end-to-end EDGARization and filing solution. Successfully acquired by WSD in 2023, revolutionizing regulatory compliance technology.</p>
              </div>

              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">Previous Ventures</h3>
                  <span className="status-badge acquired">Multiple Exits</span>
                </div>
                <p className="role">Founder & Technology Leader</p>
                <p className="period">1998 – 2020</p>
                <p className="description">Built and successfully exited multiple enterprise software companies focused on natural language processing and regulatory technology solutions.</p>
              </div>
            </section>

            {/* Contact */}
            <section className="section">
              <h2 className="section-title">Contact</h2>
              <div className="contact-links">
                <a href="mailto:hello@fuadrahman.com" className="contact-link">
                  <Mail size={16} />
                  hello@fuadrahman.com
                </a>
                <a href="https://linkedin.com/in/fuadrahman" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin size={16} />
                  LinkedIn
                  <ExternalLink size={14} />
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Academia Page */}
        <div className={`page academia-page ${currentPage === 'academia' ? 'active' : ''}`}>
          <div className="container">
            {/* Hero */}
            <section className="hero">
              <h1 className="name">Dr. Fuad Rahman</h1>
              <p className="title">AI Pioneer & Professor</p>
              <p className="subtitle">Pioneering natural language processing research since 1996. Professor at University of Arizona.</p>
              <div className="metrics">
                <span className="metric">1,965 Citations</span>
                <span className="metric">h-index 26</span>
                <span className="metric">i10-index 46</span>
              </div>
            </section>

            {/* Academic Positions */}
            <section className="section">
              <h2 className="section-title">Academic Positions</h2>
              
              <div className="position">
                <div className="position-header">
                  <h3 className="institution">University of Arizona</h3>
                  <span className="status-badge current">Current</span>
                </div>
                <p className="role">Professor</p>
                <p className="period">2020 – Present</p>
                <p className="description">Teaching and research in artificial intelligence, natural language processing, and computational linguistics. Leading graduate research programs.</p>
              </div>
            </section>

            {/* Education */}
            <section className="section">
              <h2 className="section-title">Education</h2>
              
              <div className="education">
                <h3 className="degree">Ph.D. in Pattern Recognition</h3>
                <p className="institution">University of England</p>
                <p className="year">1996</p>
                <p className="description">Dissertation focused on optical character recognition and pattern recognition algorithms for low-resource languages, particularly Bengali language processing.</p>
              </div>
            </section>

            {/* Research Impact */}
            <section className="section">
              <h2 className="section-title">Research Impact</h2>
              
              <div className="research-metrics">
                <div className="metric-card">
                  <div className="metric-number">1,965</div>
                  <div className="metric-label">Total Citations</div>
                  <div className="metric-description">Academic impact across computational linguistics and pattern recognition</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-number">26</div>
                  <div className="metric-label">h-index</div>
                  <div className="metric-description">Measure of research productivity and citation impact</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-number">46</div>
                  <div className="metric-label">i10-index</div>
                  <div className="metric-description">Publications with at least 10 citations each</div>
                </div>
              </div>
            </section>

            {/* Recent Publications */}
            <section className="section">
              <h2 className="section-title">Recent Publications</h2>
              
              <div className="publication">
                <h3 className="paper-title">"From rules to models: Progresses in document layout analysis for low resource languages"</h3>
                <p className="paper-details">2024 • Computational Linguistics</p>
                <p className="paper-description">Latest research on advancing document analysis techniques for underrepresented languages, building on decades of NLP expertise.</p>
              </div>

              <div className="publication">
                <h3 className="paper-title">Bengali Language Processing Research</h3>
                <p className="paper-details">1996 – Present • Multiple Publications</p>
                <p className="paper-description">Pioneering work in natural language processing for Bengali, serving 400+ million speakers worldwide. Early contributions to OCR and pattern recognition.</p>
              </div>
            </section>

            {/* Research Areas */}
            <section className="section">
              <h2 className="section-title">Research Areas</h2>
              
              <div className="research-areas">
                <div className="research-area">
                  <h3 className="area-title">Natural Language Processing</h3>
                  <p className="area-description">Computational linguistics, pattern recognition, and machine learning for language understanding.</p>
                </div>
                
                <div className="research-area">
                  <h3 className="area-title">Low-Resource Languages</h3>
                  <p className="area-description">Developing NLP solutions for underrepresented languages, particularly Bengali and South Asian languages.</p>
                </div>
                
                <div className="research-area">
                  <h3 className="area-title">Document Analysis</h3>
                  <p className="area-description">Optical character recognition, document layout analysis, and automated text extraction systems.</p>
                </div>
              </div>
            </section>

            {/* Military & Government Work */}
            <section className="section">
              <h2 className="section-title">Government & Military Research</h2>
              
              <div className="government-work">
                <h3 className="project-title">US Military Contractor</h3>
                <p className="project-details">US Navy, Army, Air Force • 2010 – Present</p>
                <p className="project-description">Advanced research and development projects for military applications. Extensive experience visiting US military facilities and developing specialized NLP solutions for defense applications.</p>
              </div>
            </section>

            {/* External Links */}
            <section className="section">
              <h2 className="section-title">Academic Profiles</h2>
              <div className="contact-links">
                <a href="https://scholar.google.com/citations?user=example" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Google Scholar
                  <ExternalLink size={14} />
                </a>
                <a href="https://arizona.edu/faculty/fuadrahman" target="_blank" rel="noopener noreferrer" className="contact-link">
                  University of Arizona
                  <ExternalLink size={14} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

