import React from 'react'

export default function Footer({ className = '' }) {
  const year = new Date().getFullYear()

  return (
    <footer className={className} style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(0,0,0,0.07)',
      padding: '18px 0',
      background: 'rgba(245,247,255,0.6)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: '0.78rem', color: '#94A3B8', margin: 0 }}>
          © {year} Laura Monneveux
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="mailto:lauramonneveux@gmail.com" className="footer-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            lauramonneveux@gmail.com
          </a>
          <span style={{ color: 'rgba(0,0,0,0.12)' }}>·</span>
          <a
            href="https://linkedin.com/in/lauramonneveux"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-linkedin"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
