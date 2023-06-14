import Item from '../components/ShopItem'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../features/shopSlice';
import Filter from '../components/Filter';


const Shop = () => {
  const { shopItems, isLoading, error } = useSelector((state) => state.shop)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getData());
  }, [])

  if(isLoading) {
    return (
      <p className='text-center'>Loading....</p>
    )
  }

  if(error) {
    return (
      <div className='flex flex-col gap-5'>
          <p className='text-center'>{error}</p>
          <button onClick={() => {
            dispatch(getData());
          }} className='transition-all self-center ease-in-out delay-150 duration-300 bg-[#546b56] hover:bg-black px-8 rounded-md py-2 text-white font-bold'>Refresh</button>
      </div> 
    )
  }

  return (
    <main className="mx-6 md:mx-14 lg:mx-28">
      { shopItems && <Filter/> }

      {
        shopItems && (
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10'>
            {shopItems.map(item => (
              <Item key={item.id} {...item}/>
            ))}
          </div>
        ) 
      }
    </main>
  )
}

export default Shop
