import {useContext, useState} from 'react'
import { CartContext } from './CartContext'
import ProductBox from './ProductBox';

const Account = ({email, handleLogout}) => {
    const {orders, list} = useContext(CartContext);
    const [isClickOrders, setIsClickOrders] = useState(true);

    console.log(orders , 'orders')
    console.log(list , 'list')
  
  return (
    <div className='flex justify-evenly mt-10' >
        <div className='flex gap-5 ' >
            <div className='flex flex-col w-[30rem] bg-gray-50  ' >
           <div className='flex justify-evenly bg-gray-300 rounded-md p-3'>
           <button onClick={()=> setIsClickOrders(true)}  className='text-xl font-bold rounded-md bg-gray-500 px-6 py-2  '>Orders</button>
             <button onClick={()=> setIsClickOrders(false)}  className='text-xl font-bold rounded-md bg-gray-500 px-6 py-2'>Your List</button>
           </div>
          {isClickOrders ? <> {orders.length === 0 && <p>no orders </p>}
           <ul>
               <li>not working</li>
           </ul>
</> : <>
     {list.length === 0 && <p>no list </p>}
           <ul>
               {list.length > 0 && list.map(item =>{
                 return (<li key={item._id}>
            <ProductBox {...item} />


               </li>)
               })}
           </ul>

</> }
            </div>
           
        </div>
        <div>
            <p className='font-bold' >emailID: <span className='font-thin  ' >{email}</span></p>
            <button onClick={handleLogout}  className='bg-gray-500 px-6 py-2 rounded-md w-56 mt-5 hover:text-white' >Log Out</button>
        </div>
    </div>
  )
}

export default Account