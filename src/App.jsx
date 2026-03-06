import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Timeline = lazy(() => import('./components/Timeline'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
