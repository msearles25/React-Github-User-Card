import React from 'react';

import Card from './Card';
import Followers from './Followers';

const CardGrid = props => {
    // console.log(props)
    return (
        <div>
            <Card user={props.user} />
            {props.followers.map(follower => (
                <Followers key={follower.node_id} img={follower.avatar_url} page={follower.html_url}/>
            ))}
        </div>
    )
}

export default CardGrid;