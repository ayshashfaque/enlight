import { useState } from 'react'
import useScrollReveal from '../components/useScrollReveal'
import './Donate.css'

const projects = [
  { id: 'cow', title: 'Cow Livelihood Project', desc: 'Support a woman to establish a dairy-based livelihood.' },
  { id: 'education', title: 'Remedial Evening Classes', desc: 'Support children through after-school learning programmes.' },
  { id: 'solar', title: 'Solar Project', desc: 'Help provide a family with clean electricity.' },
  { id: 'medical', title: 'Medical Camps', desc: 'Fund healthcare outreach in remote Irular settlements.' },
  { id: 'tailoring', title: 'Tailoring Project', desc: 'Support vocational skills training for women.' },
  { id: 'general', title: 'General Fund', desc: 'Support wherever it is needed most.' },
]

const amounts = [500, 1000, 2500, 5000]

export default function Donate() {
  const [selectedProject, setSelectedProject] = useState('general')
  const [amount, setAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [currency, setCurrency] = useState('INR')
  const [form, setForm] = useState({ name: '', email: '', pan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const r1 = useScrollReveal(0.1)
  const r2 = useScrollReveal(0.1)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }
  const finalAmount = customAmount || amount

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="page-hero__label">Support Our Work</p>
          <h1 className="page-hero__title">
            Help us build opportunities<br />that last.
          </h1>
          <p className="page-hero__subtitle">
            Your support helps us continue community-based work in education, livelihoods, 
            skills, healthcare and basic needs — with Irular communities across Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Where money goes */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="donate-where">
            <div className="donate-where__left">
              <div className="reveal"><span className="section-label">Where Your Support Goes</span></div>
              <h2 className="reveal reveal-delay-1" style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-4xl)', fontWeight:600, lineHeight:1.2, marginBottom:'var(--space-4)', color:'var(--charcoal)'}}>
                Transparent, targeted, accountable.
              </h2>
              <div className="divider reveal reveal-delay-2"></div>
              <p className="reveal reveal-delay-2" style={{color:'var(--warm-grey)', lineHeight:1.8, marginBottom:'var(--space-5)'}}>
                We believe donors deserve to know exactly where their contribution goes. 
                Every programme is documented, reported and open to enquiry. We do not 
                use donations for purposes not disclosed.
              </p>
              <p className="reveal reveal-delay-3" style={{color:'var(--warm-grey)', lineHeight:1.8}}>
                You can direct your contribution to a specific project, or contribute to our 
                General Fund — which we allocate based on the most pressing community needs.
              </p>
            </div>
            <div className="donate-where__right">
              {['Livelihoods (Cow, Goat, Poultry, Tailoring)', 'Education (Remedial Classes)', 'Energy (Solar Project)', 'Healthcare (Medical Camps)', 'Skills Training (Painting, Vocational)', 'Operational & Admin (capped)'].map((item, i) => (
                <div key={i} className={`donate-allocation-row reveal reveal-delay-${i + 1}`}>
                  <span className="donate-allocation__label">{item}</span>
                  <div className="donate-allocation__bar-wrap">
                    <div
                      className="donate-allocation__bar"
                      style={{ width: ['45%','20%','12%','10%','8%','5%'][i], background: i === 5 ? 'var(--border)' : 'var(--forest)' }}
                    />
                  </div>
                  <span className="donate-allocation__pct">{['45%','20%','12%','10%','8%','5%'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section bg-ivory-deep" ref={r2}>
        <div className="container">
          <div className="donate-form-wrap">
            <div className="donate-form-panel">
              <div className="reveal"><span className="section-label">Donate Now</span></div>
              <h2 className="reveal reveal-delay-1" style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-3xl)', fontWeight:600, marginBottom:'var(--space-8)', color:'var(--charcoal)'}}>
                Make a contribution.
              </h2>

              {submitted ? (
                <div className="donate-success">
                  <div className="donate-success__icon">✓</div>
                  <h3>Thank you for your generosity.</h3>
                  <p>
                    We've received your details. Our team will follow up with payment information 
                    and a formal receipt within 2 working days.
                  </p>
                </div>
              ) : (
                <form className="donate-form" onSubmit={handleSubmit}>
                  {/* Select Project */}
                  <div className="donate-form__section">
                    <label className="donate-form__label">Support a specific project</label>
                    <div className="donate-project-grid">
                      {projects.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          className={`donate-project-btn ${selectedProject === p.id ? 'is-active' : ''}`}
                          onClick={() => setSelectedProject(p.id)}
                        >
                          <span className="donate-project-btn__title">{p.title}</span>
                          <span className="donate-project-btn__desc">{p.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="donate-form__section">
                    <label className="donate-form__label">Select amount</label>
                    <div className="donate-amount-row">
                      <select className="donate-currency" value={currency} onChange={e => setCurrency(e.target.value)}>
                        <option value="INR">₹ INR</option>
                        <option value="USD">$ USD</option>
                        <option value="EUR">€ EUR</option>
                        <option value="GBP">£ GBP</option>
                      </select>
                      <div className="donate-amounts">
                        {amounts.map((a) => (
                          <button
                            key={a}
                            type="button"
                            className={`donate-amount-btn ${amount === a && !customAmount ? 'is-active' : ''}`}
                            onClick={() => { setAmount(a); setCustomAmount('') }}
                          >
                            {currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}{a.toLocaleString()}
                          </button>
                        ))}
                        <input
                          className="donate-amount-custom"
                          type="number"
                          placeholder="Other"
                          value={customAmount}
                          onChange={e => setCustomAmount(e.target.value)}
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal details */}
                  <div className="donate-form__section">
                    <label className="donate-form__label">Your details</label>
                    <div className="donate-inputs">
                      <div className="vol-form__group">
                        <label htmlFor="d-name">Full Name</label>
                        <input id="d-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="vol-form__group">
                        <label htmlFor="d-email">Email Address</label>
                        <input id="d-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                      </div>
                      <div className="vol-form__group">
                        <label htmlFor="d-pan">PAN Number (for Indian tax receipt — optional)</label>
                        <input id="d-pan" name="pan" type="text" placeholder="ABCDE1234F" value={form.pan} onChange={handleChange} />
                      </div>
                      <div className="vol-form__group">
                        <label htmlFor="d-msg">Message (optional)</label>
                        <textarea id="d-msg" name="message" rows="3" placeholder="Any message for us…" value={form.message} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width:'100%', justifyContent:'center', padding:'16px'}}>
                    Proceed with Donation →
                  </button>

                  <p className="donate-form__note">
                    After submitting, our team will share payment details (UPI / bank transfer / international). 
                    A formal receipt and tax exemption details will be provided.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="donate-sidebar">
              <div className="donate-sidebar__card">
                <h4>Legal & Registration</h4>
                <div className="donate-legal-rows">
                  {[
                    { k: 'Organisation', v: 'Rakhi Foundation for a Brotherly World' },
                    { k: 'Programme', v: 'Enlight Mission' },
                    { k: 'Registered in', v: 'Tamil Nadu, India' },
                    { k: 'Registration No.', v: 'To be updated' },
                    { k: 'FCRA Status', v: 'Contact us for details' },
                    { k: 'Tax Exemption', v: 'Contact us for details' },
                  ].map(({ k, v }, i) => (
                    <div key={i} className="donate-legal-row">
                      <span className="donate-legal-key">{k}</span>
                      <span className="donate-legal-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="donate-sidebar__card donate-sidebar__upi">
                <h4>Payment Methods</h4>
                <p>We accept:</p>
                <ul>
                  <li>UPI (for Indian donors)</li>
                  <li>Bank Transfer (NEFT/RTGS)</li>
                  <li>International wire transfer</li>
                  <li>Cheque (for Indian donors)</li>
                </ul>
                <p className="donate-sidebar__upi-note">
                  Payment details will be shared after form submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
