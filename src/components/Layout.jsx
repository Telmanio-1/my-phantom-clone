import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Spotlight from './Spotlight'

export default function Layout() {
  const [showSpotlight, setShowSpotlight] = useState(false)
  const { pathname } = useLocation()

  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    document.documentElement.style.setProperty('--rx', `${y * 5}deg`)
    document.documentElement.style.setProperty('--ry', `${x * 5}deg`)
  }

  return (
    <div className="min-h-screen font-inter" onMouseMove={handleMove}>
      <nav className="fixed inset-x-0 top-0 flex items-center justify-center gap-8 py-4 z-20 text-sm backdrop-blur bg-white/60 dark:bg-black/30">
        <Link to="/" className={`hover:underline ${pathname === '/' ? 'font-semibold' : ''}`}>Главная</Link>
        <Link to="/about" className={`hover:underline ${pathname === '/about' ? 'font-semibold' : ''}`}>Обо мне</Link>
        <Link to="/portfolio" className={`hover:underline ${pathname.startsWith('/portfolio') ? 'font-semibold' : ''}`}>Портфолио</Link>
        <Link to="/contact" className={`hover:underline ${pathname === '/contact' ? 'font-semibold' : ''}`}>Контакты</Link>
        <button onClick={() => setShowSpotlight(true)} className="hover:underline">Поиск</button>
        <ThemeToggle />
      </nav>
      <Spotlight open={showSpotlight} onClose={() => setShowSpotlight(false)} />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  )
}
