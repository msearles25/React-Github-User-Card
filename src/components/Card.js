import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <img src={props} />
            <div className='card-info'>
                <h3 className='name'>{props}</h3>
                <p className='username'>{props}</p>
                <p>Location: {props}</p>
                <p>Profile:
                    <a href={props}>{props}</a>
                </p>
                <p>Followers: {props}</p>
                <p>Following: {props}</p>
                <p>Bio: {props}</p>
            </div>
        </div>
    )
}

export default Card;