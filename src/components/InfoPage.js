import { useLocation } from 'react-router-dom'

const InfoPage = () =>{
    const location = useLocation();
    console.log(location.pathname);
    const champion = location.pathname.slice(1);
    console.log('champion:', champion);
    return(
        <div>
            <div className="splash-art-banner">
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`} alt=""></img>
            </div>
        </div>
    )
}

export default InfoPage;