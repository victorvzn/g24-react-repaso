// COMPONENTE USANDO FUNCTION


/*
function App() {
  // LOGICA DEL COMPONENTE

  // EL RETURN ES LO QUE SE MUESTRA AL USUARIO
  return <h1>Hola React!</h1>
}
*/

// COMPONENTE USANDO ARROW FUNCTIONS

// const App = () => {
//   return <h1>Hola React!</h1>
// }

// COMPONENTE DE REACT USANDO MULTIPES LÍNEAS CON SU ELEMENTO PADRE

// const App = () => {
//   return (
//     <div>
//       <h1>Hola React!</h1>
//       <h2>Hola React!</h2>
//     </div>
//   )
// }

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <h2>Hola React!</h2>
//     </>
//   )
// }

// ANIDANDO COMPONENTES DENTRO DE OTROS

// function Saludo() {
//   return <h3>Hola Victor</h3>
// }

// function Despedida() {
//   return <h3>Adios Victor</h3>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp de codigo!</p>

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }

// IMPORTANDO COMPONENTES EXTERNOS Y OTROS MODULOS

// import Saludo from './components/Saludo.jsx'
// import Despedida from './components/Despedida.jsx'

// import { LISTA_DE_FRUTAS, EDAD } from './components/frutas.js'

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp de codigo!</p>

//       <Saludo />
//       <Saludo />
//       <Despedida />

//       {1 + 2}

//       {LISTA_DE_FRUTAS}

//       {EDAD}
//     </>
//   )
// }

// export default App


// USANDO CSS EN REACT

import Saludo from './components/Saludo.jsx'
import Despedida from './components/Despedida.jsx'

import { LISTA_DE_FRUTAS, EDAD } from './components/frutas.js'

// Importando css global
import './demo.css'

const App = () => {
  return (
    <>
      <h1 style={{ color: 'blue', textDecoration: 'underline' }}>Hola React!</h1>
      <p>Estoy en el bootcamp de codigo!</p>

      <Saludo />
      <Saludo />
      <Despedida />

      {1 + 2}

      {LISTA_DE_FRUTAS}

      {EDAD}
    </>
  )
}

export default App

