import './Hero.css'

function Hero() {
  return (
    <main className="hero">
      
      <div className="hero-background">
        <div className="bg-pattern"></div>
      </div>

      <div className="floor-3d"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">AI API Unified Payment</span>
          </div>

          <h1 className="hero-title">
            <span className="title-main">Conduit<br />X402</span>
          </h1>
        </div>

        <div className="hero-visual">
          <div className="visual-light-source"></div>
          <div className="visual-logo-container">
            <div className="logo-layer logo-1">
              <img src="/logo_tr.png" alt="Conduitx402 Logo" className="visual-logo" />
            </div>
            <div className="logo-layer logo-2">
              <img src="/logo_tr.png" alt="Conduitx402 Logo" className="visual-logo" />
            </div>
            <div className="logo-layer logo-3">
              <img src="/logo_tr.png" alt="Conduitx402 Logo" className="visual-logo" />
            </div>
            <div className="logo-reflection"></div>
          </div>
          <div className="visual-glow"></div>
        </div>
      </div>

      <div className="hero-bottom-text">
        <div className="title-subtitle">The Unified Payment Matrix</div>
        <div className="hero-description">
          Enabling AI agents to use multiple API services through a single X402 payment, minimizing transaction count and latency.
        </div>
      </div>
    </main>
  )
}

export default Hero
