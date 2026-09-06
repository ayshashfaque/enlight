import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../components/useScrollReveal'
import './Home.css'

const impactStats = [
  { number: '500+', label: 'Women Trained', sub: 'in vocational and livelihood skills' },
  { number: '169',  label: 'Children Supported', sub: 'through remedial education' },
  { number: '1,000', label: 'Goats Distributed', sub: 'supporting rural livelihoods' },
  { number: '65',   label: 'Families Provided', sub: 'with solar energy systems' },
  { number: '27',   label: 'Women Supported', sub: 'through cow livelihood initiatives' },
  { number: '13',   label: 'Settlements Reached', sub: 'across Irular habitations' },
]

const projects = [
  {
    id: 'cow',
    title: 'Cow Livelihood Project',
    desc: 'Enabling women to earn ₹8,000–₹10,000/month through dairy farming.',
    year: '2022 – Ongoing',
    img: '/irulawoman.jpeg',
    size: 'large',
  },
  {
    id: 'goat',
    title: 'Goat Rearing Project',
    desc: 'Over 1,000 goats distributed to support household income.',
    year: '2015 – 2016',
    img: '/irulaproject.jpeg',
    size: 'small',
  },
  {
    id: 'poultry',
    title: 'Poultry Farming',
    desc: 'Training community members in sustainable poultry management.',
    year: '2019 – Ongoing',
    img: '/irula1.jpg',
    size: 'small',
  },
  {
    id: 'education',
    title: 'Remedial Evening Classes',
    desc: '169 children supported through after-school learning programmes.',
    year: '2018 – Ongoing',
    img: '/irula1.jpg',
    size: 'medium',
  },
  {
    id: 'tailoring',
    title: 'Tailoring Project',
    desc: 'Vocational training creating independent income for women.',
    year: '2020 – Ongoing',
    img: '/irulawoman.jpeg',
    size: 'small',
  },
  {
    id: 'solar',
    title: 'Solar Project',
    desc: '65 families now powered by clean solar energy.',
    year: '2021',
    img: '/irr.jpg',
    size: 'small',
  },
  {
    id: 'painting',
    title: 'Painting Project',
    desc: 'Skills training in painting and decorative arts for young people.',
    year: '2019',
    img: '/irr2.jpeg',
    size: 'medium',
  },
  {
    id: 'medical',
    title: 'Medical Camps',
    desc: 'Community health outreach bringing healthcare to remote settlements.',
    year: '2016 – Ongoing',
    img: '/irr3.avif',
    size: 'small',
  },
]

