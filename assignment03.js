//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.




var personName = "Eric";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (word) { return (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); });
}
