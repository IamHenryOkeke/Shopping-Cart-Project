import useFetch from '../hooks/useFetch'
import Item from '../components/Item'



const Shop = () => {
  const { data, error, loading } = useFetch();

  const list = ["All", "jewelery", "electronics", "women's clothing", "men's clothing"];

  return (
    <main className="mx-6 md:mx-14 lg:mx-28">
      {
        loading && <p className='text-center'>Loading....</p>
      }

      {
        error && <p>{error}</p>
      }

      {
        data && (
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10'>
            {data.map(item => (
              <Item key={item.id} {...item}/>
            ))}
          </div>
        ) 
      }
      
    </main>
  )
}

export default Shop
