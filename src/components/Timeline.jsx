import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timelineItems } from '../data/timeline'

function ExperienceCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.75)',
        borderTop: `3px solid ${item.color}`,
        borderRadius: 14,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        boxShadow: '0 8px 32px rgba(108,99,255,0.08), 0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Période + badges */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.72rem', fontWeight: 600,
          color: '#94A3B8', letterSpacing: '0.03em',
        }}>
          {item.period}
        </span>
        {item.current && (
          <span style={{
            fontSize: '0.62rem', fontWeight: 700, padding: '2px 8px',
            background: `${item.color}15`, border: `1px solid ${item.color}30`,
            borderRadius: 50, color: item.color, textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            En poste
          </span>
        )}
      </div>

      {/* Rôle + entreprise */}
      <div>
        <div style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: '0.97rem', fontWeight: 700,
          color: '#0F0F1A', lineHeight: 1.3, marginBottom: 3,
        }}>
          {item.role}
        </div>
        <div style={{ fontSize: '0.83rem', color: item.color, fontWeight: 500 }}>
          {item.company}
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.84rem', color: '#64748B',
        lineHeight: 1.65, margin: 0, flex: 1,
      }}>
        {item.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
        {item.tags.map(tag => (
          <span key={tag} className="tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="parcours" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          <span className="section-number" aria-hidden="true">04</span>
          
          <h2 className="section-title">
            Mon parcours
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="experience-grid">
          {timelineItems.map((item, index) => (
            <ExperienceCard key={`${item.role}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 640px) {
          .experience-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .experience-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
