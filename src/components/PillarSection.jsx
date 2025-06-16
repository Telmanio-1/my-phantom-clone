// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import '../styles/pillar.css'

export default function PillarSection({ title, items }) {
  return (
    <motion.section
      className="pillar"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </motion.section>
  )
}
