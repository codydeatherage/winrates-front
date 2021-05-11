import './App.css';
import ChampionsStats from './components/ChampionStats'
import axios from 'axios';
import { useEffect, useState } from 'react'

const App = () => {
  const [champList, setChampList] = useState('');

  useEffect(() => {
    if (!champList) {
      getChampData();
    }
  }, []);

  const getChampData = async () => {
    const fetch = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json')
      .then(async (resp) => {
        let champ = await resp.data;
        let allChamps = [];
        for (let ch in champ.data) {
          allChamps.push(ch);
        }
        setChampList(allChamps);
      })
  }

  if (champList) {
    return (
      <div className="App">
        <div className="division-header">
          Challenger
          </div>
        <div className="champions-section">
          {champList.map((name, index) => <ChampionsStats name={name} key={index}></ChampionsStats>)}
        </div>

      </div>
    );
  }
  else {
    return (
      <div className="App">
        <div className="division-header">
          Challenger
        </div>
        <div className="champions-section">
          <div>Loading...</div>
        </div>
      </div>
    );
  }
}

export default App;
