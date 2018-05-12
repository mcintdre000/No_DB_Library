import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DeleteItem from '../src/components/deleteItem';
import Book from './components/Book';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // selectedBook: '',
      // id: '',
      // addedBooks: [],
      books: [],
      obj: {
        author: '',
        title: '',
        cover: '',
        read: true
      }
      
    }

    
  }
  // displaying read list collection of books on page load
  componentDidMount() {
    axios.get( "/api/books" ).then( res => {
        this.setState({
          books: res.data
        });
    }).catch ( err => console.log( err ));
  }

  addBook = ()=> {
    let newBook= this.state.obj
    axios.post("/api/booksadded", newBook).then( res => {
      this.setState({
        books: res.data
      });
    }).catch( err => console.log( err ));
  }

  titleHandler= ( val ) => {
    let obj = Object.assign({},this.state.obj);
    obj.title = val;
    this.setState({
      obj: obj
    });
  }

  authorHandler= ( val ) => {
    let obj = Object.assign( {}, this.state.obj );
    obj.author = val;
    this.setState({
      obj: obj
    });
  }

  coverHandler= ( val ) => {
    let obj = Object.assign( {}, this.state.obj );
    obj.cover = val;
    this.setState({
      obj: obj
    });
  }

  updateBooks = ( val ) => {
    this.setState({
      books: val
    });
  }

  render() {

    let displayBooks = this.state.books.map(( e, i ) => {
      
      return (
        <div key={ i }>
        <Book val={ e } index={ i } updateBooks={ this.updateBooks }/>
        </div>
        )
    });

    return (
      <div className="App">
        <input  placeholder="Title" 
                onChange={event => this.titleHandler( event.target.value )}></input>
        <input  placeholder="Author" 
                onChange={ event => this.authorHandler( event.target.value )}></input>
        <input placeholder="Cover URL"
               onChange={ event => this.coverHandler( event.target.value )}></input>
        <button onClick={ this.addBook }> Add Book </button>
        { displayBooks }
      </div>
    );
  }
}

export default App;
