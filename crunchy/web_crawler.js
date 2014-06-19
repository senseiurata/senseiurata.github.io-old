(function (root) {
  var http = require('http');
  var tree = require('./tree');
  var evaluator = require('./evaluator');

  var WebCrawler = root.WebCrawler = (root.WebCrawler || {});


  var source_exp = 'abs(add(add(add(97,subtract(241,64256)),44),multiply(171,abs(multiply(-1,29108)))))';


  var Crawler = WebCrawler.Crawler = function () {

  };

  Crawler.prototype.buildBfsTree = function () {
    var root = new tree.TreeNode(evaluator.evaluate(source_exp));
    var queue = [];

    this.bfsHelper(root, queue);

    return root;
  };

  Crawler.prototype.bfsHelper = function (parent, queue) {
    var that = this;

    http.get("http://www.crunchyroll.com/tech-challenge/roaming-math/kensurata@gmail.com/4913594", function(res) {
      console.log("Status: " + res.statusCode);
      
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        exps = chunk.split("\n");

        exps.forEach(function (exp) {
          console.log(exp);

          var result = evaluator.evaluate(exp)

          parent.addChild(result)
          queue.push(result);

          console.log(parent);
        });
      });
    }).on('error', function(e) {
      console.log("Error: " + e.message);
    });
  };

  Crawler.prototype.buildDfsTree = function (root) {
    
  };

  Crawler.prototype.loadAndBuild = function (buildTree) {
    http.get("http://www.crunchyroll.com/tech-challenge/roaming-math/kensurata@gmail.com/4913594", function(res) {
      console.log("Status: " + res.statusCode);
      
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        exps = chunk.split("\n");

        buildTree.call(that, exps);
      });
    }).on('error', function(e) {
      console.log("Error: " + e.message);
    });
  }

})(this);

var crawler = new this.WebCrawler.Crawler();

var rootBfsTree = crawler.buildBfsTree();
