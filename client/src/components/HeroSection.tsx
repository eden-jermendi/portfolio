import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="welcome-section" className="hero">
      <div className="site-width hero-inner">
        {/* Avatar Placeholder */}
        <div className="avatar-link">
          <div className="avatar-wrap">
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--color-bg-accent)',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                fontSize: '2rem'
              }}
            >
              EJ
            </div>
            <span className="avatar-overlay-text">About Me</span>
          </div>
        </div>

        <h1>Eden Jermendi's Portfolio</h1>
        <p>Welcome! Let's see if we vibe...</p>
      </div>
    </section>
  );
};

export default HeroSection;
