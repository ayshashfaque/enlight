import useScrollReveal from '../components/useScrollReveal'
import './Resources.css'

const categories = [
  {
    title: 'Annual Reports',
    icon: '📋',
    docs: [
      { name: 'Annual Report 2022–2023', desc: 'Organisation-wide programme review, financial summary and impact data.', available: false },
      { name: 'Annual Report 2021–2022', desc: 'Year-end overview covering all active programmes and outcomes.', available: false },
    ],
  },
  {
    title: 'Project Reports',
    icon: '📂',
    docs: [
      { name: 'Cow Livelihood Project Report', desc: 'Detailed documentation of the 27-woman dairy livelihood programme.', available: false },
      { name: 'Goat Rearing Project — Scheme 2015–2016', desc: 'Complete programme documentation including distribution data.', available: false },
      { name: 'Solar Project Report — 2021', desc: 'Documentation of the 65-family clean energy initiative.', available: false },
      { name: 'Remedial Evening Classes Report', desc: 'Educational outcomes for 169 children across settlements.', available: false },
    ],
  },
  {
    title: 'Publications',
    icon: '📰',
    docs: [
      { name: 'Irular Community Overview', desc: 'Background reading on the Irular tribal community in Tamil Nadu.', available: false },
      { name: 'Livelihood Programme Design Notes', desc: 'Approach and methodology for community-based livelihood programmes.', available: false },
    ],
  },
  {
    title: 'Programme Information',
    icon: '🗂️',
    docs: [
      { name: 'Programme Summary Sheet', desc: 'One-page overview of all eight active Enlight Mission programmes.', available: false },
      { name: 'Volunteer Information Pack', desc: 'Information for prospective volunteers, interns and partners.', available: false },
    ],
  },
  {
    title: 'Legal & Registration Documents',
    icon: '⚖️',
    docs: [
      { name: 'Organisation Registration Certificate', desc: 'Legal registration details for Rakhi Foundation for a Brotherly World.', available: false },
      { name: 'FCRA / Donation Compliance', desc: 'Foreign Contribution Regulation Act and donation information.', available: false },
      { name: 'Tax Exemption Certificate', desc: 'Details of tax-exempt status for donors.', available: false },
    ],
  },
]

export default function Resources() {
  const r1 = useScrollReveal(0.08)

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero__label">Transparency & Resources</p>
          <h1 className="page-hero__title">Transparency matters.</h1>
          <p className="page-hero__subtitle">
            Explore our reports, publications, programme information and legal documents. 
            We believe donors, partners, and communities deserve full transparency.
          </p>
        </div>
      </div>

      <section className="section" ref={r1}>
        <div className="container">
          <div className="resources-notice reveal">
            <div className="resources-notice__icon">ℹ</div>
            <div>
              <strong>Document availability</strong>
              <p>
                We are currently compiling our full document library. Please contact us at 
                <a href="mailto:info@enlightmission.org"> info@enlightmission.org</a> to 
                request specific documents in the meantime.
              </p>
            </div>
          </div>

          {categories.map((cat, ci) => (
            <div key={ci} className={`resources-category reveal reveal-delay-${ci + 1}`}>
              <div className="resources-category__header">
                <span className="resources-category__icon">{cat.icon}</span>
                <h2 className="resources-category__title">{cat.title}</h2>
              </div>
              <div className="resources-docs">
                {cat.docs.map((doc, di) => (
                  <div key={di} className="resources-doc-row">
                    <div className="resources-doc__type">{cat.title}</div>
                    <div className="resources-doc__info">
                      <div className="resources-doc__name">{doc.name}</div>
                      <div className="resources-doc__desc">{doc.desc}</div>
                    </div>
                    <div className="resources-doc__action">
                      {doc.available ? (
                        <a href={doc.href} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                          View Document →
                        </a>
                      ) : (
                        <span className="resources-doc__coming">Contact us →</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact for docs */}
      <section className="section bg-ivory-deep">
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label" style={{justifyContent:'center'}}>Have a question?</span>
          <h2 style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-4xl)', marginBottom:'var(--space-4)', color:'var(--charcoal)'}}>
            Request a document or report.
          </h2>
          <p style={{color:'var(--warm-grey)', maxWidth:500, margin:'0 auto var(--space-8)', lineHeight:1.8}}>
            All Enlight Mission documents can be requested directly. We respond to enquiries 
            within a few working days.
          </p>
          <a href="mailto:info@enlightmission.org" className="btn btn-primary">
            Email Us →
          </a>
        </div>
      </section>
    </main>
  )
}
