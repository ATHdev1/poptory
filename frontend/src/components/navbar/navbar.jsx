import { useState } from 'react';
import './navbar.css';
import { FaList } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';

function Navbar() {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <nav className='navbar'>
            <Link to="/" style={{ fontFamily: 'Jua', textDecoration: 'none', color: 'inherit' }}>
                Poptory
            </Link>
            <FaList onClick={function () { setShowSideBar(!showSideBar) }}></FaList>

            <div className={`sideBar-backdrop ${showSideBar?'show':''}`}></div>
            <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar}></SideBar>
        </nav>
    )
}

export default Navbar;