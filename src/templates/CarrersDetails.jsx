
import {useLoaderData,useParams} from "react-router-dom"
function CarrersDetails(){
  
  const {id} = useParams();
  const carrer = useLoaderData();
  
  return(
    <>
     <div className="text-2xl p-4 rounded-xl bg-gray-800 shadow-md text-white hover:bg-gray-100 hover:text-gray-700">
      <h2 className="mb-3">Carrer Title: <span className=" text-pink-400 hover:text-pink-500">{carrer.title}</span></h2>
      <p className="mb-3">Starting salary: ${carrer.salary}</p>
      <div>
        <p><span className="underline underline-blue-500">{carrer.title}</span> is one of the best and safe job out there for junior devs</p>
      </div>
     </div>
    </>
  )}export default CarrersDetails
  
  
  
  export const carrersDetailsLoader = async({params})=>{
    const{id} = params;
    const res = await fetch("http://localhost:4000/carrers/"+id)
    
    if(!res.ok){
      throw Error("fetch error")
    }
    return res.json();
  }