import { useState, useEffect } from 'react'
import './CookieConsent.css'

function CookieConsent({ onShowPrivacy }) {
  const [showModal, setShowModal] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show modal after a short delay
      setTimeout(() => {
        setShowModal(true)
      }, 1000)
    } else {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(consent)
        setCookiePreferences(savedPrefs)
      } catch (e) {
        console.error('Error loading cookie preferences:', e)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setCookiePreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowModal(false)
    // Initialize analytics/marketing cookies here
    initializeCookies(allAccepted)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setCookiePreferences(onlyNecessary)
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowModal(false)
    // Remove non-necessary cookies
    removeNonNecessaryCookies()
  }

  const handleCustomize = () => {
    setShowCustomize(true)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowModal(false)
    setShowCustomize(false)
    // Initialize cookies based on preferences
    initializeCookies(cookiePreferences)
  }

  const togglePreference = (type) => {
    if (type === 'necessary') return // Cannot disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const initializeCookies = (prefs) => {
    // Initialize analytics cookies if accepted
    if (prefs.analytics) {
      // Add analytics initialization here (e.g., Google Analytics)
      console.log('Analytics cookies enabled')
    }
    
    // Initialize marketing cookies if accepted
    if (prefs.marketing) {
      // Add marketing cookies initialization here
      console.log('Marketing cookies enabled')
    }
    
    // Initialize functional cookies if accepted
    if (prefs.functional) {
      // Add functional cookies initialization here
      console.log('Functional cookies enabled')
    }
  }

  const removeNonNecessaryCookies = () => {
    // Remove analytics cookies
    // Remove marketing cookies
    // Remove functional cookies
    console.log('Non-necessary cookies removed')
  }

  if (!showModal) return null

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-modal">
        <div className="cookie-consent-header">
          <h3 className="cookie-consent-title">Cookie Preferences</h3>
          <p className="cookie-consent-description">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. You can also customize your preferences or reject all non-essential cookies.
          </p>
          <p className="cookie-consent-privacy-link">
            Learn more in our{' '}
            <button 
              className="cookie-privacy-link-btn"
              onClick={onShowPrivacy}
            >
              Privacy Policy
            </button>
          </p>
        </div>

        {showCustomize ? (
          <div className="cookie-consent-customize">
            <div className="cookie-consent-options">
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <span className="cookie-option-title">Necessary Cookies</span>
                  <label className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={cookiePreferences.necessary} 
                      disabled
                      readOnly
                    />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-option-description">
                  These cookies are essential for the website to function properly. They cannot be disabled.
                </p>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-header">
                  <span className="cookie-option-title">Analytics Cookies</span>
                  <label className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={cookiePreferences.analytics}
                      onChange={() => togglePreference('analytics')}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-option-description">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-header">
                  <span className="cookie-option-title">Marketing Cookies</span>
                  <label className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={cookiePreferences.marketing}
                      onChange={() => togglePreference('marketing')}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-option-description">
                  These cookies are used to deliver advertisements that are more relevant to you and your interests.
                </p>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-header">
                  <span className="cookie-option-title">Functional Cookies</span>
                  <label className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={cookiePreferences.functional}
                      onChange={() => togglePreference('functional')}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-option-description">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                </p>
              </div>
            </div>

            <div className="cookie-consent-actions">
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowCustomize(false)}
              >
                Back
              </button>
              <button 
                className="cookie-btn cookie-btn-primary"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="cookie-consent-actions">
            <button 
              className="cookie-btn cookie-btn-secondary"
              onClick={handleRejectAll}
            >
              Reject All
            </button>
            <button 
              className="cookie-btn cookie-btn-secondary"
              onClick={handleCustomize}
            >
              Customize
            </button>
            <button 
              className="cookie-btn cookie-btn-primary"
              onClick={handleAcceptAll}
            >
              Accept All
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CookieConsent

