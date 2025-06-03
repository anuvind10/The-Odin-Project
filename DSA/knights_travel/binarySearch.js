import { mergeSort, removeDuplicate } from "./arrayOperations.js";

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class Tree {
  constructor(array) {
    const cleanArry = removeDuplicate(mergeSort(array));
    this.root = this.buildTree(cleanArry);
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const midIndex = Math.floor(array.length / 2);

    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex + 1);

    let treeNode = new Node(
      array[midIndex],
      this.buildTree(leftArray),
      this.buildTree(rightArray)
    );

    return treeNode;
  }

  insert(value) {
    const LEFT = 1;
    const RIGHT = 2;
    let newNode = new Node(value);

    // If it's the first value
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    let nodeDirection;

    while (currentNode) {
      if (value < currentNode.data) {
        nodeDirection = LEFT;
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else break;
      } else if (value > currentNode.data) {
        nodeDirection = RIGHT;
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else break;
      } else if (value === currentNode.data) {
        return;
      }
    }

    if (nodeDirection === LEFT) {
      currentNode.left = newNode;
    } else {
      currentNode.right = newNode;
    }
  }

  deleteItem(value) {
    const LEFT = 1;
    const RIGHT = 2;
    let currentNode = this.root;
    let previousNode;
    let nextNode;
    let nodeDirection;

    if (!currentNode) {
      return;
    }

    while (currentNode) {
      if (currentNode.data === value) {
        // node that does not have a child
        if (currentNode.left === null && currentNode.right === null) {
          if (currentNode == this.root) {
            this.root = null;
            return;
          }
          if (nodeDirection === LEFT) {
            previousNode.left = null;
          } else {
            previousNode.right = null;
          }
          return;
        }
        // Has one child
        else if (currentNode.left === null || currentNode.right === null) {
          const childNode = currentNode.left || currentNode.right;

          if (currentNode == this.root) {
            this.root = childNode;
          } else if (nodeDirection === LEFT) {
            previousNode.left = childNode;
          } else {
            previousNode.right = childNode;
          }
          return;
        }
        // Has both childs
        else {
          let successorParent = currentNode;
          let successor = currentNode.right;
          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }

          currentNode.data = successor.data;
          if (successorParent.left === successor) {
            successorParent.left = successor.right;
          } else {
            successorParent.right = successor.right;
          }

          return;
        }
      } else if (value < currentNode.data) {
        nodeDirection = LEFT;
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else {
        nodeDirection = RIGHT;
        previousNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    if (!this.root) return;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data == value) {
        return currentNode;
      }

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  levelOrder(callback) {
    if (!this.root) return;

    let queue = [this.root];

    if (!callback) {
      throw new Error("Callback Function is required");
    }

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrder(callback) {
    if (!this.root) return;
    if (!callback) {
      throw new Error("Callback Function is required");
    }

    function traverse(node) {
      if (!node) return;

      traverse(node.left);
      callback(node.data);
      traverse(node.right);
    }

    traverse(this.root);
  }

  preOrder(callback) {
    if (!this.root) return;
    if (!callback) {
      throw new Error("Callback Function is required");
    }

    function traverse(node) {
      if (!node) return;

      callback(node.data);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
  }

  postOrder(callback) {
    if (!this.root) return;
    if (!callback) {
      throw new Error("Callback Function is required");
    }

    function traverse(node) {
      if (!node) return;

      traverse(node.left);
      traverse(node.right);
      callback(node.data);
    }

    traverse(this.root);
  }

  height(value) {
    let node = this.find(value);
    if (!node) {
      return null;
    }

    // leaf node
    function getHeight(node) {
      if (!node) return -1;

      const leftHeight = getHeight(node.left);
      const rightheight = getHeight(node.right);

      return 1 + Math.max(leftHeight, rightheight);
    }

    return getHeight(node);
  }

  depth(value) {
    let node = this.find(value);
    if (!node) {
      return null;
    }

    let depth = 0;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data == value) {
        return depth;
      }

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      }
      depth++;
    }
  }

  isBalanced() {
    function checkHeight(node) {
      if (!node) return 0;

      const leftHeight = checkHeight(node.left);
      if (leftHeight === -1) return -1; // left subtree not balanced

      const rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1; // right subtree not balanced

      if (Math.abs(leftHeight - rightHeight) > 1) return -1; // not balanced

      return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(this.root) !== -1;
  }

  rebalance() {
    let sortedArray = [];

    this.inOrder((node) => sortedArray.push(node));
    this.root = this.buildTree(sortedArray);
    return;
  }

  // Finds the least common ancestor between the 2 values
  findLCA(node, value1, value2) {
    if (!node) return null;

    if (value1 < node.data && value2 < node.data) {
      return this.findLCA(node.left, value1, value2);
    } else if (value1 > node.data && value2 > node.data) {
      return this.findLCA(node.right, value1, value2);
    } else return node;
  }

  // finds the depth of the target value from the LCA
  bfsDepth(startNnode, targetValue) {
    let queue = [{ node: startNnode, depth: 0 }];

    while (queue.length > 0) {
      const { node, depth } = queue.shift();

      if (node.data === targetValue) return depth;

      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }

    return -1;
  }

  // Finds the distance between 2 nodes
  findDistanceBetween(value1, value2) {
    const LCA = this.findLCA(this.root, value1, value2);
    if (!LCA) return -1;

    const depth1 = this.bfsDepth(LCA, value1);
    const depth2 = this.bfsDepth(LCA, value2);

    return depth1 + depth2;
  }
}
