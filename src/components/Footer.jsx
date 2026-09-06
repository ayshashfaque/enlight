import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-mark">✦</span>
                <div>
                  <div className="footer__logo-enlight">Enlight Mission</div>
                  <div className="footer__logo-sub">Irular Tribal Community Development</div>
                </div>
              </div>
              <p className="footer__tagline">
                Working alongside Irular communities in Tamil Nadu, India — 
                towards dignity, opportunity, and a more independent future.
              </p>
              <div className="footer__social">
                <a href="https://facebook.com" aria-label="Facebook" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <ul className="footer__nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/our-work">Our Work</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/donate">Donate</Link></li>
              </ul>
            </div>

            {/* Our Work */}
            <div className="footer__col">
              <h4 className="footer__col-title">Our Programmes</h4>
              <ul className="footer__nav">
                <li><Link to="/our-work">Cow Livelihood Project</Link></li>
                <li><Link to="/our-work">Goat Rearing Project</Link></li>
                <li><Link to="/our-work">Poultry Farming</Link></li>
                <li><Link to="/our-work">Remedial Evening Classes</Link></li>
                <li><Link to="/our-work">Tailoring Project</Link></li>
                <li><Link to="/our-work">Solar Project</Link></li>
                <li><Link to="/our-work">Medical Camps</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <address className="footer__address">
                <p>Enlight Mission</p>
                <p>Tamil Nadu, India</p>
                <br />
                <a href="mailto:info@enlightmission.org">info@enlightmission.org</a>
                <br />
                <a href="tel:+919400000000">+91 94000 00000</a>
              </address>
              <div className="footer__donate-cta">
                <Link to="/donate" className="btn btn-terracotta">Donate Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <div className="footer__legal">
              <p>© {new Date().getFullYear()} Enlight Mission. Run by Rakhi Foundation for a Brotherly World.</p>
              <p className="footer__reg">Registration details available on our <Link to="/resources">Resources</Link> page.</p>
            </div>
            <div className="footer__legal-links">
              <Link to="/resources">Privacy Policy</Link>
              <Link to="/resources">Terms of Use</Link>
              <Link to="/resources">Annual Report</Link>
            </div>
          </div>
          <p className="footer__sign-off">
            "Working towards a more inclusive and empowered future."
          </p>
        </div>
      </div>
    </footer>
  )
}
