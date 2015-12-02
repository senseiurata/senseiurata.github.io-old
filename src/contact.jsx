var React = require('react');
var PageTemplate = require('./page_template');

module.exports = React.createClass({
  render: function render () {
    return (
      <PageTemplate
        pageName="Contact"
        nextLink="/"
        nextText="Back to Home"
      >
        <div className="contact-info">
          <div className="location">
            <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=it&amp;geocode=&amp;q=sf&amp;ie=UTF8&amp;hq=&amp;hnear=San&nbsp;Francisco,&nbsp;CA&amp;t=m&amp;z=11&amp;ll=37.782112,-122.418648&amp;output=embed"></iframe>
          </div>
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
