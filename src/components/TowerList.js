import React, {Component} from 'react';
import { Container } from 'reactstrap';

import TowerThumb from './TowerThumb';

class TowerList extends Component {
  render() {
    console.log(this.props.towers);
    return (
      <Container>
        <TowerThumb towers={this.props.towers}/>
      </Container>
    );
  }
}

export default TowerList;
