import React from 'react';
// import './userinput.css'

const userinput = (props) => {
    const style = {
    backgroundColor: 'pink',
      font: 'inherit',
      border: '5px solid black',
      padding: '20px auto'
    }
    return(
    <div className="input">
        <input style={style} type="text" onChange={props.click} value={props.username}/>
    </div>
)};

export default userinput;