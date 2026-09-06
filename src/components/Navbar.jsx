import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHomePage = location.pathname === '/'

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-badge">✦</span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-enlight">Enlight</span>
              <span className="navbar__logo-mission">Mission</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            <li><NavLink to="/" className={({isActive}) => isActive ? 'navbar__link active' : 'navbar__link'} end>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'navbar__link active' : 'navbar__link'}>About Us</NavLink></li>
            <li><NavLink to="/our-work" className={({isActive}) => isActive ? 'navbar__link active' : 'navbar__link'}>Our Work</NavLink></li>
            <li><NavLink to="/resources" className={({isActive}) => isActive ? 'navbar__link active' : 'navbar__link'}>Resources</NavLink></li>
            <li><NavLink to="/volunteer" className={({isActive}) => isActive ? 'navbar__link active' : 'navbar__link'}>Volunteer</NavLink></li>
          </ul>

          {/* Desktop CTAs */}
          <div className="navbar__ctas">
            <Link to="/donate" className="btn btn-ghost navbar__partner">Partner With Us</Link>
            <Link to="/donate" className="btn btn-primary navbar__donate">Donate</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__header">
          <div className="navbar__logo">
            <span className="navbar__logo-badge">✦</span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-enlight" style={{fontSize:'1.35rem'}}>Enlight</span>
              <span className="navbar__logo-mission" style={{fontSize:'0.65rem'}}>Mission</span>
            </span>
          </div>
          <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <ul className="mobile-menu__links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/our-work">Our Work</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/volunteer">Volunteer</NavLink></li>
        </ul>
        
        <div className="mobile-menu__info">
          <p style={{fontSize:'0.82rem', color:'var(--warm-grey)', lineHeight:'1.5', margin:0}}>
            Empowering Irular Tribal Communities across Tamil Nadu, India.
          </p>
        </div>

        <div className="mobile-menu__ctas">
          <Link to="/donate" className="btn btn-secondary">Partner With Us</Link>
          <Link to="/donate" className="btn btn-primary">Donate Now</Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
