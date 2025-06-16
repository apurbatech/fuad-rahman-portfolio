import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Bot, BookType, ExternalLink, Mail, ShieldHalf, Languages, LetterText, GraduationCap, HeartHandshake } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
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
          {currentPage === 'ventures' ? (
            <>
              Academia
              <ArrowRight size={16} className="mr-1" />
            </>
          ) : (
            <>
              <ArrowLeft size={16} className="ml-1" />
              Ventures
            </>
          )}
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
              <p className="subtitle">Building enterprise software & global product teams for 25+ years.</p>
              <p className="subsubtitle">Audiophile, 2x Burner, Trekkie, Philanthropist, Father.</p>


              <div className="metrics">
                <span className="metric" style={{ color: "#c0362c" }}>SF Bay Area</span>
                <span className="metric">Four Exits</span>
                <span className="metric" style={{ color: "#166534" }}>Fintech</span>
                <span className="metric" style={{ color: "#0369a1" }}>Healthtech</span>
              </div>
            </section>

            {/* Current Ventures */}
            <section className="section">
              <h2 className="section-title">Active Ventures</h2>
              
              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">Apurba Technologies</h3>
                  <span className="status-badge current">Current</span>
                </div>
                <p className="role">Founder & CEO</p>
                <p className="period">2009 – Present</p>
                <p className="description">
                  Trusted by Fortune 500s and national governments to architect data-driven transformations, specializing in natural language & computer vision. 
                  Leading product development and strategic partnerships across global markets.
                </p>
              </div>

              <div className="box">
                <h2 className="project-title"><HeartHandshake size={14}/> Angel Investing</h2>

                <p className="project-details">2021 – Present</p>
                <ul className="project-description" style={{color: "#666666"}}>
                  <li>&nbsp; &nbsp; <a href="https://ahiri.ca/" target="_blank" rel="noopener noreferrer" style={{color: "#666666"}}>Ahiri</a> (Marketplaces), 2021</li>
                  <li>&nbsp; &nbsp; <a href="https://wsd.com/" target="_blank" rel="noopener noreferrer" style={{color: "#666666"}}>Dorsal.fyi</a> (Healthcare AI), 2024</li>
                </ul>
              </div>
            </section>

            {/* Recent Exits */}
            <section className="section">
              <h2 className="section-title">Successful Exits</h2>
              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">WSD (formerly Wall St Docs)</h3>
                  <span className="status-badge exited">Exited</span>
                </div>
                <p className="role">Global Head of Filing Services</p>
                <p className="period">2023 – 2025</p>
                <p className="description">
                  Solutions for structured products and OTC derivatives. 
                  Overseeing regulatory compliance and filing automation systems.
                </p>
              </div>
              
              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">EDGAR Filing Service</h3>
                  <span className="status-badge acquired">Acquired</span>
                </div>
                <p className="role">Founder & CEO</p>
                <p className="period">2020 – 2023</p>
                <p className="description">
                  Acquired by <a href="https://wsd.com/" target="_blank" rel="noopener noreferrer" style={{color: "#666666"}}>WSD</a>. 
                  Built the first fully automated, end-to-end tool for SEC-compliant filing and electronic document conversion (EDGARization). 
                  Used by Citigroup, Barclays, and other Tier 1 banks. 
                </p>
              </div>

              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">Pinscriptive</h3>
                  <span className="status-badge acquired">Acquired</span>
                </div>
                <p className="role">CTO</p>
                <p className="period">2017 – 2018</p>
                <p className="description">
                  Acquired by Irish Acquisitions. 
                  ML-driven precision medicine and population health platorm with sophisticated cohort analysis, launched in collaboration with&nbsp; 
                  <a href="https://phs.org/" target="_blank" rel="noopener noreferrer" style={{color: "#666666"}}>Presbyterian Healthcare Services</a> in Albuquerque, NM.
                </p>
              </div>

              <div className="venture">
                <div className="venture-header">
                  <h3 className="company">Compliance Xpressware</h3>
                  <span className="status-badge acquired">Acquired</span>
                </div>
                <p className="role">Founder & CEO</p>
                <p className="period">2011 - 2020</p>
                <p className="description">
                  Acquired by <a href="https://www.newsfilecorp.com/" target="_blank" rel="noopener noreferrer" style={{color: "#666666"}}>Newsfile</a>, before being spun off into EDGAR Filing Service. 
                  First cloud-hosted solution empowering Reporting Issuers to achieve compliance for their structured products.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="section">
              <h2 className="section-title">Contact</h2>
              <div className="contact-links">
                <div className="contact-link">
                  <Mail size={16} />
                  fuad [at] apurbatech.com
                </div>
                
                <a href="https://linkedin.com/in/fuadrahman" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaLinkedin size={16} />
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
              <p className="title">AI Evangelist & Professor</p>
              <p className="subtitle">Finding cool new things to do with neural networks since 1992.</p>
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
                <p className="role">Adjunct Professor</p>
                <p className="period">2020 – Present</p>
                <p className="description">Teaching graduate students about AI entrepreneurship. Researching applied AI for medical devices and population health.</p>
              </div>
            </section>

            {/* Education */}
            <section className="section">
              <h2 className="section-title">Education</h2>
              
              <div className="education">
                <p className="institution">University of Kent</p>
                <h3 className="degree">Ph.D. in Computer Vision & Pattern Recognition</h3>
                <p className="year">1996</p>
                <p className="description">
                  Dealt with building novel systems to classify objects such as calcification on breast mammograms, handwritten/printed characters, words and documents. 
                  Early work with multiple classifiers ('experts') and unified frameworks/techniques for decisioning systems.<br /><br />
                  Supervisor: Prof. Michael Fairhurst | Computer Vision and Image Processing
                </p>
              </div>
            </section>

            {/* Patents & Recent Publications */}
            <section className="section">
              <h2 className="section-title">Selected Publications & Inventions</h2>
              <details className="group bg-neutral-900 rounded-md p-4">
                <summary className="cursor-pointer text-white font-semibold flex justify-between items-center">
                  <span className="group-open:hidden" style={{color: "#c0362c"}}>View or hide patents ↓</span>
                </summary>
                <div className="mt-4 space-y-4">
                  <div className="publication">
                    <h3 className="paper-title">
                      "Virtual Reality Systems and Methods for Improving Clinical Outcomes"
                    </h3>
                    <p className="paper-details">US 10,551,910 • Co-authors: S Hossainy, MJ Slepian</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Systems and Methods for Implementing an Early Warning System for Stroke Patients"
                    </h3>
                    <p className="paper-details">US 62/599,542 • Co-author: S Hossainy</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Treatment Recommendation System And Method"
                    </h3>
                    <p className="paper-details">US 15/592,064 • Co-author: Roni Amiel</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Cirrhosis Forecasting In Human Subjects"
                    </h3>
                    <p className="paper-details">US 15/587,245 • Co-author: Roni Amiel</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Systems and Methods for Creating Contextualized Summaries of Patient Notes from Electronic Medical Record Systems"
                    </h3>
                    <p className="paper-details">US 62/294,701 • Co-author: S Hossainy</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Health information (data) medical collection, processing and feedback continuum systems and methods"
                    </h3>
                    <p className="paper-details">US 62/194,904 • Co-authors: S Hossainy, MJ Slepian</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Patient coordination system and method"
                    </h3>
                    <p className="paper-details">US 62/194,945 • Co-author: MJ Slepian</p>
                  </div>

                  <div className="publication">
                    <h3 className="paper-title">
                      "Systems and methods for analyzing healthcare data"
                    </h3>
                    <p className="paper-details">US 62/194,920 • Co-author: MJ Slepian</p>
                  </div>
                </div>
              </details>

              <br />
              
              <div className="publication">
                <h3 className="paper-title"><a href="https://www.sciencedirect.com/science/article/abs/pii/S1386505624004271" target="_blank" rel="noopener noreferrer" style={{ color: "#fdf4ff" }}>
                  "OptimCLM: Optimizing clinical language models for predicting patient outcomes via knowledge distillation, pruning and quantization"
                </a></h3>
                <p className="paper-details">2025 • Co-authors: MJ Hasan, N Mohammed </p>
                <p className="paper-description">Latest research small language models in healthcare, achieving 22.88 x compression and 28.7 x speedup with minimal AUROC loss.</p>
              </div>

              <div className="publication">
                <h3 className="paper-title"><a href="https://link.springer.com/chapter/10.1007/3-540-45869-7_21" target="_blank" rel="noopener noreferrer" style={{ color: "#fdf4ff" }}>
                Multiple classifier combination for character recognition: revisiting the majority voting system and its variations
                </a></h3>
                <p className="paper-details">2002 • Co-authors: H Alam, MC Fairhurst</p>
                <p className="paper-description">Pioneering work in natural language processing for Bengali, serving 400+ million speakers worldwide. Early contributions to OCR and pattern recognition.</p>
              </div>

              <div className="publication">
                <h3 className="paper-title"><a href="https://hrcak.srce.hr/clanak/221156" target="_blank" rel="noopener noreferrer" style={{ color: "#fdf4ff" }}>
                  A complete Bengali OCR: A novel hybrid approach to handwritten Bengali character recognition
                </a></h3>
                <p className="paper-details">1998 • Co-author: M Kaykobad</p>
                <p className="paper-description">The first OCR for Bengali, serving 400+ million speakers worldwide. With the data/compute limitations of the time, this SOTA model combined structural analysis and template matching.</p>
              </div>
            </section>

            {/* Research Areas */}
            <section className="section">
              <h2 className="section-title">Research Areas</h2>
              
              <div className="research-areas">
                <div className="research-area">
                  <h3 className="area-title"><Bot size={14}/> AI</h3>
                  <p className="area-description">Domain-specific applications of machine learning including modeling disease outbreaks, consensus mechanisms, and radiology.</p>
                </div>
                
                <div className="research-area">
                  <h3 className="area-title"><Languages size={14}/> Low-Resource Languages</h3>
                  <p className="area-description">Seminal research on underrepresented languages, particularly Bengali, spanning document classification, OCR, accessiblity.</p>
                </div>
                
                <div className="research-area">
                  <h3 className="area-title"><BookType size={14}/> Document Analysis</h3>
                  <p className="area-description">Semgentation, text extraction, sentiment analysis, summarization since the early 90s, coinciding with the beginning of my PhD program.</p>
                </div>
              </div>
            </section>

            {/* Military & Government Work */}
            <section className="section">
              <h2 className="section-title"><ShieldHalf size={14}/> US Defense Contracts</h2>
              
              <div className="box">
                <h3 className="project-title">Principal Investigator</h3>
                <p className="project-details">US Navy, Army, Air Force • 2001 – 2009</p>
                <p className="project-description">Honored to have written, won, and delivered results on grants for advanced research for several divisions of the American military. Mainly applied NLP, information retrieval, and touchscreen human-computer interfaces for classified use cases. Developed SOTA domain-specific NLP during the AI winter. Conducted field visits to US military installations for mission-critical deployment.</p>
              </div>
            </section>

            {/* External Links */}
            <section className="section">
              <h2 className="section-title">Academic Profiles</h2>
              <div className="contact-links">
                <a href="https://scholar.google.com/citations?user=26mUJmEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <GraduationCap size={14} />
                  Google Scholar
                  <ExternalLink size={14} />
                </a>
                <a href="https://acabi.uahs.arizona.edu/person/fuad-rahman" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <LetterText size={14} />
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

