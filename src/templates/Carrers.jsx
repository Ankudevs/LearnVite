
import {useLoaderData,Link} from "react-router-dom"

function Carrers(){
  const carrers = useLoaderData()
  return(
    <div className="">
    <h2 className="text-4xl font-black">Carrers</h2>
    <p className="text-blue-600">List of Carrers,Location and Salary.
    </p>
      <div className="max-w-4xl mx-auto md:flex-row flex-col justify-between items-center gap-3  ">
      {
        carrers.map((carrer)=>(
          <Link  to={carrer.id.toString()} key={carrer.id}
          >
          <div
          className="  bg-gray-100 my-3 rounded-xl  font-semibold p-4 shadow-lg shadow-gray-400 text-2xl hover:bg-gray-800 hover:text-white">
            <p>Carrer Title: <span className="hover:text-pink-400 text-pink-500">{carrer.title}</span>
            </p>
            <p className="font-black hover:text-white">Starting Salary: <span className="text-blue-400 hover:text-white">${carrer.salary}</span>
            </p>
          </div>
          </Link>
          ))
      }
      </div>
    </div>)
}export default Carrers

export const carrersLoader = async()=>{
  const res = await fetch("http://localhost:4000/carrers");
 return res.json();
}