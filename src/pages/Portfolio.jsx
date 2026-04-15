import { pillars } from '../data/pillars'
import PillarSection from '../components/PillarSection'

export default function Portfolio() {
  return (
    <div>
      {pillars.map((p) => (
        <PillarSection key={p.id} title={p.title} items={p.items} />
      ))}
    </div>
  )
}
