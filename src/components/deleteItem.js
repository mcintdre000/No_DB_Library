import React from "react";

export default function DeleteItem( props ) {
    return (
        <button onClick= { e => props.delete( props.bookId )}> Delete </button>
    )
}