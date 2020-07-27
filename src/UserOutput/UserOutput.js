import React from 'react';

const useroutput = (props) => {
    return(
    <div className='Output'>
        <p>What's my name? It's {props.username}</p>
        <p>Oh age, it's {props.age}</p>
    </div>
    ) 
}

export default useroutput;