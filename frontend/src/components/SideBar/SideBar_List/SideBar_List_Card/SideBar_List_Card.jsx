import './SideBar_List_Card.css'
import { useNavigate } from "react-router-dom";

function SideBar_List_Card({ name, address, setShowSideBar }) {
    const navigate = useNavigate();

    return (
        <div className='SideBar_List_Card-wrapper' onClick={() => { navigate(`${address}`); setShowSideBar(false); }}>
            <div className='SideBar_ListCard-content-wrapper'>
                <p>{name}</p>
            </div>
        </ div>
    )
}

export default SideBar_List_Card;