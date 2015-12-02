var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function getInitialState () {
    return {
      pageOpen: false
    };
  },
  handleLinkClick: function handleLinkClick () {
    this.setState({ pageOpen: true });
  },
  render: function render () {
    return (
      <li className={ 'page ' + (this.state.pageOpen ? 'state-open' : '') }>
        <Link onClick={ this.handleLinkClick } to={ this.props.route }>{ this.props.pageName }</Link>
      </li>
    );
  }
});