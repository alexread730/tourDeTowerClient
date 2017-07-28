import React, {Component} from 'react';

import {Container, Row, Col, Button} from 'reactstrap';

class TowerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tower: {}
    }

  }

  componentWillMount() {
    fetch(`https://tourdetowers.herokuapp.com${this.props.location.pathname}`)
    .then(res => res.json())
    .then(res => this.setState({
      tower: res
    }))
    .catch(err => console.error(err))
  }

  render() {
    const {tower} = this.state
    return (
      <Container>
        <Row className="tower-detail">
          <Col md="6">
            <img src={tower.image_url} className="large-image-cropper" />
          </Col>
          <Col md="6">
            <div>
              <h2><strong>{tower.name}</strong> <br/>{tower.city}, {tower.country}</h2>
              <h4>Year Complete: {tower.year_complete}</h4>
              <h4>Height: {tower.height_meter} [m] | {tower.height_feet} [ft]</h4>
              <h4>Stories: {tower.stories}</h4>
              <p>{tower.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TowerDetail;
