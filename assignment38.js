function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('New York'); // Default country will be 'Unknown'
