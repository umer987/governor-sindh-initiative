var favorite_pizzas = ['chicken', 'fajita', 'creemy'];
console.log("Pizza Names:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log(pizza);
}
console.log("\nPizza Statements:");
for (var _a = 0, favorite_pizzas_2 = favorite_pizzas; _a < favorite_pizzas_2.length; _a++) {
    var pizza = favorite_pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\nI really love pizza!");
