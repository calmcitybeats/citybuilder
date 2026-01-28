export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-indigo-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">CityBuilder</h1>
          <p className="text-lg">Build your website without coding</p>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome</h2>
          <p className="text-gray-600 text-lg mb-4">
            CityBuilder is a powerful personal website builder powered by GrapesJS.
            Start creating your website today with an intuitive drag-and-drop editor.
          </p>
        </section>
      </main>
    </div>
  )
}
