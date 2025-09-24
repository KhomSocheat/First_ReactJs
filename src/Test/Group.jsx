import Card from './Card'
const Group = () => {
  return (
    <main className='w-full h-screen grid place-items-center '>
        <section className='bg-gray-200 px-10 py-10 rounded-lg'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        <section className='mt-3 text-center'>
            <button className='bg-red-400 rounded-lg py-2 text-white px-5'>Clear</button>
        </section>
        </section>
       
    </main>
  )
}
export default Group
