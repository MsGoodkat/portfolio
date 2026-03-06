import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    const navbar = document.querySelector('.top-nav')
    if (navbar) navbar.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      if (navbar) navbar.style.paddingRight = ''
    }
  }, [])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(15,15,26,0.4)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`Projet : ${project.title}`}
          style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 20, boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
            maxWidth: 680, width: '100%',
            maxHeight: '90vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}
        >
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="modal-close-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Contenu scrollable */}
          <div style={{ overflowY: 'auto', padding: 'clamp(28px, 5vw, 48px)', flex: 1, overscrollBehavior: 'contain' }}>
            <div style={{ marginBottom: 28 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: project.color }}>
                {project.category}
              </span>
              <h2 style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontWeight: 700,
                color: '#0F0F1A', marginTop: 10, lineHeight: 1.2,
              }}>
                {project.title}
              </h2>
            </div>

            {[
              { title: 'Contexte', content: project.context },
              { title: 'Objectifs', content: project.objectifs },
            ].map(({ title, content }) => (
              <div key={title} style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 10 }}>
                  {title}
                </h3>
                <p style={{ color: '#334155', fontSize: '0.97rem', lineHeight: 1.75 }}>{content}</p>
              </div>
            ))}

            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 10 }}>
                Ce que j'ai fait
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.actions.map((action, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: project.color, marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ color: '#334155', fontSize: '0.97rem', lineHeight: 1.7 }}>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <h3 style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', margin: 0 }}>
                  Résultats
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                    style={{ color: project.color }}
                  >
                    En savoir plus
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {project.results.map((r) => (
                  <div key={r.label} style={{
                    flex: '1 1 auto',
                    background: `${project.color}08`, border: `1px solid ${project.color}20`,
                    borderRadius: 12, padding: '20px 24px',
                  }}>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: project.color, lineHeight: 1 }}>
                      {r.value}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#64748B', marginTop: 6 }}>{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
