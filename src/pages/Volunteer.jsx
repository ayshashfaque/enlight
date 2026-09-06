import { useState } from 'react'
import useScrollReveal from '../components/useScrollReveal'
import './Volunteer.css'

const opportunities = [
  { title: 'Field Programme Volunteer', type: 'Volunteer', duration: '2–12 weeks', location: 'Tamil Nadu, India', desc: 'Join us on the ground, working directly with community programmes — from livelihood initiatives to education and health camps.' },
  { title: 'Education Support Volunteer', type: 'Volunteer', duration: '4 weeks+', location: 'Tamil Nadu, India', desc: 'Support our remedial evening classes — helping teachers, creating materials, and working with children in Irular settlements.' },
  { title: 'Research & Documentation Intern', type: 'Internship', duration: '6–12 weeks', location: 'Remote / Tamil Nadu', desc: 'Document programme outcomes, conduct community interviews, and contribute to our impact reporting and publications.' },
  { title: 'Communications & Social Media', type: 'Internship', duration: 'Flexible', location: 'Remote', desc: 'Help us share our work with international audiences — writing, photography editing, social media and digital communications.' },
  { title: 'Programme Design & MEL', type: 'Internship', duration: '8–16 weeks', location: 'Remote / Tamil Nadu', desc: 'Support Monitoring, Evaluation and Learning across our programmes. Experience in development or social research preferred.' },
  { title: 'Field Coordinator', type: 'Job Opportunity', duration: 'Full-time', location: 'Tamil Nadu, India', desc: 'Experienced field coordinator to manage day-to-day implementation across multiple Irular settlement programmes.' },
]

const typeColors = {
  'Volunteer': 'var(--forest)',
  'Internship': 'var(--terracotta)',
  'Job Opportunity': 'var(--gold)',
}

export default function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const r1 = useScrollReveal(0.1)
  const r2 = useScrollReveal(0.08)
  const r3 = useScrollReveal(0.1)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <main>
      {/* Hero */}
      <div className="volunteer-hero">
        <div className="volunteer-hero__image">
          <img src="/irulavolunteer.jpeg" alt="Volunteers with Irular community" className="volunteer-hero__img" loading="eager" />
          <div className="volunteer-hero__overlay" />
        </div>
        <div className="volunteer-hero__content">
          <div className="container">
            <p className="page-hero__label" style={{color:'var(--gold-lt)'}}>Get Involved</p>
            <h1 style={{fontFamily:'var(--font-serif)', fontSize:'clamp(2.4rem, 4.5vw, 4rem)', fontWeight:600, color:'var(--ivory)', lineHeight:1.15, marginBottom:'var(--space-6)', letterSpacing:'-0.02em'}}>
              Change happens<br />when people choose<br /><em>to participate.</em>
            </h1>
            <p style={{fontSize:'var(--text-lg)', color:'rgba(250,247,242,0.8)', maxWidth:540, lineHeight:1.75, marginBottom:'var(--space-8)'}}>
              Enlight Mission welcomes volunteers, interns, researchers, professionals and 
              organisations who want to be part of meaningful community development work.
            </p>
            <a href="#apply" className="btn btn-terracotta">Apply to Volunteer →</a>
          </div>
        </div>
      </div>

      {/* Why Volunteer */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="volunteer-why">
            <div>
              <div className="reveal"><span className="section-label">Why Volunteer</span></div>
              <h2 className="reveal reveal-delay-1" style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-4xl)', fontWeight:600, lineHeight:1.2, marginBottom:'var(--space-6)', color:'var(--charcoal)'}}>
                Work that is real, grounded<br />and genuinely impactful.
              </h2>
              <div className="divider reveal reveal-delay-2"></div>
              <p className="reveal reveal-delay-2" style={{color:'var(--warm-grey)', lineHeight:1.8, marginBottom:'var(--space-5)'}}>
                Volunteering with Enlight Mission means spending time within Irular communities — 
                not observing, but participating. Our volunteers work alongside local staff and 
                community members on live programmes.
              </p>
              <p className="reveal reveal-delay-3" style={{color:'var(--warm-grey)', lineHeight:1.8}}>
                We ask for commitment, cultural respect, and a willingness to listen before acting. 
                In return, you gain genuine field experience, relationships with communities, and 
                the knowledge that your contribution mattered.
              </p>
            </div>
            <div className="volunteer-why__image reveal-right">
              <img src="/irula1.jpg" alt="Volunteer with children" className="volunteer-why__img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section bg-ivory-deep" ref={r2}>
        <div className="container">
          <div className="reveal"><span className="section-label">Opportunities</span></div>
          <h2 className="reveal reveal-delay-1" style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-4xl)', fontWeight:600, lineHeight:1.2, marginBottom:'var(--space-10)', color:'var(--charcoal)'}}>
            Volunteer, intern & work with us.
          </h2>
          <div className="vol-opps-grid">
            {opportunities.map((opp, i) => (
              <div key={i} className={`vol-opp-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="vol-opp-card__header">
                  <span className="vol-opp-card__type" style={{ color: typeColors[opp.type] || 'var(--forest)' }}>
                    {opp.type}
                  </span>
                  <span className="vol-opp-card__duration">{opp.duration}</span>
                </div>
                <h3 className="vol-opp-card__title">{opp.title}</h3>
                <div className="vol-opp-card__location">📍 {opp.location}</div>
                <p className="vol-opp-card__desc">{opp.desc}</p>
                <a href="#apply" className="link-arrow" style={{fontSize:'0.72rem', marginTop:'var(--space-4)', display:'inline-flex'}}>
                  Apply →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section" id="apply" ref={r3}>
        <div className="container container--narrow">
          <div className="reveal"><span className="section-label">Volunteer Application</span></div>
          <h2 className="reveal reveal-delay-1" style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-4xl)', fontWeight:600, marginBottom:'var(--space-3)', color:'var(--charcoal)'}}>
            Express your interest.
          </h2>
          <p className="reveal reveal-delay-2" style={{color:'var(--warm-grey)', lineHeight:1.8, marginBottom:'var(--space-10)'}}>
            Fill in the form below and our team will get back to you within a few working days. 
            Please tell us a little about yourself and why you'd like to get involved.
          </p>

          {submitted ? (
            <div className="vol-form-success reveal">
              <div className="vol-form-success__icon">✓</div>
              <h3>Thank you for your interest!</h3>
              <p>We've received your application and will be in touch within a few working days.</p>
            </div>
          ) : (
            <form className="vol-form reveal" onSubmit={handleSubmit}>
              <div className="vol-form__row">
                <div className="vol-form__group">
                  <label htmlFor="vol-name">Full Name</label>
                  <input id="vol-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="vol-form__group">
                  <label htmlFor="vol-email">Email Address</label>
                  <input id="vol-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="vol-form__group">
                <label htmlFor="vol-type">Type of Involvement</label>
                <select id="vol-type" name="type" value={form.type} onChange={handleChange} required>
                  <option value="">Select…</option>
                  <option>Field Programme Volunteer</option>
                  <option>Education Support Volunteer</option>
                  <option>Research & Documentation Intern</option>
                  <option>Communications & Social Media</option>
                  <option>Programme Design & MEL</option>
                  <option>Field Coordinator</option>
                  <option>Other / Partnership</option>
                </select>
              </div>
              <div className="vol-form__group">
                <label htmlFor="vol-message">Tell us about yourself</label>
                <textarea id="vol-message" name="message" rows="5" placeholder="Your background, availability, and why you'd like to get involved with Enlight Mission…" value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{marginTop:'var(--space-2)'}}>
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
