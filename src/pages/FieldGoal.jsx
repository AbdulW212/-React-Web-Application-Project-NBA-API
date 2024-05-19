import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FieldGoal(props) {
  const { player_name } = useParams();
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/2023/?format=json`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const player = data.results.find(player => player.player_name === player_name);
        if (!player) {
          throw new Error('Player not found');
        }
        setPlayerStats(player);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [player_name]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      {playerStats && ( 
        <div className='stat'>
          <h1>{playerStats.player_name}</h1>
          <h2>Team: {playerStats.team}</h2>
          <h2>Total Rebounds: {playerStats.TRB}</h2>
          <h2>Offensive Rebounds: {playerStats.ORB}</h2>
          <h2>Defensive Rebounds: {playerStats.DRB}</h2>

        </div>
      )}
    </div>
  );
}