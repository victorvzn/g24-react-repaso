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

      {/* {JSON.stringify(DEFAULT_TODOS)} */}

      <form>
        <input
          type="text"
          className="w-full border my-3 p-3"
          placeholder="¿Qué deseas hacer hoy?"
        />
      </form>

      <div className="flex justify-between items-center">
        <span className="font-bold">2  de 3</span>
        <button
          className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
        >
          Limpiar tareas completadas
        </button>
      </div>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2">
            <input
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <span>Todo 1</span>
              <button>❌</button>
            </div>
          </li>
          <li className="flex gap-2">
            <input
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <span>Todo 2</span>
              <button>❌</button>
            </div>
          </li>
          <li className="flex gap-2">
            <input
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <span>Todo 3</span>
              <button>❌</button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App