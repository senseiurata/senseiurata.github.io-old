function TreeNode (val) {
  this.val = val;
  this.children = [];
};

TreeNode.prototype.addChild = function (childNode) {
  this.children.push(childNode);
}

function Tree (root) {
  this.root = root;
};

module.exports.TreeNode = TreeNode;
module.exports.Tree = Tree;