import React from 'react'
import profile from '../assets/man.png'
const Card = () => {
  return (
        <article className='flex items-center bg-slate-400 w-[30vw] justify-between rounded-lg px-5 py-2 mb-2'>
                <img src={profile} className='w-20 h-20 rounded-full' alt="" />
                <h1 className='text-white text-1xl'>Lorem ipsum dolor sit, </h1>
                <button className='bg-red-500 rounded-lg py-2 text-white px-5'>Remove</button>
        </article>
  )
}

export default Card
