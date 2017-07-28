import React, { Component } from 'react';

import SplashPage from './SplashPage';
import TowerList from './TowerList';

class App extends Component {


  render() {
    return (
      <div>
        <SplashPage />
        <TowerList />
      </div>
    );
  }
}

export default App;
