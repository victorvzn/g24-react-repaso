import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

import LayoutBase from '../layouts/LayoutBase'
import LayoutLogin from '../layouts/LayoutLogin'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutLogin />}>
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<LayoutBase />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          {/* TODO: Crear una ruta llamada 'profile' y que abra el componente <Profile /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router