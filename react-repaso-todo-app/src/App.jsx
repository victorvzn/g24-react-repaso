import { useState, useEffect } from "react"

const App = () => {
  const DEFAULT_TODOS = []

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')

  const fetchTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'

    const response = await fetch(url)

    return response.json()
  }

  useEffect(() => {
    console.log('me ejecuto solo la primera vez')

    fetchTodos()
      // .then(data => setTodos(data))
      .then(setTodos)
  }, [])

  const handleChange = (event) => {
    // console.log('soy el input...')
    // Estamos capturando lo que escribimos en la caja de texto
    const value = event.target.value

    // console.log(value)

    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // console.log('Agregando nueva tarea...')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    setTodos([...todos, newTodo])

    setInput('')
  }

  const handleCompleted = (event) => {
    console.log('Completando tarea...')

    const idSelected = event.target.dataset.id
    const isChecked = event.target.checked

    const newTodos = todos.map(todo => {
      if (todo.id === Number(idSelected)) {
        return { ...todo, completed: isChecked }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    setTodos(newTodos)
  }

  const handleClearTodos = (event) => {
    const incompletedTodos = todos.filter(todo => todo.completed === false)

    setTodos(incompletedTodos)
  }

  // TODO: Devolver las tareas completadas
  const completedTodos = todos.filter(todo => todo.completed === true)

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold">
        TODO APP
      </h1>

      {/* {JSON.stringify(DEFAULT_TODOS)} */}
      {input}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border my-3 p-3"
          placeholder="¿Qué deseas hacer hoy?"
          required
          onChange={handleChange}
          value={input}
        />
      </form>

      <div className="flex justify-between items-center">
        <span className="font-bold">
          {completedTodos.length} de {todos.length}
        </span>
        <button
          className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
          onClick={handleClearTodos}
        >
          Limpiar tareas completadas
        </button>
      </div>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex gap-2" key={todo.id}>
                <input
                  type="checkbox"
                  data-id={todo.id}
                  checked={todo.completed}
                  onChange={handleCompleted}
                />
                <div className="w-full flex justify-between items-center">
                  <span
                    className={`${todo.completed ? 'line-through' : ''}`}
                  >
                    {todo.title}
                  </span>
                  <button
                    className="bg-red-300 rounded-lg p-1 hover:bg-red-500 duration-300"
                    data-id={todo.id}
                    onClick={handleRemoveTodo}
                  >
                    ❌
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <pre>
        {/* {JSON.stringify(todos, null, 2)} */}
      </pre>
    </main>
  )
}

export default App