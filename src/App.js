import React from 'react';
import './App.css';

import CardGrid from './components/CardGrid';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/msearles25')
      .then(res => res.json())
      .then(res => this.setState({user: res}))
  }

  render() {
    return (
      <div className='App'>
        <CardGrid user={this.state.user}/>
      </div>
    );
  }
}

export default App;
