import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../features/shopSlice';
import { Link } from 'react-router-dom';

const Filter = () => {
  const dispatch = useDispatch();
  const { numberOfItemsInCart } = useSelector((state) => state.shop)

  const list = ["All", "jewelery", "electronics", "women's clothing", "men's clothing"];
  
  return (
    <div className="flex justify-between mb-5">
        <div className='flex gap-5 items-center'>
            <p className='text-xl'>Category:</p>
            <select className='bg-[#546b56] text-white font-semibold pl-2 py-1 rounded' onChange={(e) => {
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
              <Link to="/cart">
                  <button className='transition-all ease-in-out delay-150 duration-300 bg-[#546b56] hover:bg-black px-8 rounded-md py-2 text-white font-bold'>Proceed to checkout</button>
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
