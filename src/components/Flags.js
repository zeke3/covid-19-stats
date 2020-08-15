import React from 'react';
import Flag from 'react-world-flags';

const Flags = (props) => {
    return(
        <div className="flag">
            <Flag code={props.countryCode} height="200" width="500" />
        </div>    
    );
}

export default Flags;