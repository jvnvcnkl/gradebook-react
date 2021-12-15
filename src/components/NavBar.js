import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/activeUser/selectors";

export default function NavBar() {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    return (
        <nav>
            <ul>
           <li>
            <Link to='/login'>Login </Link>
           </li>
            <li>
            <Link to='/register'>Register </Link>
            </li>
            <li>
            <Link to='/'>Home </Link>
            </li>
            <li>
            <Link to='/teachers'>Teachers </Link>
            </li>
            <li>    
            <Link to='/my-gradebook'>My Gradebook </Link>
            </li>   
            <li>
            <Link to='/gradebooks/create'>Add Gradebook </Link>
            </li>

            </ul>
        </nav>
    )
}