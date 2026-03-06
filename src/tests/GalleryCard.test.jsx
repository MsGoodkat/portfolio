import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import GalleryCard from '../components/GalleryCard'

const mockProject = {
  id: 1,
  number: '01',
  color: '#6C63FF',
  category: 'Plateforme AdTech : Réduction de la friction opérationnelle',
  cardCategory: 'Plateforme AdTech',
  title: 'Réduction de la friction opérationnelle',
  image: '/images/adtech-platform.webp',
  results: [
    { value: '−66%', label: 'du temps de paramétrage' },
    { value: '+26%', label: 'du CSAT interne' },
  ],
}

describe('GalleryCard', () => {
  it('affiche le titre du projet', () => {
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={() => {}} />)
    expect(screen.getByText('Réduction de la friction opérationnelle')).toBeInTheDocument()
  })

  it('affiche la cardCategory en badge', () => {
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={() => {}} />)
    expect(screen.getByText('Plateforme AdTech')).toBeInTheDocument()
  })

  it('affiche la première métrique', () => {
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={() => {}} />)
    expect(screen.getByText('−66%')).toBeInTheDocument()
    expect(screen.getByText('du temps de paramétrage')).toBeInTheDocument()
  })

  it('appelle onClick avec le projet au clic', () => {
    const onClick = vi.fn()
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledWith(mockProject)
  })

  it('appelle onClick avec Entrée (accessibilité clavier)', () => {
    const onClick = vi.fn()
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={onClick} />)
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' })
    expect(onClick).toHaveBeenCalledWith(mockProject)
  })

  it('a un aria-label correct', () => {
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={() => {}} />)
    expect(screen.getByRole('button', { name: /Réduction de la friction opérationnelle/i })).toBeInTheDocument()
  })

  it('affiche le numéro du projet', () => {
    render(<GalleryCard project={mockProject} wide={false} index={0} onClick={() => {}} />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('utilise cardTitle si défini', () => {
    const project = { ...mockProject, cardTitle: 'Titre court pour la card' }
    render(<GalleryCard project={project} wide={false} index={0} onClick={() => {}} />)
    expect(screen.getByText('Titre court pour la card')).toBeInTheDocument()
  })

  it('ajoute la classe gallery-item-wide si wide=true', () => {
    render(<GalleryCard project={mockProject} wide={true} index={0} onClick={() => {}} />)
    expect(screen.getByRole('button').className).toContain('gallery-item-wide')
  })
})
