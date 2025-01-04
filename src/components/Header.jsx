import {useState} from "react"
import {NavLink,Link} from "react-router-dom"
import {useMediaQuery} from "react-responsive"

function Header(){
  const[isOpen, setIsOpen] = useState(false)
  
  const menus = ["Home","About","Contact","Blog","Carrers"]
  
  const isMobile = useMediaQuery({query:'(max-width:768px)'})
  return(
    <section className="">
      <header className="bg-gray-700 text-white shadow-lg ">
      <div className="max-h-4xl mx-auto flex justify-between items-center place-content-center h-20 py-3 px-4 relative">
       <h1 className="text-4xl text-gray-100 font-bold cursor-pointer hover:text-blue-400 "><Link to="/" onClick={()=>setIsOpen(false)}>ViteApp</Link></h1>

       <nav className="">

       {isMobile ? (<div>
       <div>
        {!isOpen ? (<div onClick={()=>setIsOpen(!isOpen)}
          
          className="absolute top-6 right-6 text-white text-2xl font-semibold cursor-pointer">&#9776;
        </div>):
       (<div>
       
       <div onClick={()=>setIsOpen(!isOpen)} className={`fixed top-6 right-6 text-4xl text-gray-700 font-semibold cursor-pointer z-20
       
       `}
       style={{transition:"transform all 0.5s ease",outline:"none"}}
       
       >&times;
        </div>
        
        {/*mobile menu items here*/}
        <div className=" flex flex-col justify-center items-center  text-3xl w-full h-screen fixed top-0 left-0  bg-gray-200 text-gray-700 font-semibold pt-10 pb-10  overscroll-none tranform transition-transform backdrop-blur-sm"
         >{
        menus.map((menu,index)=>(<NavLink
        className="w-full py-2 text-center place-content-center hover:bg-blue-400 hover:text-white cursor-pointer" onClick={()=>setIsOpen(!isOpen)} key={index} to={index>0 && menu.toLowerCase()}>{menu}</NavLink>))
       }
        
        </div>
        </div>)}
        
      </div>
      
       </div>):(<div className="flex text-2xl text-gray-100 font-semibold gap-3">{
        menus.map((menu,index)=>(<NavLink className="hover:text-white" key={index} to={index>0 && menu.toLowerCase()}>{menu}</NavLink>))
       }</div>)}
       </nav>
       </div>
      </header>
    </section>)
}export default Header