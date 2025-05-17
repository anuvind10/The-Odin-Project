import { HashMap } from "./hashmaps.js";

const test = new HashMap();

// new entries
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
// current load levels should now be at 0.75 (full capacity)
console.log("Initial Hasmap:");
console.log(test.entries());
console.log(test.getBuckets());

// Try updating one of the entry. It should replace kite and not add new one.
console.log("Updating value of kite to 'cian' (last element)");
test.set("kite", "cian");
console.log(test.entries());
// console.log(test.length());

// populate your hash map with the last node.
// This will make your load levels exceed your load factor. It should double the capactiy.
console.log("Adding another entry. This should exceep the load factor");
test.set("moon", "silver");

console.log(test.entries());
console.log("Length: " + test.length());
console.log("New Capacity: " + test.capacity);

console.log(
  "Testing get after capactity increase (for apple, should return red)"
);
console.log("Apple: " + test.get("apple"));

console.log("Keys:");
console.log(test.keys());

console.log("Values:");
console.log(test.values());
console.log(test.getBuckets());
console.log(test.entries());
console.log(test.length());

console.log("Removing dog...");
test.remove("dog");

console.log("New hashmap:");
console.log("Keys:");
console.log(test.keys());
console.log("Values:");
console.log(test.values());
// console.log(test.entries());
console.log(test.getBuckets());
console.log(test.length());
