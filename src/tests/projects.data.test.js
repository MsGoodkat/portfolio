import { describe, it, expect } from 'vitest'
import { projects, galleryLayout } from '../data/projects'

describe('projects data', () => {
  it('contient 5 projets', () => {
    expect(projects).toHaveLength(5)
  })

  it('chaque projet a les champs obligatoires', () => {
    projects.forEach((p) => {
      expect(p.id, `projet ${p.id} — id manquant`).toBeDefined()
      expect(p.number, `projet ${p.id} — number manquant`).toBeDefined()
      expect(p.color, `projet ${p.id} — color manquante`).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(p.category, `projet ${p.id} — category manquante`).toBeTruthy()
      expect(p.title, `projet ${p.id} — title manquant`).toBeTruthy()
      expect(p.image, `projet ${p.id} — image manquante`).toMatch(/\.webp$/)
      expect(p.context, `projet ${p.id} — context manquant`).toBeTruthy()
      expect(p.objectifs, `projet ${p.id} — objectifs manquants`).toBeTruthy()
      expect(Array.isArray(p.actions), `projet ${p.id} — actions doit être un tableau`).toBe(true)
      expect(p.actions.length, `projet ${p.id} — actions vides`).toBeGreaterThan(0)
    })
  })

  it('chaque projet a au moins 2 résultats avec value et label', () => {
    projects.forEach((p) => {
      expect(p.results.length, `projet ${p.id} — au moins 2 résultats attendus`).toBeGreaterThanOrEqual(2)
      p.results.forEach((r) => {
        expect(r.value, `projet ${p.id} — result.value manquant`).toBeTruthy()
        expect(r.label, `projet ${p.id} — result.label manquant`).toBeTruthy()
      })
    })
  })

  it('les couleurs utilisées font partie de la palette définie', () => {
    const palette = ['#6C63FF', '#0891B2', '#7B2FBE']
    projects.forEach((p) => {
      expect(palette, `projet ${p.id} — couleur hors palette : ${p.color}`).toContain(p.color)
    })
  })

  it('les IDs du galleryLayout correspondent à des projets existants', () => {
    const projectIds = projects.map((p) => p.id)
    galleryLayout.forEach(({ id }) => {
      expect(projectIds, `galleryLayout — id ${id} ne correspond à aucun projet`).toContain(id)
    })
  })

  it('le projet avec un lien a un lien valide', () => {
    const withLink = projects.filter((p) => p.link)
    withLink.forEach((p) => {
      expect(p.link, `projet ${p.id} — lien invalide`).toMatch(/^\//)
    })
  })
})
