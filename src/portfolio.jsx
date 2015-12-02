var React = require('react');
var PortfolioItem = require('./portfolio_item');
var PageTemplate = require('./page_template');

var data = [
  { 
    name: "hotdealio!",
    description: "Deal aggregation web app with Reddit style voting and simple/clean UI",
    externalUrl: "http://www.hotdeal.io/",
    imgUrl: "images/portfolio/hotdealio.png",
  },
  { 
    name: "Asteroids",
    description: "Browser version of the classic 1979 arcade space shooter by Atari",
    url: "/portfolio/asteroids",
    imgUrl: "images/portfolio/asteroids.png",
  }
];

module.exports = React.createClass({
  render: function render () {
    return (
      <PageTemplate pageName="Portfolio" nextLink="/contact" nextText="Contact Me">
        <ul className="portfolio">
          {
            data.map(function (portfolioItem) {
              return (
                <li className="portfolio-item">
                  <PortfolioItem
                    name={ portfolioItem.name }
                    description={ portfolioItem.description }
                    url={ portfolioItem.url }
                    externalUrl={ portfolioItem.externalUrl }
                    imgUrl={ portfolioItem.imgUrl }
                  />
                </li>
              );
            })
          }
        </ul>
      </PageTemplate>
    )
  }
});
