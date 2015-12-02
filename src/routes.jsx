var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./main');
var Home = require('./home');
var Profile = require('./profile');
var Portfolio = require('./portfolio');
var Contact = require('./contact');
var Asteroids = require('./asteroids');

module.exports = (
  <Router>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home } />
      <Route path="profile" component={ Profile } />
      <Route path="portfolio" component={ Portfolio } />
      <Route path="portfolio/asteroids" component={ Asteroids } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
);
