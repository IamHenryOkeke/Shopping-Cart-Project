import { useDispatch } from 'react-redux';
import { filterItems } from '../features/shopSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState("");
  const list = ["All", "jewelery", "electronics", "women's clothing", "men's clothing"];
  
  return (
    <div className="flex gap-5 items-center mb-5">
        <p className='text-xl'>Filter:</p>
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
  )
}

export default Filter
