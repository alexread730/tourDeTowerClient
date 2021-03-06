import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import TowerDetail from './components/TowerDetail';

import registerServiceWorker from './registerServiceWorker';

const AppRoute = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/towers/:id" component={TowerDetail} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<AppRoute/>, document.getElementById('root'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));

registerServiceWorker();
