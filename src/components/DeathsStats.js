import React from 'react';


const DeathsStats = (props) => {
    console.log(props)
    return(
        <div className="stats-card-deaths">
            <h1 className="stat-deaths">Deaths</h1>
            <h1 className="stat-digits">{props.deaths}</h1>
        </div>
    );
}

export default DeathsStats;