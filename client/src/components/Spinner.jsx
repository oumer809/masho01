import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center p-36  w-full mx-auto'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500'></div>
    </div>
  )
}

export default Spinner