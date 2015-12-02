var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function getInitialState () {
    return {
      menuOpen: false
    };
  },
  handleMenuClick: function handleMenuClick () {
    this.setState({ menuOpen: !this.state.menuOpen });
  },
  render: function render () {
    var menuOpen = this.state.menuOpen;

    // can't use <use> in react :'(
    var useTagWorkaround = {
      __html: '<title>' + (menuOpen ? 'Menu Close' : 'Menu Open') + '</title>' + 
              '<use xlink:href="images/header.svg#' + (menuOpen ? 'close' : 'hamburger') + '"></use>'
    };

    return (
      <header>
        <h1>
          <Link to="/">Ken's Web Portfolio</Link>
        </h1>

        <nav className={ (menuOpen ? 'state-open' : '') }>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={ this.handleMenuClick }>
          <svg className="menu-icon" viewBox="0 0 48 48" dangerouslySetInnerHTML={ useTagWorkaround }>
          </svg>
        </button>
      </header>
    );
  },
});
