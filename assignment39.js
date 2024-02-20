//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"/Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var l1 = city_country('Lahore', 'Pakistan');
var l2 = city_country('karachi', 'pakistan');
var l3 = city_country('islamabad', 'pakistan');
console.log(l1);
console.log(l2);
console.log(l3);
