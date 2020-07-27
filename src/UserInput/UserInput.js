import React from 'react';

const userinput = (props) => {
    return(
    <div className="Input">
        <input type="text" onChange={props.click} value={props.username}/>
    </div>
)};

export default userinput;