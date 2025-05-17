import { LinkedList } from "./index.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.insertAt("frog", 2);
console.log("Inserted 'frog' at 2nd index (3th element). New List below:");
console.log(list.toString());

list.removeAt(4);
console.log("removed element at index 4 (5th element). New List below:");

console.log(list.toString());

list.pop();
console.log("Popped List. New list below:");
console.log(list.toString());
console.log("3th Element below:");
console.log(list.at(2));
console.log("Contains tutle: " + list.contains("turtle"));
console.log("Contains cat: " + list.contains("cat"));
console.log("Parrot is at index: " + list.find("parrot"));
