import React from "react";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *Book* COMPONENT
export default function DeleteItem( props ) {
    return (
        <button onClick= { e => props.delete( props.bookId )}> Delete </button>
    )
}