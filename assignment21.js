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
