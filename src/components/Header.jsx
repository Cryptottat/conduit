import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo_tr.png" alt="Conduitx402" className="logo-image" />
          <span className="logo-ticker">Conduitx402</span>
        </div>
        <nav className="nav">
          <a href="https://x.com/conduitx402" className="nav-link" data-text="x">x</a>
          <a href="https://docs.conduitx402.com" className="nav-link" data-text="docs">docs</a>
          <a href="javascript:void(0)" className="nav-link nav-link-disabled" data-text="app" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>app</a>
          <a href="https://pump.fun/coin/BMH9iKhbkMzN9DvyvcsQKmEndV7kNUEszBf9wSNHpump" className="nav-link nav-link-buy" data-text="BUY" target="_blank" rel="noopener noreferrer">BUY</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
