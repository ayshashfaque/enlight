import { useState } from 'react'
import useScrollReveal from '../components/useScrollReveal'
import './Gallery.css'

const categories = ['All', 'Communities', 'Projects', 'Volunteers', 'Education', 'Livelihoods']

const photos = [
  { src: '/irulawoman2.jpg',    cat: 'Communities',  caption: 'Irular woman — Tamil Nadu',               size: 'tall' },
  { src: '/irr.jpg',            cat: 'Communities',  caption: 'Solar light distribution — Irular settlement', size: 'wide' },
  { src: '/irulawoman.jpeg',    cat: 'Livelihoods',  caption: 'Cow Livelihood Initiative — Empowered Women', size: 'normal' },
  { src: '/irulavolunteer.jpeg',cat: 'Volunteers',   caption: 'Enlight Mission Field Volunteers & Community', size: 'normal' },
  { src: '/irulaproject.jpeg',  cat: 'Projects',     caption: 'Goat Rearing Livelihood Project — Field Action', size: 'normal' },
  { src: '/irr2.jpeg',          cat: 'Projects',     caption: 'Tribal Home Renewal & Painting Project',   size: 'normal' },
  { src: '/irula1.jpg',         cat: 'Education',    caption: 'Evening Remedial Learning & Literacy',    size: 'wide' },
  { src: '/i555.jpg',           cat: 'Livelihoods',  caption: 'Poultry & Small Animal Husbandry Training', size: 'tall' },
  { src: '/irr3.avif',          cat: 'Healthcare',   caption: 'Annual Health Checkup & Medical Referral Camp', size: 'normal' },
  { src: '/irulawoman2.jpg',    cat: 'Communities',  caption: 'Community Leadership — Villupuram District', size: 'normal' },
  { src: '/irula1.jpg',         cat: 'Volunteers',   caption: 'International Volunteers & Youth Activity', size: 'normal' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const r1 = useScrollReveal(0.05)

  const filtered = activeCategory === 'All' ? photos : photos.filter(p => p.cat === activeCategory)

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="page-hero__label">Gallery</p>
          <h1 className="page-hero__title">People, places<br />and the work.</h1>
          <p className="page-hero__subtitle">
            Documentary photographs from Irular communities, programme activities 
            and volunteers across Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Filter */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="gallery-filters reveal">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="gallery-grid">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item--${photo.size} reveal reveal-delay-${(i % 4) + 1}`}
                onClick={() => setLightbox(photo)}
              >
                <div className="gallery-item__img-wrap">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="gallery-item__img"
                    loading="lazy"
                  />
                  <div className="gallery-item__overlay">
                    <div className="gallery-item__caption-wrap">
                      <span className="gallery-item__cat">{photo.cat}</span>
                      <span className="gallery-item__caption">{photo.caption}</span>
                    </div>
                    <span className="gallery-item__expand">⊕</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="lightbox__img" />
            <div className="lightbox__info">
              <span className="lightbox__cat">{lightbox.cat}</span>
              <p className="lightbox__caption">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Note */}
      <section className="section bg-ivory-deep">
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label" style={{justifyContent:'center'}}>Photography</span>
          <h2 style={{fontFamily:'var(--font-serif)', fontSize:'var(--text-3xl)', fontWeight:600, marginBottom:'var(--space-4)', color:'var(--charcoal)'}}>
            Documentary photography.
          </h2>
          <p style={{color:'var(--warm-grey)', maxWidth:560, margin:'0 auto var(--space-6)', lineHeight:1.8}}>
            These photographs are taken in and around Irular settlements and programme 
            activities in Tamil Nadu. We are committed to authentic, respectful documentation 
            of community life and our work.
          </p>
          <p style={{color:'var(--light-grey)', fontSize:'var(--text-sm)'}}>
            If you would like to use any photographs for editorial or research purposes, 
            please contact us at <a href="mailto:info@enlightmission.org" style={{color:'var(--forest)'}}>info@enlightmission.org</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
