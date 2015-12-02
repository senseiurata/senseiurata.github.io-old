var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function render () {
    return (
      <main className={ "page-template " + this.props.cssClass }>
        <section>
          <h1>{ this.props.pageName }</h1>

          { this.props.children }

          <div className="action-item">
            <Link className="next-link" to={ this.props.nextLink }>{ this.props.nextText }</Link>
          </div>
        </section>
      </main>
    );
  }
});