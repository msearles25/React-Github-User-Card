import React from 'react';

const Card = ({user}) => {
    return (
        <div className='card'>
            <img src={user.avatar_url} />
            <div className='card-info'>
                <h3 className='name'>{user.name}</h3>
                <p className='username'>{user.login}</p>
                <p>Location: {user.location}</p>
                <p>Profile: 
                    <a href={user.html_url}> this</a>
                </p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Bio: {user.bio}</p>
                {/* <p>Followers: {followers}</p> */}
            </div>
        </div>
    )
}

export default Card;