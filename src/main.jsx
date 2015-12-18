var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({
  render: function render () {
    return (
      <div className="main-container">
        <Header location={ this.props.location } />

        {this.props.children}

        <Footer />
      </div>
    );
  }
});
