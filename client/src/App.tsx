import { useState } from 'react'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutModal from './components/AboutModal'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <Layout onAboutClick={() => setIsAboutOpen(true)}>
      <HeroSection onAboutClick={() => setIsAboutOpen(true)} />
      <Projects />
      <Contact />
      
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </Layout>
  )
}

export default App
