import Card from './Card'
import pro from '../../assets/man.png'
import watch from '../../assets/1_After_4-2_400x.webp'
import watch1 from '../../assets/Addingnumbersaroundacircle2_1_400x.webp'
let arr =[
    {
        id: 1,
        img : pro,
        name : "Socheat",
        des : "This is person 1",
    },
    {
        id: 2,
        img : watch,
        name : "Watach",
        des : "this is watch",
    },
]
const Report = (id) =>{
    const obj = arr.find(val => (
      val.id === id 
    ))
    // console.log(obj);
    alert(JSON.stringify(obj));
}
const Cards = () => {
  return (
   <div className='w-full h-screen place-items-center'>
        <div className='grid w-3/4 grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
         {
          arr.map((obj,index) =>(
            <Card {...obj} key={index} getById={Report}/>
          ))
         }
      </div>
   </div>
  )
}
export default Cards
