import { Link } from 'react-router-dom'
import HeroImage from "../assets/images/HeroImage.jpg"

const Home = () => {
  return (
    <div className="mx-3 mb-6 lg:mx-28 flex flex-col-reverse md:flex-row gap-7 justify-between items-center">
      <div className = "text-center">
        <h1 className = "text-3xl lg:text-6xl font-bold mb-5">Welcome to The Market Place</h1>
        <p className = "text-xl lg:text-4xl mb-5">Your one stop for everything you need</p>
        <button className = "bg-[#C2DEDC] transition-all ease-in-out delay-100 text-white font-bold lg:text-2xl px-6 py-3 lg:px-16 lg:py-6 rounded-lg duration-300 hover:text-[#1BA9B5] hover:scale-125">
          <Link to = "/shop" className='cursor-pointer'>Shop now</Link>
        </button>
      </div>
      <img className = "md:w-1/2 rounded-xl" src={HeroImage} alt="" />
    </div>
  )
}

export default Home
