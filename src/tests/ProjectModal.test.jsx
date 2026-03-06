import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectModal from '../components/ProjectModal'

const mockProject = {
  id: 3,
  color: '#7B2FBE',
  category: 'UX/UI Design · Ironhack × Zenpark',
  title: 'Refonte du parcours de modification de réservation',
  context: 'Contexte du projet.',
  objectifs: 'Objectifs du projet.',
  actions: ['Action 1', 'Action 2'],
  results: [
    { value: '122', label: 'réponses au survey' },
    { value: 'Hi-fi', label: 'prototype livré' },
  ],
  link: '/Zenpark-Laura-Monneveux.pdf',
}

describe('ProjectModal', () => {
  it("affiche le titre et la catégorie du projet", () => {
    render(<ProjectModal project={mockProject} onClose={() => {}} />)
    expect(screen.getByText('Refonte du parcours de modification de réservation')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design · Ironhack × Zenpark')).toBeInTheDocument()
  })

  it('affiche le contexte et les objectifs', () => {
    render(<ProjectModal project={mockProject} onClose={() => {}} />)
    expect(screen.getByText('Contexte du projet.')).toBeInTheDocument()
    expect(screen.getByText('Objectifs du projet.')).toBeInTheDocument()
  })

  it('affiche toutes les actions', () => {
    render(<ProjectModal project={mockProject} onClose={() => {}} />)
    expect(screen.getByText('Action 1')).toBeInTheDocument()
    expect(screen.getByText('Action 2')).toBeInTheDocument()
  })

  it('affiche tous les résultats', () => {
    render(<ProjectModal project={mockProject} onClose={() => {}} />)
    expect(screen.getByText('122')).toBeInTheDocument()
    expect(screen.getByText('réponses au survey')).toBeInTheDocument()
    expect(screen.getByText('Hi-fi')).toBeInTheDocument()
    expect(screen.getByText('prototype livré')).toBeInTheDocument()
  })

  it("affiche le lien 'En savoir plus' si project.link est défini", () => {
    render(<ProjectModal project={mockProject} onClose={() => {}} />)
    const link = screen.getByRole('link', { name: /en savoir plus/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/Zenpark-Laura-Monneveux.pdf')
  })

  it("n'affiche pas le lien si project.link est absent", () => {
    const { link, ...projectWithoutLink } = mockProject
    render(<ProjectModal project={projectWithoutLink} onClose={() => {}} />)
    expect(screen.queryByRole('link', { name: /en savoir plus/i })).not.toBeInTheDocument()
  })

  it('appelle onClose au clic sur le bouton fermer', () => {
    const onClose = vi.fn()
    render(<ProjectModal project={mockProject} onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: /fermer/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('retourne null si project est null', () => {
    const { container } = render(<ProjectModal project={null} onClose={() => {}} />)
    expect(container).toBeEmptyDOMElement()
  })
})
