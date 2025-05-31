import { tree } from "./binarySearch.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function randomArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  console.log(array);
  return array;
}

let BinaryTree = new tree(randomArray(15));
prettyPrint(BinaryTree.root);
console.log("Tree is balanced: " + BinaryTree.isBalanced());

let levelOrder = [];
console.log("Level Order: ");
BinaryTree.levelOrder((data) => levelOrder.push(data));
console.log(levelOrder);

let preOrder = [];
console.log("Pre Order: ");
BinaryTree.preOrder((data) => preOrder.push(data));
console.log(preOrder);

let postOrder = [];
console.log("Post Order: ");
BinaryTree.postOrder((data) => postOrder.push(data));
console.log(postOrder);

let inOrder = [];
console.log("In Order: ");
BinaryTree.inOrder((data) => inOrder.push(data));
console.log(inOrder);

console.log("Adding more data to unbalance the tree...");

for (let i = 0; i <= 5; i++) {
  BinaryTree.insert(Math.floor(Math.random() * 100) + 1);
}

console.log("New Tree:");
prettyPrint(BinaryTree.root);

console.log("Tree is balanced: " + BinaryTree.isBalanced());

console.log("Rebalancing...");
BinaryTree.rebalance();
prettyPrint(BinaryTree.root);

console.log("Tree is balanced: " + BinaryTree.isBalanced());

levelOrder = [];
console.log("Level Order: ");
BinaryTree.levelOrder((data) => levelOrder.push(data));
console.log(levelOrder);

preOrder = [];
console.log("Pre Order: ");
BinaryTree.preOrder((data) => preOrder.push(data));
console.log(preOrder);

postOrder = [];
console.log("Post Order: ");
BinaryTree.postOrder((data) => postOrder.push(data));
console.log(postOrder);

inOrder = [];
console.log("In Order: ");
BinaryTree.inOrder((data) => inOrder.push(data));
console.log(inOrder);

let test = new tree([50, 30, 70, 20, 40, 60, 80, 32, 65, 75, 85, 34, 36]);
prettyPrint(test.root);

test.deleteItem(50);
prettyPrint(test.root);
