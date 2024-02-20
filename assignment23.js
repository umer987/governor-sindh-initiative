//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
/
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


var car = 'subaru';
var number1 = 5;
var number2 = 10;
var isSunny = true;
var fruit = ['apple', 'orange', 'banana'];
var emptyArray = [];
var person = { name: 'John', age: 25 };
console.log("car is equal to 'subaru'? prediction True.");
console.log(car == 'subaru');
console.log("Is 5<15? prediction True.");
console.log(number1 < number2);
console.log("Is 5 + 10 === 15? prediction True.");
console.log(number1 + number2 === 15);
console.log("Is isSunny AND car equal 'subaru'? prediction True.");
console.log(isSunny && car == 'subaru');
console.log("Is 'apple' in the fruit array? prediction True.");
console.log(fruit.includes('apple'));
console.log("Is the array emptyArray empty?prediction True.");
console.log(emptyArray.length === 0);
console.log("Is person.age >= 21? predictionTrue.");
console.log(person.age >= 21);
console.log("Is car != 'honda'? prediction True.");
console.log(car != 'honda');
console.log("Is 5 > 10? prediction False.");
console.log(number1 > number2);
console.log("Is isSunny OR car == 'honda'? prediction False.");
console.log(isSunny || car == 'honda');
