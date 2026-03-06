import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const chips = [
  { label: 'Discovery',      color: '#6C63FF', pos: { top: -20, left: '50%', transform: 'translateX(-52%)' }, delay: 0.55 },
  { label: 'Agile',          color: '#0891B2', pos: { top: 68,  right: -48 },                                 delay: 0.7  },
  { label: 'GenAI',          color: '#7B2FBE', pos: { bottom: 108, right: -36 },                              delay: 0.85 },
  { label: 'Metrics',        color: '#6C63FF', pos: { top: 200, left: -48 },                                  delay: 1.0  },
]

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      style={{ position: 'relative', width: 380, height: 460, flexShrink: 0 }}
    >
      {/* Stroke décalé derrière la carte */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 18,
        border: '2px solid rgba(108,99,255,0.3)',
        background: 'linear-gradient(135deg, rgba(108,99,255,0.30) 0%, rgba(192,168,255,0.15) 60%, rgba(255,255,255,0) 100%)',
        transform: 'translate(12px, 12px)',
        zIndex: 0,
      }} />

      {/* Carte portrait */}
      <div style={{
        position: 'absolute', inset: 0,
        background: '#FFFFFF',
        borderRadius: 14,
        border: '1px solid #E5E7EB',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Photo */}
        <div style={{ flex: 1, overflow: 'hidden', minHeight: 340 }}>
          <img
            src="/images/ironhack-workshop.webp"
            alt="Workshop Ironhack — UX en action"
            className="hero-photo"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
          />
        </div>

        {/* Pied de carte */}
        <div className="hero-card-footer" style={{
          padding: '18px 22px',
          borderTop: '1px solid #F3F4F6',
          background: '#FFFFFF',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#0F0F1A', letterSpacing: '-0.02em' }}>
              Laura Monneveux
            </div>
            <div style={{ fontSize: '0.7rem', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3, fontWeight: 500 }}>
              Stratégie, Discovery &amp; Impact produit
            </div>
          </div>
          <a
            href="/CV_Laura-Monneveux.pdf"
            download="CV_Laura-Monneveux.pdf"
            aria-label="Télécharger le CV"
            className="hero-cv-btn"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            CV
          </a>
        </div>
      </div>

      {/* Chips flottantes */}
      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          className="hero-chip"
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: chip.delay, ease: 'easeOut' },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: chip.delay + 0.5 },
          }}
          style={{
            position: 'absolute', ...chip.pos,
            zIndex: 2,
            background: '#FFFFFF',
            border: `1.5px solid ${chip.color}40`,
            borderRadius: 50,
            padding: '6px 13px',
            boxShadow: `0 4px 18px ${chip.color}30, 0 1px 4px rgba(0,0,0,0.06)`,
            fontSize: '0.74rem', fontWeight: 600,
            color: chip.color,
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: chip.color, flexShrink: 0,
          }} />
          {chip.label}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="section hero-section"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100, paddingBottom: 56 }}
    >
      <div className="container">
        <div className="hero-layout">

          {/* ── Colonne gauche : texte ── */}
          <div className="hero-text">
            {/* Nom */}
            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(3.6rem, 8vw, 6.2rem)',
                fontWeight: 900, lineHeight: 1.04,
                letterSpacing: '-0.01em', color: '#0F0F1A',
                marginBottom: 20,
              }}
            >
              Laura<br />
              <span className="gradient-text">Monneveux</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              {...fadeUp(0.32)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
                fontWeight: 600, color: '#94A3B8',
                letterSpacing: '0.12em', marginBottom: 20,
                textTransform: 'uppercase',
              }}
            >
              <span style={{
                display: 'inline-block', width: 28, height: 2, flexShrink: 0,
                background: 'linear-gradient(90deg, #6C63FF, #60A5FA)',
                borderRadius: 2,
              }} />
              Stratégie, Discovery &amp; Impact produit
            </motion.p>

            {/* Phrase */}
            <motion.p
              {...fadeUp(0.44)}
              style={{
                fontSize: 'clamp(1.02rem, 1.8vw, 1.18rem)',
                lineHeight: 1.82, color: '#475569',
                maxWidth: 520, marginBottom: 40,
              }}
            >
              Je travaille sur des produits digitaux de bout en bout, de la discovery au déploiement, en gardant l'utilisateur et les données au centre.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.54)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#projets" className="btn-primary">
                Voir mes projets
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Me contacter
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.68)}
              className="hero-stats"
              style={{ display: 'flex', gap: 0, marginTop: 56 }}
            >
              {[
                { value: '5+',   label: "ans d'expérience produit" },
                { value: '2',    label: 'feature teams pilotées' },
                { value: '−66%', label: 'de friction opérationnelle' },
              ].map((stat, i) => (
                <div key={stat.label} className="hero-stat-item" style={{ display: 'flex', alignItems: 'stretch' }}>
                  {i > 0 && (
                    <div style={{ width: 1, background: 'rgba(0,0,0,0.08)', margin: '0 24px' }} />
                  )}
                  <div>
                    <div style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '2.4rem', fontWeight: 800, lineHeight: 1,
                      marginBottom: 5,
                      background: 'linear-gradient(135deg, #6C63FF, #6C63FF 55%, #60A5FA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: 500 }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
            <style>{`
              @media (max-width: 640px) {
                .hero-stats {
                  display: grid !important;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 0;
                }
                .hero-stat-item {
                  align-items: flex-start;
                }
              }
            `}</style>
          </div>

          {/* ── Colonne droite : visuel éditorial ── */}
          <HeroVisual />
        </div>
      </div>

      {/* Flèche scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Défiler vers la section suivante"
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer', padding: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.7)" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.button>

    </section>
  )
}
