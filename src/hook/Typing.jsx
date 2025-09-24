import React, { useState } from 'react'
const Typing = () => {
    const [text,setText] = useState('');
  return (
    <main className='h-screen w-full bg-blue-600'> 
        <section className='flex justify-center items-center py-5'>
            <input type="text" 
            onChange={(e) => setText(e.target.value)}
            placeholder='Typing here...' 
            className='w-3/4 rounded-lg p-20 shadow-none outline-none '/>
        </section>
        <section className='bg-white h-[90vh] w-full grid place-items-center'>
            <h1 className='text-8xl'>{text}</h1>
        </section>
    </main>
  )
}
export default Typing
