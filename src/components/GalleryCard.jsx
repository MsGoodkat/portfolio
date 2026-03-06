import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function GalleryCard({ project, wide, index, onClick }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <motion.article
      ref={ref}
      className={`gallery-card ${wide ? 'gallery-item-wide' : ''}`}
      style={{ '--project-color': project.color }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onClick={() => onClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`Voir le projet : ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    >
      {/* Zone photo */}
      <div className="gallery-card-photo">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: `${project.color}0A`,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: 7,
            padding: 14,
          }}>
            {Array.from({ length: 20 }).map((_, i) => {
              const row = Math.floor(i / 5)
              const col = i % 5
              const isAlt = (row + col) % 2 === 0
              return (
                <div key={i} style={{
                  borderRadius: 6,
                  background: isAlt ? `${project.color}30` : `${project.color}12`,
                }} />
              )
            })}
          </div>
        )}
      </div>

      {/* Bande info */}
      <div className="gallery-card-info">
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5, flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: '0.65rem', fontWeight: 700,
            color: project.color, letterSpacing: '0.05em',
          }}>
            {project.number}
          </span>
          <span style={{
            display: 'inline-block',
            padding: '2px 8px', borderRadius: 50,
            background: `${project.color}12`,
            border: `1px solid ${project.color}28`,
            fontSize: '0.63rem', fontWeight: 600,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            color: project.color,
          }}>
            {project.cardCategory || project.category}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: '0.88rem', fontWeight: 700,
          color: '#0F0F1A', lineHeight: 1.3,
          marginBottom: 8,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.cardTitle || project.title}
        </h3>

        {/* Métrique — toujours visible */}
        <div className="gallery-card-stat">
          <span style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: '1.05rem', fontWeight: 800,
            color: project.color, lineHeight: 1,
          }}>
            {project.results[0].value}
          </span>
          <span style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.3 }}>
            {project.results[0].label}
          </span>
        </div>

        <div className="gallery-card-cta">
          <span>Voir le détail</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </motion.article>
  )
}
