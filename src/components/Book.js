import React, { Component } from 'react';
import DeleteItem from './deleteItem';
import ReadCheck from './readCheck';
import axios from 'axios';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT
export default class Book extends Component{
    constructor( props ){
        super( props );
        
        this.state = {
            read: this.props.readBook
        }

        this.deleteBook = this.deleteBook.bind( this );
        this.updateBookRead = this.updateBookRead.bind( this );
    }
    // Props passing on component render test
    // componentDidMount(){
    //     console.log('props',this.props)
    // }
    // updateaxios test
    updateBookRead( id ) {
        axios.put( `/api/booksedit/${id}` ).then( res => {
            this.props.readBook( res.data )
            // console.log( '-----', res.data )
        }).catch( err => console.log( err ) );
    }

    deleteBook( id ) {
        axios.delete( `/api/booksdelete/${id}` ).then( res => {
            this.props.updateBooks( res.data )
        }).catch( err => console.log( err ) );
      }

    displayBook() {
        if( this.props.val ){
       return(  <ul key={ this.props.index }>
                    <li>{ this.props.val.title }</li>
                    <li>- { this.props.val.author }</li>
                    <img className="bookImg" src ={ this.props.val.cover } alt="Book Cover"/>
                    <li className="pages">{ this.props.val.pageCount }</li>
                    <br />
                    <ReadCheck update={ this.updateBookRead } readBookId={ this.props.val.id } bookBoolean={ this.props.val.read }/> {/*input checkbox placement*/}
                    <br />
                    <DeleteItem delete={ this.deleteBook } bookId={ this.props.val.id }/>
                </ul>)
        }
    }
    render(){
    return(
       
        <div className="displayBook">
            { this.displayBook() }
        </div>
        
        
    );
}
}