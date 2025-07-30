import './MainBanner.css';
import CategoryIconGrid from '../CategoryItemGrid/CategoryItemGrid';
import { useNavigate } from 'react-router-dom';

import popups from '../../data/popups.jsx';

function MainBanner() {
    const navigate = useNavigate();
    let 테스팅용으로케러셀에넣을팝업=popups[0];

    return (
        <div className='MainBanner-wrapper'>
            <div className='MainBanner-subwrapper'>
                <div className='carousel-wrapper'>
                    <div className='carousel-display' onClick={()=>window.location.href=`/stores/${테스팅용으로케러셀에넣을팝업.id}`} style={{backgroundImage:`url(${테스팅용으로케러셀에넣을팝업.썸네일})`}}>
                        {/* 일단 캐러셀 말고 이미지 한 장만 넣겠음 */}
                    </div>
                </div>

                <div>
                    <CategoryIconGrid></CategoryIconGrid>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;