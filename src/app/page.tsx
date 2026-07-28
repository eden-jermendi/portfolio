export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <h1 id="main-content">Next.js Migration Foundation</h1>
      <p>This is a placeholder page verifying that the global styling tokens, reset styles, and accessibility overrides compile correctly.</p>
      <button type="button" style={{ padding: '0.5rem 1rem', cursor: 'pointer', background: 'var(--surface-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)', borderRadius: '4px' }}>
        Test Focus Visibility
      </button>
    </main>
  )
}
