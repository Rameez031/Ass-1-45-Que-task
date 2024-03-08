//Question 3
var perName = "Yamman sheikh";
//Convert to lowercase::
var lowercaseName = perName.toLowerCase();
console.log("Lowercase: ", lowercaseName);
//Convert to Uppercase::
var uppercaseName = perName.toUpperCase();
console.log("UPPERCASE: ", uppercaseName);
// Convert to title::
var titlecaseName = perName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
console.log("TitleCase: ", titlecaseName);
