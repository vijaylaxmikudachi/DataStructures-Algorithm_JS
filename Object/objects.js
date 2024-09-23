//Merge two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2));  
// Output: { a: 1, b: 3, c: 4 }

//obj to array
function objectToArray(obj) {
    return Object.entries(obj);
}

let obj = { name: "John", age: 25, city: "New York" };
console.log(objectToArray(obj));  
// Output: [["name", "John"], ["age", 25], ["city", "New York"]]

//properties of an obj
function getPropertyNames(ob) {
    return Object.keys(ob);
}

let ob = { name: "John", age: 30, city: "New York" };
console.log(getPropertyNames(ob));  
// Output: ["name", "age", "city"]
