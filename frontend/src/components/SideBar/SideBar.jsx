import "./SideBar.css"
import SideBar_ProfileCard from "./SideBar_ProfileCard/IsNotLogIn/SideBar_ProfileCard";
import SideBar_List from "./SideBar_List/SideBar_List";

function SideBar({ showSideBar, setShowSideBar }) {
    return (
        <div className={`sideBar-wrapper ${showSideBar ? 'open' : ''}`}>
            <div className={"sideBar-closeBtn-container"}>
                <button className={"sideBar-closeBtn"} onClick={() => { setShowSideBar(false) }}>
                    <h3>close</h3>
                </button>
            </div>
            <div className="sideBar_profileCard_wrapper">
                <SideBar_ProfileCard></SideBar_ProfileCard>
            </div>
            <SideBar_List setShowSideBar={setShowSideBar}></SideBar_List>
        </div>
    )
}

export default SideBar;