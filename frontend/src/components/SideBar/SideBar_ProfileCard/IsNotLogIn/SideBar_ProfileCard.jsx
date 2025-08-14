import './SideBar_ProfileCard.css';

function SideBar_ProfileCard() {
    return (
        <div className='sideBar_profileCard-wrapper'>
            <div className='sideBar_profileCard-userInfo-container'>
                <div className='sideBar_profileCard-userImg-wrapper'>
                    <div className='sideBar_profileCard-userImg' style={{ backgroundImage: 'url("/tori.jpg")' }}></div>
                </div>
                <div className='sideBar_profileCard-userInfo-text-container'>
                    <div className='sideBar_profileCard-userInfo-text-wrapper'>
                        <h5>로그인 해주쇼</h5>
                    </div>
                </div>
            </div>
            <div className='sideBar_profileCard-logInStatus-container'>
                <div className='sideBar_profileCard-logInStatus-wrapper'>
                    <div><p>로그인</p></div>
                    <div><p>회원가입</p></div>
                </div>
            </div>
        </div>
    )
}

export default SideBar_ProfileCard;