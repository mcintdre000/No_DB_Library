import React, { Component } from 'react';
import DeleteItem from './deleteItem';
import ReadCheck from './readCheck';
import axios from 'axios';


export default class Book extends Component{
    constructor(){
        super();
    
        this.deleteBook = this.deleteBook.bind( this );
    }
    // Props passing on component render test
    // conponentDidMount(){
    //     console.log('props',this.props)
    // }
    // updateaxios test
    // updateBookRead() {
    //     axios.put( `/api/booksedit/${id}`, ).then ()
    // }

    deleteBook(id) {
        axios.delete( `/api/booksdelete/${id}` ).then( res => {
            this.props.updateBooks( res.data )
        }).catch( err => console.log( err ) );
      }

    displayBook() {
        if( this.props.val ){
       return(  <ul key={ this.props.index }>
                    <li>{ this.props.val.title }</li>
                    <li>- { this.props.val.author }</li>
                    <img src ={ this.props.val.cover }/>
                    {/* <br /> */}
                    {/* <ReadCheck update={ this. }/> */} {/*input checkbox placement*/}
                    <br />
                    <DeleteItem delete={ this.deleteBook } bookId={ this.props.val.id }/>
                </ul>)
        }
    }
    render(){
    return(
       
        <div>
            { this.displayBook() }
        </div>
        
        
    );
}
}