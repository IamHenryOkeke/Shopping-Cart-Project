import { useDispatch } from "react-redux";
import {ReactComponent as ArrowUp} from "../assets/svg/ArrowUp.svg";
import {ReactComponent as ArrowDown} from "../assets/svg/ArrowDown.svg";
import { increaseAmount, decreaseAmount, calculateTotal } from "../features/shopSlice";


const CartItems = ({ id, image, title, price, category, amount }) => {

    const dispatch = useDispatch(); 

    return (
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center px-4 md:px-6 lg:px-12 py-2 lg:py-6 border-gray-200 border-2 rounded-md'>
            <div className='flex gap-10 md:w-4/5 items-center'>
                <img className = "h-14 md:h-20 lg:h-28" src={image} alt="" />
                <div>
                    <h1 className='font-bold lg:text-lg'>{title}</h1>
                    <p className='lg:text-lg'>Category: {category}</p>
                    <p className='lg:text-lg'>Price: ${price}</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <button onClick={() => {
                    dispatch(decreaseAmount(id))
                    dispatch(calculateTotal());
                }}>
                    <ArrowDown className = "h-7"/>
                </button>
                <p className="text-lg">{amount}</p>
                <button onClick={() => {
                    dispatch(increaseAmount(id));
                    dispatch(calculateTotal());
                }}>
                    <ArrowUp className = "h-7"/>
                </button>
            </div>
        </div>
    )
}

export default CartItems
