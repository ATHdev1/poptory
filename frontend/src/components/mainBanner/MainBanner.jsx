import './MainBanner.css';
import CategoryIconGrid from '../CategoryItemGrid/CategoryItemGrid';
import { useNavigate } from 'react-router-dom';

function MainBanner() {
    const navigate = useNavigate();

    return (
        <div className='MainBanner-wrapper'>
            <div className='MainBanner-subwrapper'>
                <div className='carousel-wrapper'>
                    <div className='carousel-display'></div>
                </div>

                <div>
                    <CategoryIconGrid></CategoryIconGrid>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;