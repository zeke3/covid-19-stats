import React from 'react';


const ConfirmedStats = (props) => {
    // console.log(props)

    return(
        <div className="stats-card-confirmed" >
            <h1 className="stat-confirmed">Confirmed</h1>
            <h1 className="stat-digits">{props.confirmed}</h1>
        </div>
    );
}

export default ConfirmedStats;