import React from "react";

export default function ReadCheck(props) {
    // console.log("-----",props)
    return(
        <div>
        <label >Read:</label>
        <input type="checkBox" onClick={e => props.update(props.readBookId)}></input>
        </div>
        
    )
}