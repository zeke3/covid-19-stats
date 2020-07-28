import React from 'react';
import Flag from 'react-world-flags';

const Flags = (props) => {
    return(
        <div className="flag">
            <Flag code={props.countryCode} height="100" />
        </div>    
    );
}

export default Flags;