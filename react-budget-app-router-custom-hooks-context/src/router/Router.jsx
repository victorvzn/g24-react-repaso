import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

const Router = () => {
  return (
    <BrowserRouter>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Budget app</h1>
          <nav className='flex gap-3'>
            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/login" className='hover:underline'>Login</Link>
            <Link to="/profile" className='hover:underline'>Profile</Link>
          </nav>
        </div>
      </header>

      <main className='my-6 px-6'>
        <div className='container mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            {/* TODO: Crear una ruta llamada 'profile' y que abra el componente <Profile /> */}
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default Router