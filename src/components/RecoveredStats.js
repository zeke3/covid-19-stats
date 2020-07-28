import React from 'react';


const RecoveredStats = (props) => {
    console.log(props)
    return(
        <div className="stats-card-recovered">
            <h1 className="stat-recovered">Recovered</h1>
            <h1 className="stat-digits">{props.recovered}</h1>
        </div>
    );
}

export default RecoveredStats;