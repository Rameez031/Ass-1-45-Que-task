//Question 2
var msg = "Hello Yamman, would you like to learn some Python today?!";
console.log(msg);
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
// Question 4
var famQoute = "Billgates once said,'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'";
console.log(famQoute);
// Question 5
var famous_person = "BillGates once said!";
var famous_qoute = "'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'";
console.log(famous_person + famous_qoute);
// Question 6
var nam = "\t \n Rameez \t \n";
console.log(nam);
// Question 7
// Add
var addNum = 3 + 5;
console.log("Addition:\t" + addNum);
// Sub
var subNum = 14 - 6;
console.log("substraction:\t" + subNum);
// Multi
var multiNum = 2 * 4;
console.log("Multiply\t" + multiNum);
// Divide
var divNum = 32 / 4;
console.log("Divsion:\t" + divNum);
// Question 8
// console.log(7 + 1);
// console.log(18 - 10);
// console.log(4 * 2);
// console.log(40 / 5);
// Question 9
var favNum = 5;
var myMsg = "My favourite num is";
console.log(myMsg + " " + favNum);
// Question 10
/*Rameez Ramzy ---- Date 19/Feb/2024
i am Learning Typescript using node.js and my programm going to be well.*/
// Question 11
var freindsName = ["Rabbi", "Yamman", "Taswwor"];
console.log(freindsName[0]);
console.log(freindsName[1]);
console.log(freindsName[2]);
for (var i = 0; i < freindsName.length; i++) {
    console.log("Freind " + (i + 1) + ": " + freindsName[i]);
}
// Question 12
for (var i = 0; i < freindsName.length; i++) {
    console.log("ASSALAM O ALAIKUM ".concat(freindsName[i], "! Have a Great day"));
}
// Question 13
var cars = ["Supra Mk4", "vigo", "porshe", "Rolce Royce"];
for (var i = 0; i < cars.length; i++) {
    console.log("I would like to own a ::".concat(cars[i], ":: Car"));
}
// Question 14
var dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("ASSALAM O ALAIKUM Mr. ".concat(dinner_guest[i], ", you are invited to join me for dinner. It would be an honor to have your company.\n"));
}
// Question 15
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates",];
console.log("Due to some personal reasons Mr.".concat(dinner_guest[2], " will not come in my dinner "));
dinner_guest[2] = "Elon Musk";
console.log("New list of my Freinds who are coming to my dinner\n");
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("".concat(i + 1, ". ").concat(dinner_guest[i]));
}
// Question 16
console.log("".concat(dinner_guest, ":\n I have found bigger dinner table than i think to invite three more freinds"));
//adding three more freinds 
//at beginning;
dinner_guest.unshift("Ameen Alam");
//at Middle;
dinner_guest.splice(2, 0, "Guido van Rossum");
//at Last
dinner_guest.push("Adem freemen");
//Print all Guest alongwith message.       
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("Mr ".concat(dinner_guest[i], " you are invited to my dinner"));
}
// Question 17
console.log("\n Table is not available I can invite only Two Persons\n");
console.log(dinner_guest.length);
while (dinner_guest.length > 2) {
    var rm_guest = dinner_guest.pop();
    if (rm_guest) {
        console.log("Sorry Mr ".concat(rm_guest, " We have not enough Space, So you are not Invited Yet!\n"));
    }
}
console.log("The final two guests are:\t".concat(dinner_guest, "\n"));
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("Dear ".concat(dinner_guest[i], "  you are still in our List! \n"));
}
dinner_guest.pop();
dinner_guest.pop();
console.log(" we have 0 guests in list : ".concat(dinner_guest));
//Question 18
var fav_Place = ["soudia", "Malysia", "Iran", "Turkey", "America"];
console.log(fav_Place);
var sorted_place = fav_Place.slice();
sorted_place.sort();
console.log("Original Places:  ".concat(fav_Place));
console.log("Sorted Places: ".concat(sorted_place));
console.log("still in its original order:\n ".concat(fav_Place));
var revFavPlace = fav_Place.slice();
revFavPlace.reverse();
console.log("Original places: \n ".concat(fav_Place));
console.log("Reverse Favourit Places:\n ".concat(revFavPlace));
fav_Place.reverse();
console.log("reverse: ".concat(fav_Place));
fav_Place.sort();
console.log("sorted: ".concat(fav_Place));
fav_Place.reverse();
console.log("reverse: ".concat(fav_Place));
// Question 19
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
console.log("Hey! Dear Mr ".concat(dinner_guest, " you are invited again\uD83D\uDE0C"));
// Question 20
var prog_language = ["Python", "JavaScript", "Java", "ReactNative", "Next.js"];
console.log("List of Programming Languages:\n ".concat(prog_language));
// Question 21 and 22
var object_Lang = [
    { Language: "Python", year: 1991 },
    { Language: "JavaScript", year: 1995 },
    { Language: "Java", year: 1991 },
    { Language: "C++", year: 1979 }
];
var invalid_index = object_Lang[3];
if (object_Lang.length > 3) {
    var valid_index = object_Lang[3];
    console.log("language at index 3: ", valid_index);
}
else {
    console.log("Invalid index access. The array lenght is:", object_Lang.length);
}
// Question 23
//Comparison Operator
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'kawasaki'? I predict False.");
console.log(car == 'kawasaki');
console.log("Is five grater than 4? I predict True.");
console.log(5 > 4);
console.log("Is 10 less than 20? I predict True.");
console.log(10 < 20);
console.log("Is mango start with n? I predict False.");
console.log("mango".startsWith("n"));
console.log("Is mango end with o? I predict True.");
console.log("mango".endsWith("o"));
console.log("Is mango contain t? I predict False.");
console.log("mango".includes("t"));
console.log("Is true && false? I predict False.");
console.log(true && false);
console.log("Is true || false? I predict True.");
console.log(true || false);
console.log("Is false ? I predict False.");
console.log(false);
// Question 24
var fruit_king = "Mango";
console.log("Is Apple is king of fruit? I predict False.");
console.log("Apple" == fruit_king);
console.log("Is Mango is king of fruit? I predict True.");
console.log("Mango" == fruit_king);
var my_name = "Rameez";
console.log("Is rameez is my name in lowercase? I predict True.");
console.log(my_name.toLowerCase() == "rameez");
console.log("Is Rameez is my name in lowercase? I predict False.");
console.log(my_name.toLowerCase() == "Rameez");
console.log("is Six greater than two? I predict True.");
console.log(6 > 2);
console.log("is Six lesser than two? I predict False.");
console.log(6 < 2);
console.log("is Six divisible by two? I predict True.");
console.log(6 % 2 == 0);
console.log("is seven is divisible by two? I predict False.");
console.log(7 % 2 == 0);
console.log("is israel is State? i predict False.");
console.log(true && false);
console.log("is Palestine is State? i predict True.");
console.log(true || false);
var fruits = ["Apple", "Mango", "Orange", "Banana"];
console.log("Is Apple in fruits? I predict True.");
console.log(fruits.includes("Apple"));
console.log("Is Car in fruits? I predict False.");
console.log(fruits.includes("Car"));
// Question 25
var alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)];
if (alien_color === "green") {
    console.log("Congratulations! The player just earned 5 points for shooting down the green alien.");
}
// Question 26
alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)];
if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting down the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting down the yellow alien.");
}
// Question 27
alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)];
if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting down the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting down the yellow alien.");
}
else if (alien_color === 'red') {
    console.log('Congratulations! The player just earned 15 points for shooting down the red alien.');
}
// Question 28
var age = 10;
if (age <= 2) {
    console.log("the person is a baby");
}
else if (age > 2 && age <= 4) {
    console.log("the person is a toddler");
}
else if (age > 4 && age <= 13) {
    console.log("the person is a kid");
}
else if (age > 13 && age <= 20) {
    console.log("the person is a teenager");
}
else if (age > 20 && age <= 65) {
    console.log("the person is an adult");
}
else if (age > 65) {
    console.log("the person is an elder");
}
// Question 29
var fav_fruits = ["Pineapple", "Guava", "Mango"];
if (fav_fruits.includes("Pineapple")) {
    console.log("You Really Like Pineapple!");
}
if (fav_fruits.includes("Mango")) {
    console.log("You Really Like Mango!");
}
if (fav_fruits.includes("Guava")) {
    console.log("You Really Like Guava!");
}
if (fav_fruits.includes('Bananas')) {
    console.log("You really like Bananas!");
}
else {
    console.log("Bananas is not one of your favorite fruits.");
}
if (fav_fruits.includes('kiwi')) {
    console.log("You really like kiwi!");
}
else {
    console.log("Kiwi is not one of your favorite fruits.");
}
// Question 30
var userNames = ['Admin', 'Rameez', 'Rabbi', 'Yamman', 'Taswwor'];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName == 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
}
// Question 31
userNames = ['Admin', 'Rameez', 'Rabbi', 'Yamman', 'Taswwor'];
for (var i = userNames.length; i > 0; i--) {
    userNames.pop();
}
if (userNames.length > 0) {
    for (var _a = 0, userNames_2 = userNames; _a < userNames_2.length; _a++) {
        var _names = userNames_2[_a];
        if (_names == "Admin") {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(_names, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users");
}
// Question 32
var current_users = ['Ameen Alam', 'Rameez', 'Rabbi', 'Yamman', 'Taswwor'];
var new_users = ['Taswwor', 'Eric', 'Ramzy', 'Yamman', 'Okasha-Aijaz'];
var _loop_1 = function (newUser) {
    if (current_users.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("The user name ".concat(newUser, " is not available. please try something new"));
    }
    else {
        console.log("The user name ".concat(newUser, " is available"));
    }
};
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var newUser = new_users_1[_b];
    _loop_1(newUser);
}
// Question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var ordinal = void 0;
    if (numbers[i] === 1) {
        ordinal = "st";
    }
    else if (numbers[i] === 2) {
        ordinal = "nd";
    }
    else if (numbers[i] === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(numbers[i]).concat(ordinal));
}
// Question 34
var fav_pizzas = ['Cheese Pizza', 'Pepperoni pizza', 'Afghani tikka burst pizza'];
for (var _c = 0, fav_pizzas_1 = fav_pizzas; _c < fav_pizzas_1.length; _c++) {
    var pizza = fav_pizzas_1[_c];
    console.log("I like ".concat(pizza));
}
console.log('i really love pizza');
// Question 35
var petAnimal = ['Dog', 'Cat', 'Rabbit'];
for (var i = 0; i < petAnimal.length; i++) {
    console.log(petAnimal[i]);
}
for (var _d = 0, petAnimal_1 = petAnimal; _d < petAnimal_1.length; _d++) {
    var animal = petAnimal_1[_d];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log('\n All three animals are commonly domesticated, kept as pets in households around the world. They are known for their companionship and play a significant role in human lives as beloved pets.');
// Question 36
function makeShirt(size, text) {
    console.log("\n The shirt size is ".concat(size, " and the message on it is ").concat(text));
}
makeShirt('Medium', 'ASSALAM O ALAIKUM Javascript');
// Question 37
function make_Shirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love Typescript'; }
    console.log("\n Make the shirt in size in ".concat(size, " and have message ").concat(text));
}
make_Shirt();
make_Shirt('Medium', 'Assalam o alaikum TypeScript');
// Question 38
function describeCity(city, Country) {
    if (Country === void 0) { Country = 'pakistan!'; }
    console.log("\n The city ".concat(city, " is in ").concat(Country, " "));
}
describeCity('Karachi');
describeCity('Islamabad', 'Pakistan!');
describeCity('Istanbul', 'Turkey!');
// Question 39
function city_country(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\"".concat(city, ",").concat(country, "\""));
}
city_country();
city_country('Malacca', 'Malaysia');
city_country("Madina and Makkah", "Saudi Arabia");
// Question 40
function makeAlbum(artName, album_title, tracks) {
    var album = {
        artName: artName,
        album_title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum('Artist1', 'Album1');
var album2 = makeAlbum('Artist2', 'Album2', 17);
var album3 = makeAlbum('Artist3', 'Album3');
var album4 = makeAlbum('Artist4', 'Album4', 26); // Example with tracks parameter
console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
console.log("Album 4:", album4);
// Question 41
function showMagician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicainNames = ['Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
showMagician(magicainNames);
// Question 42
console.log('\t \n Modify the programm by adding "the Great" to each magicians name');
function makeGreat(magicians) {
    return magicians.map(function (magician) { return magician + " " + "the Great!"; });
}
function show_magician(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magician_names = ['\n' + 'Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
show_magician(magician_names);
var greatMagicians = makeGreat(magician_names);
console.log("\n Magicians after adding 'the Great':");
show_magician(greatMagicians);
// Question 43
function makeGreatMagician(magicians) {
    return magicians.map(function (magician) { return magician + " " + "the Great!"; });
}
function showOfMagician(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
var magicianNames = ['\n' + 'Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
var great_magicians = makeGreatMagician(magician_names);
showOfMagician(magician_names);
console.log("\n Magicians after adding 'the Great':");
showOfMagician(greatMagicians);
var unchangedArray = magicainNames.slice();
var makeGreatUncahnged = makeGreatMagician(unchangedArray);
showOfMagician(unchangedArray);
showOfMagician(makeGreatUncahnged);
// Question 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Your sandwich is empty, We have add the following ingredients to the sandwich');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
}
make_sandwich('Bread', 'Salad');
make_sandwich('Cheese', 'Ketchup', 'Mustard');
// Question 45
function make_car(manufacturer, modelNames, carInfo) {
    carInfo['manufacturer'] = manufacturer;
    carInfo['model Name'] = modelNames;
    return carInfo;
}
var tcars = make_car('Tesla', 'model x', { color: 'Black', towPackage: true });
console.log(tcars);