import { Link } from 'react-router-dom'

const LayoutBase = ({ children }) => {
  return (
    <>
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
          {children}
        </div>
      </main>
    </>
  )
}

export default LayoutBase