export default function Home() {
  const heroRef = useScrollReveal(0.05)
  const focusRef = useScrollReveal(0.1)
  const impactRef = useScrollReveal(0.08)
  const workRef = useScrollReveal(0.05)
  const featuredRef = useScrollReveal(0.1)
  const storyRef = useScrollReveal(0.1)
  const volunteerRef = useScrollReveal(0.1)
  const partnerRef = useScrollReveal(0.1)
  const donateRef = useScrollReveal(0.1)

  return (
    <main className="home">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__image-col">
          <div className="hero__image-wrap">
            <img
              src="/irulawoman2.jpg"
              alt="Irular woman — Enlight Mission"
              className="hero__img"
              loading="eager"
            />
            <div className="hero__image-caption">
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="hero__content-col">
          <div className="hero__content">
            <div className="reveal">
              <span className="hero__label">Irular Tribal Development · Tamil Nadu, India</span>
            </div>
            <h1 className="hero__heading reveal reveal-delay-1">
              Working alongside<br />
              <em>Irular communities</em><br />
              towards dignity and<br />
              opportunity.
            </h1>
            <p className="hero__body reveal reveal-delay-2">
              Through education, livelihoods, vocational training, healthcare 
              and community development, Enlight Mission works with Irular 
              tribal communities to create sustainable pathways for change.
            </p>
            <div className="hero__actions reveal reveal-delay-3">
              <Link to="/our-work" className="btn btn-primary">
                Explore Our Work →
              </Link>
              <Link to="/donate" className="btn btn-secondary">
                Support the Mission
              </Link>
            </div>
            <div className="hero__scroll-hint reveal reveal-delay-4">
              <div className="hero__scroll-line" />
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR FOCUS ───────────────────────────────────────── */}
      <section className="focus section" ref={focusRef}>
        <div className="container">
          <div className="focus__grid">
            <div className="focus__left">
              <div className="reveal">
                <span className="section-label">Our Focus · Irular Tribal Development</span>
              </div>
              <h2 className="focus__heading reveal reveal-delay-1">
                Working alongside the Irular community
              </h2>
              <div className="divider reveal reveal-delay-2"></div>
              <p className="focus__body reveal reveal-delay-2">
                The Irular are one of the oldest tribal communities in Tamil Nadu — 
                skilled, resilient people with deep roots in the land. Enlight Mission 
                focuses on their development through practical, community-based programmes 
                that respect existing knowledge and build lasting capability.
              </p>
              <p className="focus__body reveal reveal-delay-3">
                We work not as outsiders delivering aid, but as partners walking 
                alongside communities — supporting livelihoods, education, health, 
                clean energy, and economic independence.
              </p>
              <Link to="/about" className="link-arrow reveal reveal-delay-4">
                About Enlight Mission →
              </Link>
            </div>
            <div className="focus__right reveal-right reveal-delay-1">
              <div className="focus__photo-wrap">
                <img
                  src="/irulawoman.jpeg"
                  alt="Community participation — Enlight Mission"
                  className="focus__photo"
                />
                <div className="focus__photo-label">
                  <span>Community Programme</span>
                  <span>Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ──────────────────────────────────── */}
      <section className="impact section bg-ivory-deep" ref={impactRef}>
        <div className="container">
          <div className="impact__header reveal">
            <span className="section-label">Programme Outcomes</span>
            <h2 className="impact__heading">Impact, measured.</h2>
            <p className="impact__sub">
              Real outcomes from our work across Irular settlements in Tamil Nadu.
            </p>
          </div>
          <div className="impact__grid">
            {impactStats.map((stat, i) => (
              <div key={i} className={`impact__stat reveal reveal-delay-${i + 1}`}>
                <div className="impact__number">{stat.number}</div>
                <div className="impact__label">{stat.label}</div>
                <div className="impact__sublabel">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK IN ACTION ──────────────────────────────── */}
      <section className="work section" ref={workRef}>
        <div className="container">
          <div className="work__header">
            <div className="reveal">
              <span className="section-label">Our Work in Action</span>
            </div>
            <div className="work__header-row">
              <h2 className="work__heading reveal reveal-delay-1">
                Eight programmes.<br />One community.
              </h2>
              <p className="work__sub reveal reveal-delay-2">
                From livelihoods and education to energy, healthcare and skills — 
                our programmes are rooted in practical community needs.
              </p>
            </div>
          </div>
          <div className="work__grid">
            {projects.map((project, i) => (
              <Link
                to="/our-work"
                key={project.id}
                className={`work__card work__card--${project.size} reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="work__card-img-wrap">
                  <img src={project.img} alt={project.title} className="work__card-img" loading="lazy" />
                  <div className="work__card-overlay">
                    <span className="work__card-explore">Explore project →</span>
                  </div>
                </div>
                <div className="work__card-body">
                  <span className="work__card-year">{project.year}</span>
                  <h3 className="work__card-title">{project.title}</h3>
                  <p className="work__card-desc">{project.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="work__cta reveal">
            <Link to="/our-work" className="btn btn-secondary">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECT ────────────────────────────────── */}
      <section className="featured" ref={featuredRef}>
        <div className="featured__image-col">
          <img
            src="/irulawoman.jpeg"
            alt="Cow Livelihood Project — Enlight Mission"
            className="featured__img"
            loading="lazy"
          />
          <div className="featured__archive-tag">Field Documentation · 2022</div>
        </div>
        <div className="featured__content-col">
          <div className="featured__content">
            <div className="reveal">
              <span className="section-label">Featured Project · Livelihoods</span>
            </div>
            <h2 className="featured__heading reveal reveal-delay-1">
              Livelihoods that create independence.
            </h2>
            <div className="divider reveal reveal-delay-2"></div>
            <p className="featured__body reveal reveal-delay-2">
              The Cow Livelihood Project supports women across Irular settlements 
              in establishing dairy-based livelihoods. Each woman is supported 
              with a cow, training, and follow-up — creating a sustainable income 
              source that belongs to them.
            </p>
            <div className="featured__stats reveal reveal-delay-3">
              <div className="featured__stat">
                <span className="featured__stat-num">27</span>
                <span className="featured__stat-label">Women<br />Supported</span>
              </div>
              <div className="featured__stat">
                <span className="featured__stat-num">13</span>
                <span className="featured__stat-label">Irular<br />Settlements</span>
              </div>
              <div className="featured__stat">
                <span className="featured__stat-num">₹8–10K</span>
                <span className="featured__stat-label">Approx. Monthly<br />Income</span>
              </div>
            </div>
            <Link to="/our-work" className="link-arrow reveal reveal-delay-4">
              Read the project story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HUMAN STORY ─────────────────────────────────────── */}
      <section className="story section bg-ivory-deep" ref={storyRef}>
        <div className="container">
          <div className="story__grid">
            <div className="story__photo-col reveal-left">
              <div className="story__photo-wrap">
                <img
                  src="/irulawoman2.jpg"
                  alt="From support to self-reliance"
                  className="story__photo"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="story__content-col">
              <div className="reveal">
                <span className="section-label">Community Stories</span>
              </div>
              <h2 className="story__heading reveal reveal-delay-1">
                Change is more<br />than a number.
              </h2>
              <div className="divider reveal reveal-delay-2"></div>
              <div className="story__tag reveal reveal-delay-2">From Support to Self-Reliance</div>
              <p className="story__body reveal reveal-delay-3">
                Across thirteen Irular settlements, women who began as beneficiaries 
                have become entrepreneurs. Through the cow and tailoring programmes, 
                they now earn independently, make their own decisions, and model 
                possibility for younger women in their communities.
              </p>
              <p className="story__body reveal reveal-delay-3">
                This is not charity. This is capability, built together.
              </p>
              <Link to="/our-work" className="link-arrow reveal reveal-delay-4">
                Read more stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEERS ──────────────────────────────────────── */}
      <section className="volunteers" ref={volunteerRef}>
        <div className="volunteers__image">
          <img
            src="/irula1.jpg"
            alt="Volunteers with Irular community children"
            className="volunteers__img"
            loading="lazy"
          />
          <div className="volunteers__image-overlay" />
        </div>
        <div className="volunteers__content">
          <div className="reveal">
            <span className="section-label volunteers__label">Get Involved</span>
          </div>
          <h2 className="volunteers__heading reveal reveal-delay-1">
            Change happens<br />together.
          </h2>
          <p className="volunteers__body reveal reveal-delay-2">
            From local communities to volunteers and partners around the world, 
            our work is strengthened by people who choose to participate. 
            There are many ways to be part of what we do.
          </p>
          <div className="volunteers__actions reveal reveal-delay-3">
            <Link to="/volunteer" className="btn btn-outline-light">Volunteer With Us</Link>
            <Link to="/donate" className="btn btn-terracotta">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS / CSR ──────────────────────────────────── */}
      <section className="partners section" ref={partnerRef}>
        <div className="container">
          <div className="partners__grid">
            <div className="partners__left">
              <div className="reveal">
                <span className="section-label">Partnerships & CSR</span>
              </div>
              <h2 className="partners__heading reveal reveal-delay-1">
                Partner with us.
              </h2>
              <div className="divider reveal reveal-delay-2"></div>
              <p className="partners__body reveal reveal-delay-2">
                We welcome CSR teams, foundations, international organisations and 
                institutions who wish to support specific projects or collaborate 
                with Enlight Mission on community development initiatives.
              </p>
              <p className="partners__body reveal reveal-delay-3">
                Our work is transparent, documented and impact-oriented. We are 
                committed to providing accurate reporting and outcome measurement 
                for all partnerships.
              </p>
              <Link to="/donate" className="link-arrow reveal reveal-delay-4">
                Discuss a partnership →
              </Link>
            </div>
            <div className="partners__right reveal-right">
              <div className="partners__founder-card">
                <div className="partners__founder-tag">
                  <span className="section-label" style={{margin:0}}>About Our Organisation</span>
                </div>
                <p className="partners__founder-text">
                  Enlight Mission is run by the <strong>Rakhi Foundation for a Brotherly World</strong> — 
                  a registered organisation working with Irular tribal communities in Tamil Nadu, India.
                </p>
                <div className="partners__details">
                  <div className="partners__detail-row">
                    <span className="partners__detail-key">Location</span>
                    <span className="partners__detail-val">Tamil Nadu, India</span>
                  </div>
                  <div className="partners__detail-row">
                    <span className="partners__detail-key">Founded by</span>
                    <span className="partners__detail-val">Rakhi Foundation</span>
                  </div>
                  <div className="partners__detail-row">
                    <span className="partners__detail-key">Focus Area</span>
                    <span className="partners__detail-val">Irular Tribal Communities</span>
                  </div>
                  <div className="partners__detail-row">
                    <span className="partners__detail-key">Programmes</span>
                    <span className="partners__detail-val">8 Active Programmes</span>
                  </div>
                </div>
                <Link to="/resources" className="link-arrow" style={{fontSize:'0.75rem'}}>
                  View legal documents →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ──────────────────────────────────────── */}
      <section className="donate-cta section--lg bg-forest" ref={donateRef}>
        <div className="container">
          <div className="donate-cta__inner">
            <div className="donate-cta__content">
              <div className="reveal">
                <span className="section-label donate-cta__label">Support Our Work</span>
              </div>
              <h2 className="donate-cta__heading reveal reveal-delay-1">
                Help us build opportunities<br />that last.
              </h2>
              <p className="donate-cta__body reveal reveal-delay-2">
                Your support helps us continue community-based work in education, 
                livelihoods, skills, healthcare and basic needs — with Irular 
                communities across Tamil Nadu.
              </p>
              <div className="donate-cta__actions reveal reveal-delay-3">
                <Link to="/donate" className="btn btn-terracotta">Donate Now</Link>
                <Link to="/donate" className="btn btn-outline-light">Support a Project</Link>
              </div>
            </div>
            <div className="donate-cta__aside reveal-right">
              <div className="donate-cta__quote">
                <div className="donate-cta__quote-mark">"</div>
                <p>
                  We believe in building opportunities that belong to communities — 
                  not aid that creates dependency, but investment that creates freedom.
                </p>
                <div className="donate-cta__attribution">— Enlight Mission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
