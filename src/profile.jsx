var React = require('react');
var PageTemplate = require('./page_template');

module.exports = React.createClass({
  render: function render () {
    return (
      <PageTemplate pageName="Profile" nextLink="/portfolio" nextText="See My Portfolio">
        <div className="profile">
          <img className="profile-pic" src="images/profile-1.jpg" alt="" />
          <div>
            <h1>Ken Urata</h1>
            <h2>Javascript Developer</h2>
            <p>
              It all started when I was 6 - I started dabbling around in QBASIC.
              My idea of having "fun" was to create the most confusing run of GOTOs.
              Yes, I was definitely a bad kid, but thankfully my skills and best practices
              matured over time.
            </p>
            <p>
              Since then, I've studied plenty of languages including C/C++, Java, PHP, etc,
              and eventually found the most joy in front-end web development with
              JavaScript.
            </p>
            <p>
              Take a look at the projects I have worked on, and get in touch if you like
              what you see!
            </p>
            <aside>
              <a href="resume.pdf">Download Ken's Resume (PDF)</a>
            </aside>
          </div>
        </div>
      </PageTemplate>
    );
  }
});
