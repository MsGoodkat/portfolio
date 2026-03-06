import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lauramonneveux',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 00-1.95 1.97A29 29 0 001 12a29 29 0 00.46 5.57a2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'À propos',    href: '#about' },
  { label: 'Projets',     href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Parcours',    href: '#parcours' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [hoveredHref,   setHoveredHref]   = useState(null)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [scrolled,      setScrolled]      = useState(false)

  /* ── Scroll spy ── */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-8% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  /* ── Détection scroll pour l'ombre du header ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Ferme l'overlay au scroll sur mobile */
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true, once: true })
    return () => window.removeEventListener('scroll', close)
  }, [menuOpen])

  const isActive = (href) => href === `#${activeSection}`

  return (
    <>
      {/* ──────────────────────────────────
          Header fixe — desktop
          ────────────────────────────────── */}
      <motion.header
        className="top-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          boxShadow: scrolled
            ? '0 2px 24px rgba(0,0,0,0.06)'
            : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0,0,0,0.06)'
            : '1px solid transparent',
        }}
      >
        {/* Liens de navigation — desktop */}
        <nav aria-label="Navigation principale" className="header-nav">
          {navLinks.map((link, i) => {
            const active  = isActive(link.href)
            const hovered = hoveredHref === link.href

            return (
              <motion.a
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                onMouseEnter={() => setHoveredHref(link.href)}
                onMouseLeave={() => setHoveredHref(null)}
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#6C63FF' : hovered ? '#0F0F1A' : '#64748B',
                  padding: '4px 0',
                  transition: 'color 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}

                {/* Underline animé */}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: -2, left: 0,
                    height: 2, borderRadius: 2,
                    background: active
                      ? 'linear-gradient(90deg, #6C63FF, #60A5FA)'
                      : 'linear-gradient(90deg, #6C63FF, #60A5FA)',
                    originX: 0,
                  }}
                  initial={false}
                  animate={{
                    scaleX: active ? 1 : hovered ? 1 : 0,
                    width: '100%',
                    opacity: active ? 1 : hovered ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                />
              </motion.a>
            )
          })}
        </nav>

      </motion.header>


      {/* ──────────────────────────────────
          Hamburger flottant — mobile
          ────────────────────────────────── */}
      <motion.button
        className="hamburger-float"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          position: 'fixed', top: 14, right: 16, zIndex: 120,
          width: 40, height: 40, borderRadius: '50%',
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.09)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 5,
        }}
      >
        {[
          { transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' },
          { opacity: menuOpen ? 0 : 1, width: menuOpen ? 0 : 16 },
          { transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' },
        ].map((s, i) => (
          <span key={i} style={{
            display: 'block', width: 16, height: 1.5,
            background: '#0F0F1A', borderRadius: 2,
            transition: 'all 0.25s ease', ...s,
          }} />
        ))}
      </motion.button>

      {/* ──────────────────────────────────
          Overlay plein écran — mobile
          ────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 115,
              background: 'rgba(246,248,255,0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'flex-start',
              padding: '0 40px',
            }}
          >
            <nav aria-label="Menu mobile" style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
              {navLinks.map((link, i) => {
                const active = isActive(link.href)
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      textDecoration: 'none',
                      color: active ? 'transparent' : '#0F0F1A',
                      background: active
                        ? 'linear-gradient(135deg, #6C63FF, #6C63FF 55%, #60A5FA)'
                        : 'none',
                      WebkitBackgroundClip: active ? 'text' : 'unset',
                      WebkitTextFillColor: active ? 'transparent' : 'unset',
                      backgroundClip: active ? 'text' : 'unset',
                      padding: '8px 0',
                      lineHeight: 1.1,
                    }}
                  >
                    {link.label}
                  </motion.a>
                )
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <a
                href="mailto:lauramonneveux@gmail.com"
                style={{ fontSize: '0.88rem', color: '#64748B', textDecoration: 'none', fontWeight: 500 }}
              >
                lauramonneveux@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/lauramonneveux"
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.88rem', color: '#64748B', textDecoration: 'none', fontWeight: 500 }}
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ── Header fixe ── */
        .top-nav {
          display: none;
        }
        /* ── Hamburger : mobile uniquement ── */
        .hamburger-float {
          display: flex;
        }

        @media (min-width: 1024px) {
          .top-nav {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 60px;
            padding: 0 48px;
            background: rgba(250,250,248,0.96);
            z-index: 110;
            transition: box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .header-nav {
            display: flex;
            align-items: center;
            gap: 40px;
          }
.hamburger-float {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
