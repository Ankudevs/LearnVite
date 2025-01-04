
import {Outlet,Link} from "react-router-dom"

function CarrerLayout(){
  return(
    
      <div className="p-4">
      <section>
       <h2 className="text-4xl font-bold mb-4">Carrers Page</h2>
      </section>
        <Outlet/>
      </div>
    )
}export default CarrerLayout