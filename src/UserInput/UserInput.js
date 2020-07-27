import React from 'react';
// import './userinput.css'

const userinput = (props) => {
    return(
    <div className="input">
        <input type="text" onChange={props.click} value={props.username}/>
    </div>
)};

export default userinput;