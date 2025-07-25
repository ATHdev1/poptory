import './MainBanner.css';
import categoryIcons from './CategoryIcons';

function MainBanner() {

    return (
        <div className='MainBanner-wrapper'>
            <div className='MainBanner-subwrapper'>
                <div className='carousel-wrapper'>
                    <div className='carousel-display'></div>
                </div>

                <div className='category-map'>
                    {categoryIcons.map(function(Icon, i) {
                        return (
                            <div key={i}>
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