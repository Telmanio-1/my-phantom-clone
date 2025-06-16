import { useEffect, useState } from 'react'
import { pillars } from '../data/pillars'

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
    <div className="fixed inset-0 backdrop-blur bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white/60 dark:bg-black/30 backdrop-blur p-6 rounded-2xl max-w-md w-11/12" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск..."
          className="w-full mb-4 p-2 rounded-lg bg-white/80 dark:bg-black/50"
        />
        <div className="space-y-2 max-h-60 overflow-y-auto text-sm">
          {results.map((p) => (
            <div key={p.id}>
              <h4 className="font-semibold">{p.title}</h4>
              <ul className="list-disc list-inside">
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
