import './PopupCardLarge.css'

function PopupCardLarge({popup}){
    return(
        <div className="PopupCardLarge-mainWrapper">
            <div className="PopupCardLarge-thumbnailImage-wrapper" onClick={() => window.location.href=`/stores/${popup.id}`}>
                <div className="PopupCardLarge-thumbnailImage" style={{ backgroundImage: `url(${popup.썸네일})` }}>
                    {/* 여기가 썸네일 사진 넣는 곳인데, 일단 css로 핑크 네모 넣겠음 */}
                </div>
            </div>
            <div className="PopupCardLarge-text-wrapper">
                <h4 onClick={() => window.location.href=`/stores/${popup.id}`}>{popup.이름}</h4>
                <h5>{popup.장소}</h5>
                <h5 style={{color:'#999999'}}>{popup.일정}</h5>
            </div>
        </div>
    )
}

export default PopupCardLarge;