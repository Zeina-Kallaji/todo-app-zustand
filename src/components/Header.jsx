import React from 'react'
import { HeaderIllustration } from './Icons'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-illustration">
          <HeaderIllustration />
        </div>
        <div className="header-text">
          <h1 className="header-title">مهامي اليومية</h1>
          <p className="header-subtitle">نظّم مهامك بكل سهولة وأناقة</p>
        </div>
      </div>
    </header>
  )
}

export default Header
