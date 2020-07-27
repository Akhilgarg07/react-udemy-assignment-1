import React from 'react';
import './useroutput.css';

const useroutput = (props) => {
    return(
    <div className='Output'>
        <p className='output1'>What's my name? It's {props.username}</p>
        <p>Oh age, it's {props.age}</p>
    </div>
    ) 
}

export default useroutput;