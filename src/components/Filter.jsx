import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../features/shopSlice';
import { Link } from 'react-router-dom';

const Filter = () => {
  const dispatch = useDispatch();
  const { numberOfItemsInCart } = useSelector((state) => state.shop)

  const list = ["All", "jewelery", "electronics", "women's clothing", "men's clothing"];
  
  return (
    <div className="flex justify-between items-end mb-5">
        <div className='flex gap-2 md:gap-5 flex-col md:flex-row md:items-center'>
            <p className='text-sm md:text-xl'>Category:</p>
            <select className='bg-[#546b56] text-sm md:text-xl text-white font-semibold pl-2 py-1 rounded' onChange={(e) => {
              dispatch(filterItems(e.target.value))
            }}>
              {
                list.map((item, index) => {
                  return (
                    <option key={index} value={item}>{item}</option>
                  )
                })
              }
            </select>
        </div>
        <div>
          {
            numberOfItemsInCart > 0 ? (
              <Link to="/cart" className='text-sm md:text-xl'>
                  <button className='transition-all ease-in-out delay-150 duration-300 bg-[#546b56] hover:bg-black px-2 py-1 md:px-8 rounded-md md:py-2 text-white font-bold'>Proceed to checkout</button>
              </Link>
            ) : (
              <div>

              </div>
            )
          }
        </div>
        
      </div>
  )
}

export default Filter
