import React from 'react';
import "./Leaderboard.css";



function Leaderboard() {
  return (

    <div className='leaderboard__container'>

        <h2>Top Performers</h2>
        <p>See all</p>
        
        

        <div className='leaderboard'>
            <h4>#</h4>
            <h4>Name</h4>
            <h4>This Week</h4>
            <h4>Overall P/L</h4>
            <h4>Members</h4>
        </div>

  </div>
  );
}

export default Leaderboard;
