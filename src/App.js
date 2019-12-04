import React from 'react';
import './App.css';
import gitLogo from './images/githublogo.png'
import lambdaLogo from './images/lambdalogo.png'

import CardGrid from './components/CardGrid';

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/msearles25')
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
      .catch(err => console.log('Error Occured:', err))

    fetch('https://api.github.com/users/msearles25/followers')
      .then(res => res.json())
      .then(res => this.setState({ followers: res }))
      // .then(res => console.log(res))
      // .then(res => res.map((user, followers) => 
      //   this.setState({
      //     followers:  [...this.state.followers, user.login]
      //   })))
      .catch(err => console.log('Followers Error: ', err))
  }
  render() {
    return (
      <div className='App container'>
        <div className='header'>
          <img src={gitLogo} />
          <img src={lambdaLogo} />
        </div>
        <CardGrid user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
