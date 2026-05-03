import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutModal from './components/AboutModal'

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Connecting...')
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.message))
      .catch(() => setBackendStatus('Backend Offline'))
  }, [])

  return (
    <Layout onAboutClick={() => setIsAboutOpen(true)}>
      <div style={{ textAlign: 'center', padding: '10px', background: 'var(--color-bg-accent)', fontSize: '0.8rem' }}>
        Backend Status: {backendStatus}
      </div>
      <HeroSection onAboutClick={() => setIsAboutOpen(true)} />
      <Projects />
      <Contact />
      
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </Layout>
  )
}

export default App
