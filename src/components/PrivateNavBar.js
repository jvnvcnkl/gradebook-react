import { Link } from "react-router-dom"

export default function NavBar() {
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
                    <Link to='/logout'>Logout</Link>
                </li>

            </ul>
        </nav>
    )
}