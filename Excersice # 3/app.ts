//Question 3
let perName: string = "Yamman sheikh";

//Convert to lowercase::
let lowercaseName: string = perName.toLowerCase();
console.log("Lowercase: ", lowercaseName);

//Convert to Uppercase::
let uppercaseName: string = perName.toUpperCase();
console.log("UPPERCASE: ", uppercaseName);

// Convert to title::
let titlecaseName: string = perName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log("TitleCase: ", titlecaseName);