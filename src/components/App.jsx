import { useState } from 'react'
import { pillars } from '../data/pillars'
import Spotlight from './Spotlight'
import ThemeToggle from './ThemeToggle'
import PillarSection from './PillarSection'
import '../styles/App.css'

function App() {
  const [showSpotlight, setShowSpotlight] = useState(true)

  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    document.documentElement.style.setProperty('--rx', `${y * 5}deg`)
    document.documentElement.style.setProperty('--ry', `${x * 5}deg`)
  }

  return (
    <div onMouseMove={handleMove}>
      <ThemeToggle />
      <Spotlight open={showSpotlight} onClose={() => setShowSpotlight(false)} />
      <header className="hero" onClick={() => setShowSpotlight(true)}>
        <h1>Портфолио</h1>
        <p>Наведи курсор и исследуй проекты</p>
      </header>
      {pillars.map((p) => (
        <PillarSection key={p.id} title={p.title} items={p.items} />
      ))}
    </div>
  )
}

export default App
