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

let test = new tree([0, 1, 5, 10, 2, 6, 1, 3, 2, 15]);
let rootNode = test.buildTree([0, 1, 5, 10, 2, 6, 1, 3, 2, 15]);
console.log(rootNode);
prettyPrint(rootNode);
