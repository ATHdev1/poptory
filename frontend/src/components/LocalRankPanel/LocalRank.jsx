import './LocalRankPanel.css';

function LocalRankPanel() {
    return (
        <div>
            <div className='LocalRankPanel-title'>
                <h3>지역별 랭킹</h3>
            </div>

            <div className='RegionRankPanel-container'>
                <div className='RegionButtons-slide-container'>
                    <div className='RegionButtons-slide-wrapper'>
                        <div className='RegionButtons-slide'>
                            강남 성수... 지역 선택 버튼들 올 자리
                        </div>
                    </div>
                </div>

                <div className='storeCards-slide-container'>
                    <div className='storeCards-slide-wrapper'>
                        <div className='storeCards-slide'>
                            <div style={{ width: '150px', height: '280px' , backgroundColor: 'pink'}}>팝업스토어 인포 카드 이미지 날짜 등등</div>
                        </div>
                    </div>
                </div>

                <div className='see_all_RegionRank-button-container'>
                    <div className='see_all_RegionRank-button'>
                        <h5 style={{textAlign:'center'}}>전체 랭킹 보기</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LocalRankPanel;