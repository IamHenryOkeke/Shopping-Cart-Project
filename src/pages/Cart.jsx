import { useSelector, useDispatch } from "react-redux";
import CartItems from "../components/CartItems";
import { useEffect } from "react";
import { calculateTotal, clearCart } from "../features/shopSlice";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const Cart = () => {

  const { numberOfItemsInCart, cartItems, total } = useSelector((state) => state.shop)

  const dispatch = useDispatch(); 

  useEffect(() => {
     dispatch(calculateTotal(cartItems))
  }, [])

  if(numberOfItemsInCart < 1) {
    return (
      <div className="mx-6 my-10 md:my-20 md:mx-14 lg:mx-28">
        <h1 className='text-center font-bold text-2xl'>Your cart is empty</h1>
      </div>
    )
  }
  return (
    <motion.div initial = {{x : 1000}} animate = {{x : 0}} className="mx-6 my-10 md:my-20 lg:mx-28">
      <h1 className='text-center font-bold text-2xl mb-5'>Your Cart</h1>
      <div className='grid gap-4 lg:px-48'>
            {cartItems.map(item => (
              <CartItems key={item.id} {...item}/>
            ))}
      </div>
      <div className="flex justify-between lg:justify-center gap-8 mt-5 text-xl lg:text-3xl">
        <p>
          Total:
        </p>
        <p>
          $ {total.toFixed(2)}
        </p>
      </div>
      <Link to="/" className="flex justify-center gap-8 mt-5 text-xl lg:text-3xl">
        <button onClick={() => {dispatch(clearCart())}} className='transition-all ease-in-out delay-150 duration-300 bg-[#546b56] hover:bg-green-600 px-8 rounded-md py-2 text-white font-bold'>
          Buy now
        </button>
      </Link>
      
    </motion.div>
  )
}

export default Cart
