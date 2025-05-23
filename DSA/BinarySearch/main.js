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

let test = new tree([34, 7, 23, 7, 90, 45, 12, 90, 18, 61, 34, 5]);
console.log(test);
prettyPrint(test.root);

console.log("Inserting 20 into the tree:");
test.insert(20);
prettyPrint(test.root);

console.log("Removing 7:");
test.deleteItem(7);
prettyPrint(test.root);
