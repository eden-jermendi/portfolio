import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Connecting...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.message))
      .catch(() => setBackendStatus('Backend Offline'))
  }, [])

  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '10px', background: 'var(--color-bg-accent)', fontSize: '0.8rem' }}>
        Backend Status: {backendStatus}
      </div>
      <HeroSection />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
