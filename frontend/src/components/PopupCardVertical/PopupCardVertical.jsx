import './PopupCardVertical.css';

function PopupCardVertical({ popup }) {
    return (
        <div className='PopupCardVertical'>
            <div className='PopupCardVertical-thumbnailImage-wrapper'>
                <div className='PopupCardVertical-thumbnailImage' onClick={() => window.location.href = `/stores/${popup.id}`} style={{ backgroundImage: `url(${popup.썸네일})` }}></div>
            </div>

            <div className='PopupCardVertical-text-container'>
                <div className='PopupCardVertical-name-wrapper'>
                    <p>{popup.이름}</p>
                </div>
            </div>
        </div>
    )
}

export default PopupCardVertical;