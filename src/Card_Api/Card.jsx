import React from 'react'
const Card = ({ product,id,getID }) => {
  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {product.map((item, index) => (
        <article key={index} className="w-72 bg-white shadow-lg   rounded-lg overflow-hidden">
          <section className="flex justify-center items-center  h-64">
            <img src={item.image} className="h-48 object-contain"/>
          </section>
          <section className="p-4 flex flex-col justify-between h-[200px]">
            <h1 className="text-md font-semibold mb-3 line-clamp-2 text-center">{item.title}</h1>
            <div className="flex justify-between items-center mb-3">
              <p className="text-red-500 text-xl font-bold">${item.price}</p>
            </div>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 " onClick={() => getID(id)}>
              Add to Cart
            </button>
          </section>
        </article>
      ))}
    </main>
  )
}
export default Card
