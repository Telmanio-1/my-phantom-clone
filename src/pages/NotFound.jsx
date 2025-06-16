import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">Страница не найдена.</p>
      <Link to="/" className="underline">На главную</Link>
    </div>
  )
}
