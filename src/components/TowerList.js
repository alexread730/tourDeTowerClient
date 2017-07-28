import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import TowerThumb from './TowerThumb';

class TowerList extends Component {
  constructor(props) {
    super(props);

  }

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
