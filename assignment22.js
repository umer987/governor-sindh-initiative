// Create an array of favorite fruit objects
var favoriteFruits = [
    { name: "Apple", color: "Red", taste: "Sweet" },
    { name: "Banana", color: "Yellow", taste: "Creamy" },
    { name: "Orange", color: "Orange", taste: "Citrusy" },
    { name: "Strawberry", color: "Red", taste: "Juicy" },
    { name: "Mango", color: "Yellow", taste: "Sweet and Tangy" }
];
// Try to access an element at an invalid index (intentional error)
var invalidIndex = 10; // using an index that doesn't exist
var fruit = favoriteFruits[invalidIndex];
// Correct the error by checking if the index is valid
if (fruit) {
    console.log("Details about Favorite Fruit at index ".concat(invalidIndex, ": ").concat(fruit.name, ", Color - ").concat(fruit.color, ", Taste - ").concat(fruit.taste));
}
else {
    console.log("Error: Invalid index ".concat(invalidIndex, ". Please choose a valid index."));
}
