import { useEffect, useState } from 'react'
import '../styles/theme.css'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <button
      className="px-3 py-1 rounded-xl bg-white/60 dark:bg-black/40 backdrop-blur"
      onClick={toggle}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
