import React, { Component } from 'react';

import SplashPage from './SplashPage';
import TowerList from './TowerList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      towers: []
    }
  }

  componentDidMount() {
    fetch('https://tourdetowers.herokuapp.com/towers')
    .then(res => res.json())
    .then(res => this.setState({
      towers: res
    }))
  }

  render() {
    return (
      <div>
        <SplashPage />
        <TowerList towers={this.state.towers}/>
      </div>
    );
  }
}

export default App;
