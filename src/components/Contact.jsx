import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ⚠️  Remplacez YOUR_FORM_ID par votre identifiant Formspree
const FORMSPREE_ID = 'xdawnrgy'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) { setStatus('success'); setFormState({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          
          <h2 className="section-title">
            Parlons{' '}
            produit.
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Un poste, un projet ou juste une question ? N'hésitez pas à m'écrire.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28, alignItems: 'start' }}>
          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {[
              {
                color: '#6C63FF', bg: 'rgba(108,99,255,0.07)', border: 'rgba(108,99,255,0.15)',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                href: 'mailto:lauramonneveux@gmail.com',
                text: 'lauramonneveux@gmail.com',
              },
              {
                color: '#0891B2', bg: 'rgba(8,145,178,0.07)', border: 'rgba(8,145,178,0.15)',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" aria-hidden="true">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/lauramonneveux',
                text: 'linkedin.com/in/lauramonneveux',
                external: true,
              },
              {
                color: '#7B2FBE', bg: 'rgba(123,47,190,0.07)', border: 'rgba(123,47,190,0.15)',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B2FBE" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                ),
                label: 'Calendly',
                href: 'https://calendly.com/lauraamonneveux',
                text: 'Prendre un rendez-vous',
                external: true,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="glass-card contact-card"
                style={{ '--contact-color': item.color, padding: '16px 20px', display: 'block', textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: item.bg, border: `1px solid ${item.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginBottom: 3 }}>{item.label}</div>
                    <span className="contact-card-text" style={{ fontWeight: 500, fontSize: '0.92rem', transition: 'color 0.2s' }}>
                      {item.text}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '36px' }} noValidate>
              {[
                { id: 'contact-name', name: 'name', label: 'Nom', type: 'text', placeholder: 'Votre nom', value: formState.name },
                { id: 'contact-email', name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com', value: formState.email },
              ].map((field) => (
                <div key={field.id} style={{ marginBottom: 20 }}>
                  <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: '#64748B', marginBottom: 8 }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id} type={field.type} name={field.name}
                    value={field.value} onChange={handleChange} required placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.45)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.07)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 28 }}>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: '#64748B', marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  id="contact-message" name="message"
                  value={formState.message} onChange={handleChange}
                  required rows={5} placeholder="Votre message..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.45)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.07)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>

              {status === 'success' && (
                <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(8,145,178,0.07)', border: '1px solid rgba(8,145,178,0.18)', color: '#0891B2', fontSize: '0.9rem', marginBottom: 20 }}>
                  ✓ Message envoyé ! Je reviendrai vers vous rapidement.
                </div>
              )}
              {status === 'error' && (
                <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(200,50,50,0.06)', border: '1px solid rgba(200,50,50,0.15)', color: '#DC2626', fontSize: '0.9rem', marginBottom: 20 }}>
                  Une erreur est survenue. Veuillez réessayer ou m'écrire directement par email.
                </div>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                {status !== 'sending' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#FAFBFF',
  border: '1px solid rgba(0,0,0,0.09)',
  borderRadius: 10,
  color: '#0F0F1A',
  fontSize: '0.95rem',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}
