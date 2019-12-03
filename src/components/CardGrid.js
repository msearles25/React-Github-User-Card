import React from 'react';

import Card from './Card';

const CardGrid = props => {
    return (
        <div>
            <h1>hello</h1>
            <Card user={props.user}/>
        </div>
    )
}

export default CardGrid;