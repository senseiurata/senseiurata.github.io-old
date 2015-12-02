var React = require('react');
var PageTemplate = require('./page_template');

module.exports = React.createClass({
  componentDidMount: function componentDidMount () {
    var canvas = document.getElementsByTagName("canvas")[0];

    //TODO: globals :(
    var context = window.context = canvas.getContext("2d");
    var game = window.game = new Asteroids.Game(context);

    game.bindKeyHandlers();
    game.addAsteroids(20);
    game.addAsteroids2(10);
    game.start();
  },
  render: function render () {
    return (
      <PageTemplate
        cssClass="asteroids"
        pageName="Asteroids"
        nextLink="/portfolio"
        nextText="Back to Portfolio"
      >
        <p>Directional arrows to move, Space Bar to shoot. Come back for more updates!</p>

        <p className="min-width-message">
          To play, please resize your window to at least 900px on a desktop browser.
        </p>
        <canvas className="asteroids-game" width="740" height="500"></canvas>
      </PageTemplate>
    );
  }
});
