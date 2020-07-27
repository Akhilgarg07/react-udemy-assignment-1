import React from 'react';

const useroutput = (props) => {
    return(
    <div className='Output'>
        <p>What's my name? It's Akhil or people know me {props.username}</p>
        <p>Oh age, it's 21 or to be precise 21.5 lol</p>
    </div>
    ) 
}

export default useroutput;