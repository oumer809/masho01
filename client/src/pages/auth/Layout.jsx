import React from 'react'
import { Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div className='flex items-center justify-center p-2 flex-col span-y-2'>
        <h1 className='text-2xl font-bold '>Welcome to Masho-Tech</h1>
        <p>Join Below!</p>
        <div>
            <Outlet/>
            
        </div>
    </div>
  )
}

export default Layout