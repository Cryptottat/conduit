import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Loader from './components/Loader'
import CookieConsent from './components/CookieConsent'
import PrivacyPolicy from './components/PrivacyPolicy'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const removeTimer = setTimeout(() => {
      setShowLoader(false)
    }, 2500)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <>
      {showLoader && <Loader isLoading={isLoading} />}
      <div className="app">
        <Header />
        <Hero />
        <CookieConsent onShowPrivacy={() => setShowPrivacyPolicy(true)} />
        {showPrivacyPolicy && <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />}
      </div>
    </>
  )
}

export default App
