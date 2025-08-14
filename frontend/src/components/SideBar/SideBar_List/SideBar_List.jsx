import './SideBar_List.css';
import SideBar_List_Card from './SideBar_List_Card/SideBar_List_Card';
import SideBar_List_Contents from '../../../data/SideBar_List_Contents';

function SideBar_List({ setShowSideBar }) {


    return (
        <div className='sideBar_list-wrapper'>
            {SideBar_List_Contents.map(({id, name, address}) => {
                return (<SideBar_List_Card key={id} name={name} address={address} setShowSideBar={setShowSideBar}></SideBar_List_Card>)
            })}
        </div>
    )
}

export default SideBar_List