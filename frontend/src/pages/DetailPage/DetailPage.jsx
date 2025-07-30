import { useParams } from 'react-router-dom';
import './DetailPage.css';

import DetailPage_popupOverview from '../../components/DetailPage_popupOverview/DetailPage_popupOverview.jsx';
import popups from '../../data/popups.jsx';
import { useState } from 'react';

function DetailPage() {
    const { id } = useParams();
    const [popup] = popups.filter(function (popup) {
        return popup.id == id;
    })

    let [ showDetail, setShowDetail ] = useState(true)

    return (
        <div>
            <DetailPage_popupOverview popup={popup}></DetailPage_popupOverview>

            <div className='DetailPage-detailInfo-container'>
                <div className='DetailPage-showMore-button-wrapper'>
                    <div className='DetailPage-showMore-button'>
                        <p style={{ fontSize: '18px' }}>상세 정보</p>
                    </div>
                </div>
                <div className='DetailPage-detailInfo-content-container'>
                    {showDetail==true?<div>{popup.상세정보}</div>:null}
                </div>
            </div>

        </div>
    )
}

export default DetailPage;