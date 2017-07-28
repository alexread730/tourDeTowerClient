import React, {Component} from 'react';

class SplashPage extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <img className="hero-image" src="https://images.pexels.com/photos/149638/pexels-photo-149638.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="splash page image of Eiffel Tower"/>
      </div>
    );
  }
}

export default SplashPage;
