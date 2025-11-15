import { useState, useEffect } from 'react'
import './Loader.css'

function Loader() {
  const [progress, setProgress] = useState(0)
  const [currentLogo, setCurrentLogo] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.5
      })
    }, 30)

    const logoInterval = setInterval(() => {
      setCurrentLogo((prev) => {
        if (prev >= 2) {
          clearInterval(logoInterval)
          return 2
        }
        return prev + 1
      })
    }, 600)

    return () => {
      clearInterval(progressInterval)
      clearInterval(logoInterval)
    }
  }, [])

  return (
    <div className="loader">
      <div className="loader-background">
        <div className="loader-floor"></div>
      </div>
      
      <div className="loader-content">
        <div className="loader-logo-stack">
          <div className={`logo-reveal loader-logo-1 ${currentLogo >= 0 ? 'revealed' : ''}`}>
            <img src="/logo_tr.png" alt="Conduitx402" />
          </div>
          <div className={`logo-reveal loader-logo-2 ${currentLogo >= 1 ? 'revealed' : ''}`}>
            <img src="/logo_tr.png" alt="Conduitx402" />
          </div>
          <div className={`logo-reveal loader-logo-3 ${currentLogo >= 2 ? 'revealed' : ''}`}>
            <img src="/logo_tr.png" alt="Conduitx402" />
          </div>
        </div>
        
        <div className="loader-text">
          <div className="loader-brand">Conduitx402</div>
          <div className="loader-progress-container">
            <div className="progress-line-wrapper">
              <div 
                className="progress-line" 
                style={{ '--progress': `${progress}%` }}
              ></div>
            </div>
            <div className="progress-number">{Math.min(Math.round(progress), 100)}</div>
          </div>
        </div>
      </div>
      
      <div className="loader-light"></div>
    </div>
  )
}

export default Loader
