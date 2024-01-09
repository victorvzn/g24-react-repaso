import { Routes, Route, BrowserRouter } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>HOME PAGE</h1>} />
        <Route path='/login' element={<h1>LOGIN PAGE</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router