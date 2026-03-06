import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const differentiators = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Double compétence PO + UX',
    desc: 'Je comprends et défends l\'expérience utilisateur autant que la valeur business.',
    color: '#6C63FF',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Décisions guidées par les données',
    desc: 'Je m\'appuie sur des métriques concrètes (CSAT, adoption, vélocité) plutôt que sur des intuitions.',
    color: '#7B2FBE',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
    title: 'À l\'aise avec tous les profils',
    desc: 'Je travaille aussi bien avec les devs qu\'avec le marketing ou la direction, sans jargon inutile.',
    color: '#6C63FF',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          <span className="section-number" aria-hidden="true">01</span>
          
          <h2 className="section-title">
            En bref, qui je suis
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Bloc texte + photo côte à côte */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
          marginBottom: 56,
          alignItems: 'center',
        }}
          className="about-intro-grid"
        >
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            <p style={{ fontSize: '1.1rem', color: '#1E293B', lineHeight: 1.84, marginBottom: 20, fontWeight: 500 }}>
              Product Owner avec plus de 5 ans d'expérience sur des produits digitaux. Je m'occupe du cycle complet : comprendre les besoins, prioriser, livrer, mesurer.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.82, marginBottom: 20 }}>
              Mon parcours mêle UX design (bootcamp Ironhack, 2019), gestion de projets e-commerce et pilotage de feature teams en Scrum et Kanban.
              J'ai notamment travaillé sur des produits d'IA Générative en production.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.82 }}>
              J'aime les environnements où on peut vraiment construire, itérer et voir l'impact de ce qu'on fait.
            </p>

            <div style={{ display: 'flex', gap: 8, marginTop: 28, flexWrap: 'wrap' }}>
              {['Product Owner', 'Feature Team Lead', 'UX Background', 'GenAI', 'Agile', 'Data-driven', 'Acculturation'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ position: 'relative' }}
          >
            {/* Bloc accent derrière */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: -16, right: -16,
              width: '70%', height: '60%',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(96,165,250,0.07))',
              borderRadius: 8, zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(108,99,255,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              aspectRatio: '4/3',
            }}>
              <img
                src="/images/ironhack-sticky-notes.webp"
                alt="Laura - workshop UX Ironhack"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .about-intro-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>

        {/* Différenciateurs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24 }}>
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card"
              style={{ padding: '28px 32px' }}
            >
              <div style={{
                width: 44, height: 44,
                background: `${item.color}10`,
                border: `1px solid ${item.color}22`,
                borderRadius: 13,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: item.color, marginBottom: 18, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 650, color: '#0F0F1A', marginBottom: 10, lineHeight: 1.4 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.72 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
