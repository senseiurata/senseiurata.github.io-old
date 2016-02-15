var React = require('react');
var PageTemplate = require('./page_template');

module.exports = React.createClass({
  render: function render () {
    return (
      <PageTemplate
        cssClass="contact"
        pageName="Contact"
        nextLink="/"
        nextText="Back to Home"
      >
        <div className="contact-info">
          <img className="avatar" src="images/avatar.jpg" />
          <div className="info">
            <p>Ken Urata</p>
            <p>San Francisco - California - (U.S.A)</p>
            <p><i className="icon-phone navy"></i>{"  "}<strong>+1 408 515.2896</strong></p>
            <p><a href="#"><i className="icon-envelope navy"></i>{"  "}kensurata@gmail.com</a></p>
          </div>
        </div>
      </PageTemplate>
    )
  }
});
