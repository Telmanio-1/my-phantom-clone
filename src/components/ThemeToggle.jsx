import { useEffect, useState } from 'react'
import '../styles/theme.css'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <button className="theme-toggle" onClick={toggle}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
