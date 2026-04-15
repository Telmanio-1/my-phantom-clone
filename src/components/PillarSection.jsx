import { motion as Motion } from 'framer-motion'

export default function PillarSection({ title, items }) {
  return (
    <Motion.section
      className="mx-auto my-16 max-w-xl rounded-2xl bg-white/60 dark:bg-black/30 backdrop-blur p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </Motion.section>
  )
}
