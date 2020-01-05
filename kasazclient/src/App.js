import React, { Component } from 'react';
import Header from './Header';
import './App.css';


class App extends Component {
  state = {
    flats : [
    ]
  }

  componentDidMount(){
    fetch('/api/flats').then(res=>res.json()).then(flats => this.setState({flats}));
  }
  
  componentDidUpdate(){
    fetch('/api/flats').then(res=>res.json()).then(flats => this.setState({flats}));
  }

  render(){
    return (
      <div>
        <Header flats={this.state.flats}/>
      </div>
    );
  }

}

export default App;
