
import {Link} from "react-router-dom"
import FeaturedSection from "../sections/FeaturedSection.jsx"

function Home(){
  return(
    <>
    <main className="bg-gradient-to-t from-pink-50 to-blue-50 ">
     <section className="max-w-4xl mx-auto">
        <header className="py-20 px-3 md:flex flex-col">
         <h2 className="md:text-7xl text-5xl font-extrabold  text-center md:text-left text-gray-700"><span className="text-green-400">Vite</span>, <span className="text-pink-400">React</span> and <span className="text-blue-500">TailwindCSS</span> Developer Package!
         </h2>
         <div>
         <p className="text-2xl md:text-left text-center mt-5 ">Develop Interactive Web pages  Using <span className="font-bold text-pink-500"><a href="react.org" >React</a></span> And <span className="font-bold text-green-400"><a href="vite.org">Vite</a></span>....
         </p>
      <div className="flex flex-col justify-center items-center sm:items-start place-content-center
        ">
         <button className="py-3 px-4 border-2 border-gray-200 rounded-full text-xl text-center flex justify-center text-gray-900 w-1/2 mt-10 hover:bg-blue-400 hover:text-white hover:border-2 hover:border-blue-400 cursor-pointer shadow-lg">Get Started
         </button>
        </div>
       </div>
       </header>
      
      </section>
      
      
    </main>
    
     <FeaturedSection/>
    </>
    )
}export default Home