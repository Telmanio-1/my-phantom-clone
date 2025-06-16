export default function Contact() {
  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Связаться со мной</h1>
      <form className="space-y-4">
        <input className="w-full p-2 rounded-lg bg-white/60 dark:bg-black/30 backdrop-blur" placeholder="Имя" />
        <input className="w-full p-2 rounded-lg bg-white/60 dark:bg-black/30 backdrop-blur" placeholder="Email" />
        <textarea className="w-full p-2 rounded-lg bg-white/60 dark:bg-black/30 backdrop-blur" placeholder="Сообщение" rows="4" />
        <button type="submit" className="px-4 py-2 rounded-lg bg-white/60 dark:bg-black/30 backdrop-blur hover:bg-white/80 dark:hover:bg-black/50">Отправить</button>
      </form>
    </div>
  )
}
