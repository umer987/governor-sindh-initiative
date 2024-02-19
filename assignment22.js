var apple = { name: "Apple" };
var banana = { name: "Banana" };
var orange = { name: "Orange" };
var strawberry = { name: "Strawberry" };
var mango = { name: "Mango" };
var favoriteFruits = [apple, banana, orange, strawberry, mango];
console.log("Details about Favorite Fruits:");
for (var i = 0; i < favoriteFruits.length; i++) {
    var fruit_1 = favoriteFruits[i];
    console.log("".concat(fruit_1.name));
}
var fruit = favoriteFruits[10];
console.log(fruit);
