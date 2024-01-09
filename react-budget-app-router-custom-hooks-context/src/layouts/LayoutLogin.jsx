import { Outlet } from 'react-router-dom'

const LayoutLogin = () => {
  return (
    <>
      <header className='bg-amber-600 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Budget app</h1>
        </div>
      </header>

      <main className='my-6 px-6'>
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LayoutLogin