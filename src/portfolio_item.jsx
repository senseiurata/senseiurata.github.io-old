var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function render () {
    //TODO: Fix external url
    return (
      <article className="rc-portfolio-item">
        {
          this.props.externalUrl ? (
            <a className="visual-link" href={ this.props.externalUrl } target="_blank">
              <img className="screenshot" src={ this.props.imgUrl } />
            </a>
          ) : (
            <Link className="visual-link" to={ this.props.url }>
              <img className="screenshot" src={ this.props.imgUrl } />
            </Link>
          )
        }

        <h1 className="name">
          {
            this.props.externalUrl ? (
              <a href={ this.props.externalUrl }>{ this.props.name }</a>
            ) : (
              <Link to={ this.props.url }>{ this.props.name }</Link>
            )
          }
        </h1>

        <p className="description">{ this.props.description }</p>
      </article>
    );
  }
});