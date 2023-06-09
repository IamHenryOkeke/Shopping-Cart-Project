import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/shopSlice';

  
const Item = ({ id, image, title, price, category }) => {
    const dispatch = useDispatch();
    
    return (
        <div className='py-4 transition-all ease-in-out delay-150 duration-300 border-gray-200 border-4 rounded-md hover:bg-slate-100 hover:scale-105'>
          <div className='flex justify-center py-4'>
            <img className='h-32' src={image} alt={title} />
          </div>
          <hr />
          <div className='text-center w-full p-4'>
            <h4 className='font-bold'>{title}</h4>
            <p className='italic capitalize'>Category: {category}</p>
            <h4 className='item-price'>Price: ${price}</h4>
          </div>
          <div className='text-center w-full px-4'>
            <button onClick={() => {dispatch(addItemToCart(id))}} className='w-full transition-all ease-in-out delay-150 duration-300 bg-[#546b56] hover:bg-black px-8 rounded-md py-2 text-white font-bold'>Add to cart</button>
          </div>
        </div>
      )
}
  
export default Item
  