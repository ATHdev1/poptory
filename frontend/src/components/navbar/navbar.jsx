import './navbar.css';
import { FaList } from "react-icons/fa6";

function Navbar(){
    return(
        <nav className='navbar'>
            <div style={{fontFamily: 'Jua'}}>PopTory</div>
            <FaList></FaList>
        </nav>
    )
}

export default Navbar;