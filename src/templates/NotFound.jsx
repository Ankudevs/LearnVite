
import {Link} from "react-router-dom"


function NotFound(){
  return(
    <div className="p-5">
      <div className="text-5xl font-bold text-gray-700 mb-5">Page Not Found
      </div>
      <p>
        Go to <Link to="/" className="underline text-black">Home Page</Link>
      </p>
    </div>)
}export default NotFound