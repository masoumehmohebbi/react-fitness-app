import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png"

const NavBar = () => {
    return ( 
        <nav className="flex items-center gap-x-10 text-2xl pt-5">
            <Link to="/" className="w-12 h-12 mx-5">
             <img className="object-cover" src={logo} alt="" />
            </Link>
            <Link to="/" className=" border-b-4 border-[#06b6d4]">Home</Link>
            <a href="#exercises">Exercises</a>
        </nav>
     );
}
 
export default NavBar;