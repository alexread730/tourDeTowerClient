import React, { Component } from 'react';

import SplashPage from './SplashPage';
import TowerList from './TowerList';

class App extends Component {

<<<<<<< HEAD
=======
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
>>>>>>> 95abbde5df2e522245c616b96807de066a879051

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
