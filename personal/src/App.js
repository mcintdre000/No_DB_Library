import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedBook: '',
      id: ''
    }
  }

  // componentDidMount() {
  //   axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback").then(res => {
  //     console.log('Did mount');
  //     this.setState({
  //       bookData: res.data,
  //     })
  //   });
  // }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
