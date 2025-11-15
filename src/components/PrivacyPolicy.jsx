import { useState } from 'react'
import './PrivacyPolicy.css'

function PrivacyPolicy({ onClose }) {
  return (
    <div className="privacy-policy-overlay" onClick={onClose}>
      <div className="privacy-policy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-policy-header">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <button className="privacy-policy-close" onClick={onClose}>×</button>
        </div>
        
        <div className="privacy-policy-content">
          <div className="privacy-section">
            <p className="privacy-last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">1. Introduction</h2>
            <p className="privacy-text">
              Conduitx402 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website conduitx402.com (the "Service").
            </p>
            <p className="privacy-text">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">2. Information We Collect</h2>
            <h3 className="privacy-subsection-title">2.1 Information You Provide</h3>
            <p className="privacy-text">
              We may collect information that you voluntarily provide to us when you:
            </p>
            <ul className="privacy-list">
              <li>Use our Service</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <h3 className="privacy-subsection-title">2.2 Automatically Collected Information</h3>
            <p className="privacy-text">
              When you access the Service, we may automatically collect certain information about your device, including:
            </p>
            <ul className="privacy-list">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of access</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">3. How We Use Your Information</h2>
            <p className="privacy-text">We use the information we collect to:</p>
            <ul className="privacy-list">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates to our terms and policies</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Personalize your experience</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">4. Cookies and Tracking Technologies</h2>
            <p className="privacy-text">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="privacy-text">Types of cookies we use:</p>
            <ul className="privacy-list">
              <li><strong>Necessary Cookies:</strong> Essential for the Service to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Service</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver advertisements relevant to you</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
            </ul>
            <p className="privacy-text">
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of the Service.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">5. Information Sharing and Disclosure</h2>
            <p className="privacy-text">We may share your information in the following situations:</p>
            <ul className="privacy-list">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> For any other purpose with your explicit consent</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">6. Data Security</h2>
            <p className="privacy-text">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">7. Your Privacy Rights</h2>
            <p className="privacy-text">Depending on your location, you may have the following rights:</p>
            <ul className="privacy-list">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="privacy-text">
              To exercise these rights, please contact us through our website.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">8. Children's Privacy</h2>
            <p className="privacy-text">
              Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">9. Changes to This Privacy Policy</h2>
            <p className="privacy-text">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

