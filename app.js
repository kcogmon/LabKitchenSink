// . Name Variables
let name = "Kamesha";
// . States Constant
const STATES = '50';
// . Sum 5 & 4
let sum = 5 + 4;
console.log(name, STATES);
console.log(STATES);
console.log(sum);
// .Add comments to your code to document its functionality
// .Write a function called sayHello that displays an alert that says Hello World!Call the say Hello function
function sayHello() {
    alert('Hello World!');
}
sayHello();
//Function checkAge
//Various Users
// var u1
// var partyGoer =getUserAge()
// if  (age >= 21) { //welcome to the club
// ()}
// else {
//     "Sorry " + partyGoer + ", you aren't old enough to view this page!"
// }

let people = [
    {
        name: 'Charles',
        age: 21
    },
    {
        name: 'Charles',
        age: 21
    },
    {
        name: 'Charles',
        age: 21
    },
    {
        name: 'Charles',
        age: 21
    }
]


function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + "you aren't old enough to view this page!")
    }
}

checkAge('Charles', 21)
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)
}

//Array assignment part. Name Favorite Veggies. Can use Var or Let. Var=changes | Let=No changes, add = sign, use [ ] and not curly braces {}, then quotes: can be single or double quotes ' " " fill in information using quotes followed by , for each piece of information.
var favoriteVeggies = ['Edammae', 'Sweet Potatoes', 'Brussel Sprouts', 'Zuccini', 'Carrots', 'Califlower', 'Asparagus', 'Corn', 'Black Eye Peas']

var whatAreThey = 0
while (whatAreThey < favoriteVeggies.length) {
    console.log(favoriteVeggies[whatAreThey]);
    whatAreThey++
}

//Array assignment 5 age properties
var fakeIDclub = ['']

function getLength(word) {
    return word.length
}

let helloLength = getLength('hello world');

function printEvenOrOdd(returnedLength) {
    if (returnedLength % 2 === 0) {
        console.log('the world is nice and even');
    } else {
        console.log('the world is an odd place!')
    }
}

printEvenOrOdd(helloLength);
