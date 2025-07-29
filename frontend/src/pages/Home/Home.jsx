import './Home.css';
import MainBanner from '../../components/mainBanner/MainBanner.jsx';
import LocalRankPanel from '../../components/LocalRankPanel/LocalRank.jsx';

function Home(){
    return(
        <>
            <MainBanner></MainBanner>
            <div style={{width:'100%', height:'10px', backgroundColor:'#eeeeee'}}></div>
            <LocalRankPanel></LocalRankPanel>
        </>
    )
}

export default Home;