import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../components/useScrollReveal'
import { projectsData } from '../data/projects'
import './OurWork.css'

const tagColors = {
  'Livelihoods': 'var(--forest)',
  'Education': 'var(--terracotta)',
  'Vocational Skills': 'var(--gold)',
  'Energy Access': 'var(--forest-light)',
  'Community Development': 'var(--terracotta)',
  'Healthcare': 'var(--charcoal)',
}

export default function OurWork() {
  const [active, setActive] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const r1 = useScrollReveal(0.05)
  const r2 = useScrollReveal(0.05)

  const categories = ['All', 'Livelihoods', 'Education', 'Vocational Skills', 'Energy Access', 'Healthcare', 'Community Development']

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.tag === selectedCategory)

  const selected = active ? projectsData.find(p => p.id === active) : null

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="page-hero__label">Our Work & Field Archives</p>
          <h1 className="page-hero__title">8 Grassroots Projects.<br />Direct Community Impact.</h1>
          <p className="page-hero__subtitle">
            Explore our 8 core community development initiatives across Villupuram, Tindivanam, and Gingee Taluks. 
            From sustainable dairy livelihoods to solar emergency relief and child literacy.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="work-archive-header reveal">
            <div>
              <span className="section-label">Programme Directory</span>
              <h2 className="work-archive-heading">Documented Field Projects</h2>
            </div>
            {/* Category Filter */}
            <div className="work-category-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`work-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="work-archive-grid">
            {filteredProjects.map((p, i) => (
              <div
                key={p.id}
                className={`work-archive-card reveal reveal-delay-${(i % 4) + 1} ${active === p.id ? 'is-active' : ''}`}
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                <div className="work-archive-card__img-wrap">
                  <span className="work-archive-card__tag" style={{ '--tag-color': tagColors[p.tag] || 'var(--forest)' }}>
                    {p.tag}
                  </span>
                  <img src={p.img} alt={p.name} className="work-archive-card__img" loading="lazy" />
                </div>

                <div className="work-archive-card__body">
                  <h3 className="work-archive-card__title">{p.name}</h3>

                  <div className="work-card-field-badge">
                    <span className="field-badge__label">DATE:</span> {p.date}
                  </div>
                  
                  <div className="work-card-field-badge">
                    <span className="field-badge__label">DURATION:</span> {p.duration}
                  </div>

                  <div className="work-card-field-badge">
                    <span className="field-badge__label">LOCATION:</span> {p.shortLocation}
                  </div>

                  <p className="work-archive-card__about">{p.about}</p>

                  <div className="work-archive-card__stats">
                    {p.stats.map((s, j) => (
                      <div key={j} className="work-archive-card__stat">
                        <span className="work-archive-card__stat-n">{s.n}</span>
                        <span className="work-archive-card__stat-l">{s.l}</span>
                      </div>
                    ))}
                  </div>

                  <button className="work-archive-card__cta">
                    {active === p.id ? 'Hide Full Project Case Study ↑' : 'View Full Project Case Study (8 Specs) →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Drawer / Panel */}
      {selected && (
        <section className="project-detail section bg-ivory-deep" ref={r2} id="project-case-study">
          <div className="container">
            <div className="project-detail__header">
              <span className="section-label">Full Project Documentation</span>
              <h2 className="project-detail__title">{selected.name}</h2>
              <button className="project-detail__close-btn" onClick={() => setActive(null)}>✕ Close Project</button>
            </div>

            <div className="project-detail__inner">
              <div className="project-detail__image-col">
                <img src={selected.img} alt={selected.name} className="project-detail__img" />
                
                <div className="project-meta-box">
                  <h4 className="meta-box__title">Project Overview Specs</h4>
                  
                  <div className="meta-box__item">
                    <span className="meta-box__key">Name of Project</span>
                    <span className="meta-box__val">{selected.name}</span>
                  </div>

                  <div className="meta-box__item">
                    <span className="meta-box__key">Date</span>
                    <span className="meta-box__val">{selected.date}</span>
                  </div>

                  <div className="meta-box__item">
                    <span className="meta-box__key">Duration</span>
                    <span className="meta-box__val">{selected.duration}</span>
                  </div>

                  <div className="meta-box__item">
                    <span className="meta-box__key">Location</span>
                    <span className="meta-box__val">{selected.location}</span>
                  </div>
                </div>
              </div>

              <div className="project-detail__content">
                <div className="project-detail__stats-row">
                  {selected.stats.map((s, j) => (
                    <div key={j} className="project-detail__stat-card">
                      <span className="project-detail__stat-n">{s.n}</span>
                      <span className="project-detail__stat-l">{s.l}</span>
                    </div>
                  ))}
                </div>

                <div className="project-detail__sections">
                  <div className="project-detail__section">
                    <h4 className="project-detail__section-title">
                      <span className="section-num">01</span> About the Project
                    </h4>
                    <p className="project-detail__text">{selected.about}</p>
                  </div>

                  <div className="project-detail__section">
                    <h4 className="project-detail__section-title">
                      <span className="section-num">02</span> Measurable Impact
                    </h4>
                    <p className="project-detail__text impact-highlight">{selected.impact}</p>
                  </div>

                  <div className="project-detail__section">
                    <h4 className="project-detail__section-title">
                      <span className="section-num">03</span> Challenges Faced
                    </h4>
                    <p className="project-detail__text">{selected.challenges}</p>
                  </div>

                  <div className="project-detail__section project-detail__feedback">
                    <h4 className="project-detail__section-title">
                      <span className="section-num">04</span> Community Feedback & Voice
                    </h4>
                    <blockquote className="project-detail__quote">{selected.feedback}</blockquote>
                  </div>
                </div>

                <div className="project-detail__ctas">
                  <Link to="/donate" className="btn btn-primary">Support Projects Like This</Link>
                  <button className="btn btn-ghost" onClick={() => setActive(null)}>Close Case Study ↑</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-forest">
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label" style={{justifyContent:'center', color: 'var(--gold-lt)'}}>
            <span style={{background:'var(--gold-lt)'}}></span>Partner With Us
          </span>
          <h2 style={{color:'var(--ivory)', fontFamily:'var(--font-serif)', fontSize:'var(--text-4xl)', marginBottom:'var(--space-5)', lineHeight:1.2}}>
            Support Grassroots Action & Livelihoods
          </h2>
          <p style={{color:'rgba(250,247,242,0.75)', maxWidth:580, margin:'0 auto var(--space-8)'}}>
            Every project is implemented with 100% community consultation and verified impact reporting. 
            Join CSR partners, international foundations, and individual donors.
          </p>
          <div style={{display:'flex', gap:'var(--space-3)', justifyContent:'center', flexWrap:'wrap'}}>
            <Link to="/donate" className="btn btn-terracotta">Support A Project</Link>
            <Link to="/volunteer" className="btn btn-outline-light">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
