import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DeleteItem from '../src/components/deleteItem';

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
        cover: ''
      }
      
    }

    this.deleteBook = this.deleteBook.bind(this);
  }
  // displaying read list collection of books 
  componentDidMount() {
    axios.get("/api/books").then(res => {
        this.setState({
          books: res.data
        });
    }).catch (err => console.log(err));
  }

  addBook = ()=> {
    let newBook= this.state.obj
    axios.post("/api/booksadded", newBook).then(res => {
      this.setState({
        books: res.data
      });
    }).catch(err => console.log(err));
  }

  deleteBook(id) {
    axios.delete(`/api/booksdelete/${id}`).then(res => {
      this.setState({
        books: res.data
      });
    }).catch(err => console.log(err));
  }

  titleHandler= (val) => {
    this.setState({
      obj: val
    });
  }

  authorHandler= (val) => {
    this.setState({
      obj: val
    });
  }

  render() {

    let displayBooks = this.state.books.map((e,i) => {
      console.log(e.id)
      return (
        <ul key={i}>
          <li>{e.title}</li>
          <li>- {e.author}</li>
          <img src ={e.cover}/>
        <DeleteItem delete={ this.deleteBook } bookId={e.id}/>
        </ul>)
    });

    return (
      <div className="App">
        <input  placeholder="Title" 
                onChange={event => this.titleHandler(event.target.value)}></input>
        <input  placeholder="Author" 
                onChange={event => this.authorHandler(event.target.value)}></input>
        <button onClick={this.addBook}> Add Book </button>
        {displayBooks}
      </div>
    );
  }
}

export default App;
