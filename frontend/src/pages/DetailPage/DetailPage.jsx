import { useParams } from 'react-router-dom';
import './DetailPage.css';

import popups from '../../data/popups.jsx';

function DetailPage() {
    const { id } = useParams();
    const [popup] = popups.filter(function (popup) {
        return popup.id == id;
    })
    return (
        <div>
            <div className='DetailPage-popupOverview-container'>
                <div className='DetailPage-popupOverview-wrapper'>
                    <div className='DetailPage-popupOverview-header-wrapper'>
                        <div className='DetailPage-popupOverview-name-wrapper'>
                            <h2>{popup.이름}</h2>
                        </div>
                        <div className='DetailPage-popupOverview-region-wrapper'>
                            <h3 style={{ color: '#777777' }}>{popup.지역}</h3>
                        </div>
                    </div>
                    <div className='DetailPage-popupOverview-contents-container'>
                        <div className='DetailPage-popupOverview-thumbnailImg-wrapper'>
                            <div className='DetailPage-popupOverview-thumbnailImg'></div>
                        </div>
                        <div className='DetailPage-popupOverview-text-container'>
                            <div className='DetailPage-popupOverview-text-address-wrapper'>
                                <h4 style={{ margin: '0' }}>주소</h4>
                                <p style={{ margin: '0' }}>{popup.장소}</p>
                            </div>
                            <div className='DetailPage-popupOverview-text-period-wrapper'>
                                <h4 style={{ margin: '0' }}>일정</h4>
                                <p style={{ margin: '0' }}>{popup.일정}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;