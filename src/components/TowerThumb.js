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

class TowerThumb extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const towerCards = this.props.towers.map((tower, index) => {
      return (
        <Col md="3">
          <Card key={index}>
            <CardImg className="image-cropper" top width="100%" src={tower.image_url}/>
            <CardBlock>
              <CardTitle>{tower.name}</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBlock>
          </Card>
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
