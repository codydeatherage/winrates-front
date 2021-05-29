const ChampionsStats = ({name}) =>{


    return(
        <div className="info">
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${name}.png`} alt=""></img>
        {name}</div>
    )
}

export default ChampionsStats;