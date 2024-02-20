//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var apple = { name: "Apple" };
var banana = { name: "Banana" };
var orange = { name: "Orange" };
var strawberry = { name: "Strawberry" };
var mango = { name: "Mango" };
var fruits = [apple, banana, orange, strawberry, mango];
console.log("Details about Fruits:");
for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    console.log("".concat(fruit.name));
}
