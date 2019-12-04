import React from 'react';

const Followers = props => {
    return (
        <div className='card'>
            <img src={props.img}/>
            <h3 className='username'>{props.page}</h3>
        </div>
    )
}

export default Followers;