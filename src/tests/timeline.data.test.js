import { describe, it, expect } from 'vitest'
import { timelineItems } from '../data/timeline'

describe('timeline data', () => {
  it('contient 6 entrées', () => {
    expect(timelineItems).toHaveLength(6)
  })

  it('chaque entrée a les champs obligatoires', () => {
    timelineItems.forEach((item, i) => {
      expect(item.period, `item ${i} — period manquante`).toBeTruthy()
      expect(item.role, `item ${i} — role manquant`).toBeTruthy()
      expect(item.company, `item ${i} — company manquante`).toBeTruthy()
      expect(['experience', 'education'], `item ${i} — type invalide`).toContain(item.type)
      expect(item.color, `item ${i} — color manquante`).toMatch(/^#[0-9A-Fa-f]{6}$/)
      expect(item.description, `item ${i} — description manquante`).toBeTruthy()
      expect(Array.isArray(item.tags), `item ${i} — tags doit être un tableau`).toBe(true)
    })
  })

  it('une seule entrée est marquée "current"', () => {
    const current = timelineItems.filter((item) => item.current)
    expect(current).toHaveLength(1)
  })

  it("l'entrée current est bien une expérience (pas une formation)", () => {
    const current = timelineItems.find((item) => item.current)
    expect(current.type).toBe('experience')
  })
})
