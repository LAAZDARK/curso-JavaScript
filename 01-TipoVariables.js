// Tipo de dato string
var name = "pedro";
console.log(name);

// Tipo de dato numerico
var number = 550;
console.log(number);

// Tipo de dato Object
var object = {
    name: "Luis",
    edad: 25,
    email: "laazfull@gmail.com",
    status: true
}
console.log(object);

// Tipo de dato boolean
var bandera = true;
console.log(bandera);


// Tipo de dato function
function myFunction() {}
console.log(myFunction);


// Tipo de dato Symbol
var simbol = Symbol("mi simbolo");
console.log(typeof simbol);


// Tipo de classe es una function
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
console.log(typeof Person)


// Tipo undefined
var x;
console.log(x);


// null = ausencia de valor
var y = null;
console.log(y);

// Arrar

var auto = ['BMW', 'Audi', 'Volvo'];
console.log(auto);


/***
 * COncatenacion de cadenas
 */

var name = 'Luis';
var firstName = 'Amador';
var fullName = name + ' ' + firstName;

console.log(fullName)


