import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Book from './components/Book';
import Header from './components/header/header';

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
        pageCount: null,
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
    axios.post( "/api/booksadded", newBook ).then( res => {
      this.setState({
        books: res.data
      });
      this.clearInputs();
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

  readBook = ( val ) => {
    this.setState({
      books: val
    });
  }
  

  clearInputs() {
    let obj= { ...this.state.obj }
    obj.title= '';
    obj.author='';
    obj.cover='';
    this.setState({
      obj: obj
    });
  }

  render() {

    let displayBooks = this.state.books.map(( e, i ) => {
      
      return (
        <div key={ i }>
        <Book val={ e } index={ i } updateBooks={ this.updateBooks } readBook={ this.readBook }/>
        </div>
        )
    });

    return (
      <div className="App">
        <Header />
        <div>
            <input  value={ this.state.obj.title } placeholder="Title" 
                    onChange={ event => this.titleHandler( event.target.value )}></input>
            <input  value={ this.state.obj.author } placeholder="Author" 
                    onChange={ event => this.authorHandler( event.target.value )}></input>
            <input  value={ this.state.obj.cover } placeholder="Cover URL"
                    onChange={ event => this.coverHandler( event.target.value )}></input>
            <button className="addBtn"onClick={ this.addBook }> Add Book </button>
          <div className="Books">
            { displayBooks }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
