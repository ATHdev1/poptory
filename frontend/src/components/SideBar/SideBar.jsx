import "./SideBar.css"
import SideBar_ProfileCard from "../SideBar_ProfileCard/SideBar_ProfileCard";

function SideBar({showSideBar, setShowSideBar}){
    return(
        <div className={`sideBar-wrapper ${showSideBar?'open':''}`}>
            <div className={"sideBar-closeBtn-container"}>
                <button className={"sideBar-closeBtn"} onClick={()=>{setShowSideBar(false)}}>
                    <h3>close</h3>
                </button>
            </div>
            <SideBar_ProfileCard></SideBar_ProfileCard>
        </div>
    )
}

export default SideBar;