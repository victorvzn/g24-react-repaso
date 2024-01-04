const App = () => {
  const DEFAULT_TODOS = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ]

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold">
        TODO APP
      </h1>

      {JSON.stringify(DEFAULT_TODOS)}

      <form>
        <input
          type="text"
          className="w-full border my-3 p-3"
          placeholder="¿Qué deseas hacer hoy?"
        />
      </form>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          <li>todo 1</li>
          <li>todo 2</li>
          <li>todo 3</li>
        </ul>
      </section>
    </main>
  )
}

export default App