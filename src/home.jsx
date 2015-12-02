var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function render () {
    return (
      <main className="home-page">
        <div className="content">
          <div className="short-profile">
            <img className="profile-pic" src="images/profile-1.jpg" alt="" />
            <div>
              <p>Hello, I'm Ken.</p>
              <p>I am a front-end web developer.</p>
              <div className="action-items">
                <Link className="to-profile" to="/profile">See My Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
});
