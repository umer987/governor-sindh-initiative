//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


var string1 = 'apple';
var string2 = 'orange';
var mixedCaseString = 'ApPle';
var num1 = 15;
var num2 = 10;
var arrayItems = ['apple', 'orange', 'banana'];
console.log("Are string1 and string2 equal? prediction False.");
console.log(string1 === string2);
console.log("Is string1 not equal to string2? prediction True.");
console.log(string1 !== string2);
console.log("Is mixedCaseString in lowercase equal to 'apple'? prediction True.");
console.log(mixedCaseString.toLowerCase() === 'apple');
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? prediction False.");
console.log(num1 <= num2);
console.log("Is num1 greater than 10 and num2 less than 20? prediction True.");
console.log(num1 > 10 && num2 < 20);
console.log("Is num1 less than 10 or num2 greater than 20? prediction False.");
console.log(num1 < 10 || num2 > 20);
console.log("Is 'banana' in the arrayItems? prediction True.");
console.log(arrayItems.includes('banana'));
console.log("Is 'grape' not in the arrayItems? prediction True.");
console.log(!arrayItems.includes('grape'));
