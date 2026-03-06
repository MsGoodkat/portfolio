import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    id: 'product', color: '#6C63FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: 'Product Management',
    skills: ['Stratégie produit', 'Roadmap & Priorisation', 'Discovery', 'Delivery', "Mesure d'impact", 'Backlog management', 'OKRs & KPIs'],
  },
  {
    id: 'ux', color: '#0891B2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
      </svg>
    ),
    title: 'UX & Utilisateur',
    skills: ['UX Research', 'Tests utilisateurs', 'Entretiens', 'Prototypage', 'Idéation', 'Design Thinking', 'Persona & Journey Map'],
  },
  {
    id: 'data', color: '#7B2FBE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Data & Mesure',
    skills: ['CSAT', 'NPS', "Taux d'adoption", 'Vélocité', 'SQL (notions)', 'Google Analytics', 'GTM', 'Hotjar', 'Quicksight'],
  },
  {
    id: 'agile', color: '#7B2FBE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Agile & Leadership',
    skills: ['Scrum', 'Kanban', 'Feature Team Lead', 'Coordination transverse', 'Facilitation', 'Rituels agiles', 'Communication Stakeholder'],
  },
  {
    id: 'tools', color: '#0891B2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Outils',
    skills: ['IA Générative', 'Vibe-coding', 'Figma & FigJam', 'Figma Make', 'Miro', 'Notion', 'Linear', 'Jira', 'Confluence', 'Langfuse'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="competences" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          <span className="section-number" aria-hidden="true">03</span>
          
          <h2 className="section-title">
            Ce que je maîtrise
          </h2>
          <div className="divider" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <style>{`
            @media (max-width: 600px) {
              .skills-row { flex-direction: column !important; gap: 8px !important; }
              .skills-row-separator { display: none !important; }
              .skills-row-label { width: auto !important; padding-right: 0 !important; padding-bottom: 4px; }
            }
          `}</style>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="skills-row"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '22px 0',
                borderBottom: i < skillGroups.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
              }}
            >
              {/* Catégorie — colonne fixe */}
              <div className="skills-row-label" style={{ width: 200, flexShrink: 0, paddingRight: 24, paddingTop: 3 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    display: 'inline-block', width: 7, height: 7,
                    borderRadius: '50%', background: group.color, flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '0.88rem', fontWeight: 700, color: '#0F0F1A',
                  }}>
                    {group.title}
                  </span>
                </span>
              </div>

              {/* Séparateur vertical */}
              <div className="skills-row-separator" style={{ width: 1, alignSelf: 'stretch', background: 'rgba(0,0,0,0.07)', flexShrink: 0, marginRight: 24 }} />

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: i * 0.07 + j * 0.03 }}
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      background: `${group.color}0D`,
                      border: `1px solid ${group.color}25`,
                      borderRadius: 50,
                      fontSize: '0.78rem', fontWeight: 500,
                      color: group.color,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
