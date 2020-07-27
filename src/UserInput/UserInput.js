import React from 'react';

const userinput = (props) => {
    return(
    <div>
        <input type="text" onChange={props.click} value={props.name}/>
    </div>
)}

export default userinput;