import { Link } from 'react-router-dom'
import useScrollReveal from '../components/useScrollReveal'
import './About.css'

const values = [
  { icon: '◆', title: 'Dignity First', desc: 'We believe every person and community holds inherent worth. Our programmes centre human dignity above all.' },
  { icon: '◆', title: 'Community Partnership', desc: 'We work alongside — not in front of — communities. Local knowledge and agency guide every initiative.' },
  { icon: '◆', title: 'Practical Impact', desc: 'We focus on measurable, tangible change: income, education, access, and health — not abstract goals.' },
  { icon: '◆', title: 'Transparency', desc: 'Our work is documented, reported, and open to scrutiny. We believe accountability builds trust.' },
  { icon: '◆', title: 'Long-Term Commitment', desc: 'We build relationships over years, not projects. Lasting change requires sustained presence.' },
  { icon: '◆', title: 'Cultural Respect', desc: 'We honour Irular identity, traditions, and knowledge. Development does not mean erasure of culture.' },
]

export default function About() {
  const r1 = useScrollReveal(0.1)
  const r2 = useScrollReveal(0.1)
  const r3 = useScrollReveal(0.1)
  const r4 = useScrollReveal(0.1)
  const r5 = useScrollReveal(0.1)

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero about-hero">
        <div className="container">
          <div className="about-hero__inner">
            <div>
              <p className="page-hero__label">About Enlight Mission</p>
              <h1 className="page-hero__title">
                Who we are — and why<br />
                <em>this work matters.</em>
              </h1>
              <p className="page-hero__subtitle">
                Enlight Mission works alongside Irular tribal communities in Tamil Nadu, 
                India — building programmes rooted in dignity, participation and lasting change.
              </p>
            </div>
            <div className="about-hero__image-col">
              <img src="/irr.jpg" alt="Enlight Mission community development" className="about-hero__img" />
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="section" ref={r1}>
        <div className="container container--narrow">
          <div className="reveal"><span className="section-label">Who We Are</span></div>
          <h2 className="about-section-h reveal reveal-delay-1">An organisation built on relationship, not rescue.</h2>
          <div className="divider reveal reveal-delay-2"></div>
          <p className="about-body reveal reveal-delay-2">
            Enlight Mission is a development organisation focused entirely on the Irular tribal 
            communities of Tamil Nadu, India. We are run by the <strong>Rakhi Foundation for a 
            Brotherly World</strong> — a registered organisation guided by the belief that 
            sustainable change happens through solidarity, not charity.
          </p>
          <p className="about-body reveal reveal-delay-3">
            We do not parachute in with solutions. We live alongside, listen carefully, and build 
            programmes that respond to what communities actually need. Our volunteers, field staff, 
            and partners are drawn into long-term relationships with the communities we serve.
          </p>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="about-photo-break">
        <img src="/irula1.jpg" alt="Community and volunteers" className="about-photo-break__img" />
        <div className="about-photo-break__overlay">
          <div className="container">
            <blockquote className="about-pullquote">
              "We believe in building opportunities that belong to communities — not aid that creates dependency, but investment that creates freedom."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section bg-ivory-deep" ref={r2}>
        <div className="container">
          <div className="about-story">
            <div className="about-story__left">
              <div className="reveal"><span className="section-label">Our Story</span></div>
              <h2 className="about-section-h reveal reveal-delay-1">From one settlement to many.</h2>
              <div className="divider reveal reveal-delay-2"></div>
              <p className="about-body reveal reveal-delay-2">
                Enlight Mission's work began with a simple commitment: to understand the lives 
                of Irular families and respond to their most pressing needs. What started as 
                a small goat-rearing project in 2015–2016 has grown into a multi-programme 
                organisation reaching thirteen settlements.
              </p>
              <p className="about-body reveal reveal-delay-3">
                From distributing 1,000 goats to supporting 27 women through dairy livelihoods, 
                from evening classes for 169 children to solar systems for 65 families — each 
                programme has grown from listening to what communities identified as their own 
                priorities.
              </p>
              <p className="about-body reveal reveal-delay-4">
                Our story is still being written. Each year, we deepen our presence, expand 
                our understanding, and take on new challenges alongside Irular communities.
              </p>
            </div>
            <div className="about-story__right reveal-right">
              <div className="about-timeline">
                {[
                  { year: '2015', event: 'Goat Rearing Project begins — 1,000 goats distributed across settlements.' },
                  { year: '2016', event: 'Medical camps launched. First community health outreach.' },
                  { year: '2018', event: 'Remedial Evening Classes established for 169 children.' },
                  { year: '2019', event: 'Poultry farming and painting skills training programmes begin.' },
                  { year: '2020', event: 'Tailoring vocational training launched for women.' },
                  { year: '2021', event: 'Solar Project — 65 families receive clean energy systems.' },
                  { year: '2022', event: 'Cow Livelihood Project — 27 women across 13 settlements supported.' },
                  { year: 'Now',  event: 'Continuing and expanding all eight active programmes.' },
                ].map((item) => (
                  <div key={item.year} className="about-timeline__item">
                    <div className="about-timeline__year">{item.year}</div>
                    <div className="about-timeline__event">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" ref={r3}>
        <div className="container">
          <div className="about-vision-grid">
            <div className="reveal reveal-delay-1">
              <span className="section-label">Our Vision</span>
              <h3 className="about-vm-heading">A future where Irular communities participate fully in the life and opportunities of Tamil Nadu.</h3>
              <p className="about-body">We envision Irular families living with economic security, access to education and healthcare, political voice, and cultural pride — as equal participants, not marginalised subjects.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="section-label">Our Mission</span>
              <h3 className="about-vm-heading">To support Irular communities through practical, dignified, community-led development programmes.</h3>
              <p className="about-body">We translate this vision into action through eight programmes in livelihoods, education, energy, health and skills — co-designed with communities, implemented with care, and measured with honesty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-ivory-deep" ref={r4}>
        <div className="container">
          <div className="reveal"><span className="section-label">Our Values</span></div>
          <h2 className="about-section-h reveal reveal-delay-1">What guides our work.</h2>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className={`about-value-card reveal reveal-delay-${(i % 3) + 1}`}>
                <span className="about-value-icon" style={{color: 'var(--forest)'}}>{v.icon}</span>
                <h4 className="about-value-title">{v.title}</h4>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Partners */}
      <section className="section" ref={r5}>
        <div className="container">
          <div className="reveal"><span className="section-label">Our Partners & Founders</span></div>
          <h2 className="about-section-h reveal reveal-delay-1">The people and organisations behind the work.</h2>
          <div className="divider reveal reveal-delay-2"></div>
          <div className="about-partners-grid">
            <div className="about-partner-card reveal reveal-delay-1">
              <div className="about-partner-logo">✦</div>
              <h4>Rakhi Foundation for a Brotherly World</h4>
              <p>The founding organisation behind Enlight Mission. Committed to solidarity, equality and community empowerment.</p>
            </div>
            <div className="about-partner-card reveal reveal-delay-2">
              <div className="about-partner-logo">◉</div>
              <h4>International Volunteers & Partners</h4>
              <p>Enlight Mission is strengthened by volunteers and partner organisations from across India and internationally.</p>
            </div>
            <div className="about-partner-card reveal reveal-delay-3">
              <div className="about-partner-logo">◈</div>
              <h4>CSR & Foundation Partners</h4>
              <p>We welcome partnerships with CSR programmes and foundations. Contact us to explore collaboration.</p>
              <Link to="/donate" className="link-arrow" style={{fontSize:'0.75rem', marginTop: '1rem', display: 'inline-flex'}}>Discuss a partnership →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
