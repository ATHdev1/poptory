import { useState, useMemo } from 'react';
import './RegionRankPanel.css'

import popups from '../../data/popups';
import PopupCardVertical from '../PopupCardVertical/PopupCardVertical';

function RegionRankPanel() {
    const [selectedRegion, setSelectedRegion] = useState('강남');

    const selectedRegionPopups = useMemo(() => {
        return popups.filter(popup => popup.지역 === selectedRegion);
    }, [popups, selectedRegion]);


    return (
        <div>
            <div className='RegionRankPanel-title'>
                <h3>지역별 랭킹</h3>
            </div>

            <div className='RegionRankPanel-container'>
                <div className='RegionButtons-slide-container'>
                    <div className='RegionButtons-slide-wrapper' onClick={function (e) {
                        if (e.target.tagName == 'P') {
                            setSelectedRegion(e.target.textContent);
                        }
                    }}>
                        <div className='RegionButton'>
                            <p>강남</p>
                        </div>
                        <div className='RegionButton'>
                            <p>강서</p>
                        </div>
                    </div>
                </div>

                <div className='storeCards-slide-container'>
                    <div className='storeCards-slide-wrapper'>
                        <div className='storeCards-slide'>
                            {selectedRegionPopups.map(function(popup){
                                return(
                                    <PopupCardVertical popup={popup} key={popup.id}></PopupCardVertical>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className='see_all_RegionRank-button-container'>
                    <div className='see_all_RegionRank-button'>
                        <h5 style={{ textAlign: 'center' }}>전체 랭킹 보기</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegionRankPanel;