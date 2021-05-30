import {Link} from 'react-router-dom';

const ChampionsSelectItem = ({name}) =>{


    return(
        <div className="info">
            <Link to={`/${name}`}>
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${name}.png`} alt=""></img>
            </Link>
           
        {name}</div>
    )
}

export default ChampionsSelectItem;