import React from 'react'

const Loading = () => {
  return (
    <span className='relative flex w-6 h-6'>
      <span className='absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary-blue'></span>
      <span className='relative inline-flex w-6 h-6 rounded-full bg-primary-blue'></span>
    </span>
  )
}

export default Loading
