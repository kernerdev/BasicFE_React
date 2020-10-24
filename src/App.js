import React from 'react';
import './App.css';
const axios = require('axios').default;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {message: ''}
  }

  getData(e) {
    e.preventDefault();
    axios
        .get('http://127.0.0.1:1234/hello')
        .then(response => (this.setState({message: response.data.message})))
        .catch(error => this.setState({message: error}))
  }

  render(){
    return(
    <span>
      <button onClick={this.getData}>getData</button>
      <p id="message">{this.state.message}</p>
    </span>
    )
  };
}

export default App;
