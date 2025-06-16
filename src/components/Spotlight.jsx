import { useEffect, useState } from 'react'
import { pillars } from '../data/pillars'
import '../styles/spotlight.css'

export default function Spotlight({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    setVisible(open)
  }, [open])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const results = pillars
    .map((p) => ({ ...p, items: p.items.filter((i) => i.toLowerCase().includes(query.toLowerCase())) }))
    .filter((p) => p.items.length)

  if (!visible) return null

  return (
    <div className="spotlight-backdrop" onClick={onClose}>
      <div className="spotlight-panel" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <div className="results">
          {results.map((p) => (
            <div key={p.id}>
              <h4>{p.title}</h4>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
