import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.bucketArray = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  // Generates hash code
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // Set the key and value
  set(key, value) {
    const bucketID = this.hash(key);

    if (!this.bucketArray[bucketID]) {
      this.bucketArray[bucketID] = new LinkedList();
    }

    if (this.bucketArray[bucketID].contains(key)) {
      this.bucketArray[bucketID].replace(key, value);
      return;
    }

    this.bucketArray[bucketID].append(key, value);
    this.count++;

    if (this.isOverLoadFactor()) {
      this.rehash();
    }
  }

  // Get the value
  get(key) {
    const bucketID = this.hash(key);
    this.checkOutOfBounds(bucketID);

    const bucket = this.bucketArray[bucketID];
    return bucket.getValue(key);
  }

  // Checks if the hashmap has the requested key
  has(key) {
    const bucketID = this.hash(key);
    this.checkOutOfBounds(bucketID);

    const bucket = this.bucketArray[bucketID];
    return bucket.contains(key);
  }

  // If the given key is in the hash map, it should remove the entry with that key and return true
  remove(key) {
    const bucketID = this.hash(key);
    this.checkOutOfBounds(bucketID);

    const bucket = this.bucketArray[bucketID];
    const index = bucket.getIndex(key);
    if (index !== null) {
      bucket.remove(index);
      this.count--;
      return true;
    }

    return false;
  }

  // returns the number of stored keys in the hash map
  length() {
    return this.count;
  }

  // removes all entries in the hash map
  clear() {
    this.bucketArray = new Array(this.capacity).fill(null);
    this.count = 0;
    return this.bucketArray;
  }

  // returns an array containing all the keys inside the hash map
  keys() {
    let keysArray = [];

    this.bucketArray.forEach((bucket) => {
      if (bucket) {
        let keys = bucket.getKeys();
        keysArray.push(...keys);
      }
    });

    return keysArray;
  }

  // returns an array containing all the values
  values() {
    let valuesArray = [];

    this.bucketArray.forEach((bucket) => {
      if (bucket) {
        let values = bucket.getValues();
        valuesArray.push(...values);
      }
    });

    return valuesArray;
  }

  // returns an array that contains each key, value pair
  entries() {
    let entries = [];

    this.bucketArray.forEach((bucket) => {
      if (bucket) {
        entries.push(bucket.getEntries());
      }
    });

    return entries;
  }

  // returns the entire bucket
  getBuckets() {
    return this.bucketArray;
  }

  // Checks if the number of elements is over the load factor
  isOverLoadFactor() {
    if (this.count > this.capacity * this.loadFactor) return true;
  }

  // check if the accessing index of the bucket is out of bounds
  checkOutOfBounds(bucketID) {
    if (bucketID < 0 || bucketID >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  rehash() {
    const oldBucketArray = this.bucketArray;
    this.capacity *= 2;
    this.bucketArray = new Array(this.capacity).fill(null);
    this.count = 0;

    oldBucketArray.forEach((bucket) => {
      if (bucket) {
        const entries = bucket.getEntries();

        entries.forEach(([key, value]) => {
          this.set(key, value);
        });
      }
    });
  }
}
