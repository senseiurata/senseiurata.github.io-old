var React = require('react');

module.exports = React.createClass({
  render: function render () {
    return (
      <footer>
        <ul className="social-links">
          <li>
            <a href="https://github.com/senseiurata">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ken-urata-8011a81b">LinkedIn</a>
          </li>
        </ul>
      </footer>
    );
  },
});
