export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  //   Add a new node at the end of the linked list
  append(key, value) {
    let newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
    return this;
  }

  replace(key, value) {
    let i = this.head;

    while (i) {
      if (i.key == key) {
        i.value = value;
        break;
      }

      i = i.next;
    }
  }

  //   returns the value
  getValue(key) {
    let i = this.head;

    while (i) {
      if (i.key === key) {
        return i.value;
      }
      i = i.next;
    }
    return null;
  }

  //   checks if a value is present in the linked list
  contains(key) {
    let i = this.head;
    while (i) {
      if (i.key === key) {
        return true;
      }
      i = i.next;
    }
    return false;
  }

  getKeys() {
    let keys = [];
    let i = this.head;
    while (i) {
      keys.push(i.key);
      i = i.next;
    }

    return keys;
  }

  getValues() {
    let values = [];
    let i = this.head;
    while (i) {
      values.push(i.value);
      i = i.next;
    }

    return values;
  }

  getEntries() {
    let entries = [];
    let i = this.head;
    while (i) {
      entries.push([i.key, i.value]);
      i = i.next;
    }

    return entries;
  }

  //   returns the index of the key
  getIndex(key) {
    let index = 0;
    let i = this.head;

    while (i) {
      if (i.key === key) {
        return index;
      }
      index++;
      i = i.next;
    }
    return null;
  }

  // Removes the key value pair
  remove(index) {
    let counter = 0;
    let i = this.head;
    let prevNode;
    let nextNode;

    if (index === 0) {
      this.head = i.next;
      this.count--;
      return;
    } else {
      while (i) {
        if (counter === index - 1) {
          prevNode = i;
        } else if (counter === index + 1) {
          nextNode = i;
          break;
        }
        i = i.next;
        counter++;
      }

      prevNode.next = nextNode;
      this.count--;
    }
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
