import React, {Component} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from 'reactstrap';

import {Link} from 'react-router-dom';

import TowerDetail from './TowerDetail';

class TowerThumb extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const towerCards = this.props.towers.map((tower, index) => {
      return (
        <Col md="3" key={index}>
          <Link to={`/towers/${tower.id}`}>
            <Card className="tower-card">
              <CardImg className="image-cropper" top width="100%" src={tower.image_url}/>
              <CardBlock className="text-center">
                <CardTitle>{tower.name}</CardTitle>
              </CardBlock>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Row>
        {towerCards}
      </Row>
    );
  }
}

export default TowerThumb;
