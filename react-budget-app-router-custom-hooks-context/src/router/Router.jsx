import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import LayoutBase from '../layouts/LayoutBase'

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutBase>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          {/* TODO: Crear una ruta llamada 'profile' y que abra el componente <Profile /> */}
        </Routes>
      
      </LayoutBase>
    </BrowserRouter>
  )
}

export default Router