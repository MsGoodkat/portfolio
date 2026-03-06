import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects, galleryLayout } from '../data/projects'
import GalleryCard from './GalleryCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedProject, setSelectedProject] = useState(null)

  const getProject = (id) => projects.find((p) => p.id === id)

  return (
    <>
      <section id="projets" className="section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <span className="section-number" aria-hidden="true">02</span>
            <h2 className="section-title">Quelques projets</h2>
            <div className="divider" />
          </motion.div>

          <div className="gallery-grid">
            {galleryLayout.map(({ id, wide }, index) => (
              <GalleryCard
                key={id}
                project={getProject(id)}
                wide={wide}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}
