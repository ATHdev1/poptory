import './navbar.css';
import { FaList } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className='navbar'>
            <Link to="/" style={{ fontFamily: 'Jua', textDecoration: 'none', color: 'inherit' }}>
                Poptory
            </Link>
            <FaList></FaList>
        </nav>
    )
}

export default Navbar;