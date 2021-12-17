import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../store/activeUser/slice";

export default function NavBar() {
    const dispatch = useDispatch();

    async function handleLogout() {
        dispatch(logout());
    }
    return (
        <nav>
            <ul>

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
                <li>
                    <button onClick={handleLogout}> Logout</button>
                </li>

            </ul>
        </nav>
    )
}