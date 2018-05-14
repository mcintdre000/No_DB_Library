import React from "react";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *Book* COMPONENT
export default function ReadCheck(props) {
    // console.log("-----",props)
    return(
        <div>
        <label >Read:</label>
        <input type="checkBox" checked={props.bookBoolean ? false : true} onClick={e => props.update(props.readBookId)}></input>
        </div>
        
    )
}