import './Home.css';
import MainBanner from '../../components/mainBanner/MainBanner.jsx';
import RegionRankPanel from '../../components/RegionRankPanel/RegionRankPanel.jsx';

function Home() {
    return (
        <>
            <MainBanner></MainBanner>
            <div style={{ width: '100%', height: '10px', marginTop: '30px', backgroundColor: '#eeeeee' }}></div>
            <RegionRankPanel></RegionRankPanel>
        </>
    )
}

export default Home;