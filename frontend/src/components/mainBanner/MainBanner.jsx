import './MainBanner.css';
import categoryIcons from './CategoryIcons';
import { useNavigate } from 'react-router-dom';

function MainBanner() {
    const navigate = useNavigate();

    return (
        <div className='MainBanner-wrapper'>
            <div className='MainBanner-subwrapper'>
                <div className='carousel-wrapper'>
                    <div className='carousel-display'></div>
                </div>

                <div className='category-map'>
                    {categoryIcons.map(function(item, i) {
                        let Icon = item.icon;
                        return (
                            <div key={i} onClick={()=> window.location.href = item.path}>
                                <Icon size={25}></Icon>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainBanner;