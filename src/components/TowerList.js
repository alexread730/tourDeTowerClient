import React, {Component} from 'react';

import TowerThumb from './TowerThumb';

class TowerList extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <TowerThumb />
      </div>
    );
  }
}

export default TowerList;
