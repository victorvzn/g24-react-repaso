import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* TODO: Crear una ruta llamada 'profile' y que abra el componente <Profile /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default Router