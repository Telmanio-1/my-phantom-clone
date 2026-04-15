import { useEffect, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { pillars } from '../data/pillars'

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % pillars.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-[60vh] select-none overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <Motion.div
          key={pillars[index].id}
          className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur rounded-3xl p-8 bg-white/60 dark:bg-black/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">{pillars[index].title}</h1>
          <p className="opacity-80 text-sm">{pillars[index].items[0]}</p>
        </Motion.div>
      </AnimatePresence>
    </div>
  )
}
