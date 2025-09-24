import React from 'react'
import Man from '../../assets/man.png'
const Card = ({name,img,des,children,id,getById}) => {
    // const {name,img,des} = props;
  return (
    <article className='w-64 h-auto shadow-md py-10 px-8 rounded-lg'>
        <section className='flex justify-center'>
            <img src={img} alt="" className='w-2/3' />
        </section>
        <section className='text-center w-full mt-5'>
            <h1 className='font-bold text-3xl text-gray-700'>{name}</h1>
        </section>
        <section className='text-center w-full'>
            <p className='text-justify'>{des}</p>
        </section>
        <section className='flex justify-end'>
            <button className='py-2 px-3 bg-red-600 mt-2 text-white rounded-lg' onClick={()=>getById(id)}>Read Me</button>
        </section>
    </article>
  )
}
export default Card
