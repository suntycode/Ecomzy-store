import React from 'react'
import "./Spinner.css"

export const Spinner = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="spinner" > </div>
    <p className='text-xl font-semibold text-blue-600'>Loading</p>
    </div>
  )
}
