//*Functions
/*
function name(parameter1, parameter2, ... ){
  return blabla;
}
*/

//?1-Declaration
function multiply(a, b) {
  return a * b;
}

//?2-Execution de la fonction

number1 = 12;
number2 = 12;

//alert(multiply(number1, number2));

//*Local & Global scope

function multiply2(num1, num2, num3) {
  var resultMultiply = num1 * num2 * num3; //resultMultiply is a local variable
  return resultMultiply; //? to make it global  we have to remove the var keyword, this manipulation is not recommanded
}

var a = 10,
  b = 30,
  c = 2; //global variables

var resultat = multiply2(a, b, c);
//console.log(resultMultiply);

//*Arrays  => in a unique variable we will save several values

var fruits = ["pomme", "orange", "Poire", "Cirtron"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//We can exploid all possibilties by appliying arrays method on fruits arrray

//*Creating objects
/*
var object={
  propertyName1 : propertyValue1;
  propertyName2 : propertyVAlue2; 
}
*/

//?Dog object creation :)
/*
var dog = {
  name: "Liza",
  age: 5,
  color: "pink",
};

console.log(dog);

for (var property in dog) {
  console.log(dog[property]);
}

*/

//?Another manner to create object

var dog = new Object();
dog.name = "nini";
dog.color = "white";
dog.age = 25;
dog.aboie = function () {
  var repetition = 0;
  while (repetition < 3) {
    console.log("whouaf, whouaf");
    repetition++;
  }
};

dog.aboie();

//*Constructors functions

//?Lets define a a function constructor to create a dog

function Dog(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;

  this.aboie = function (dogSound) {
    var repetition = 0;
    for (let repetition = 0; repetition < 3; repetition++) {
      console.log(dogSound);
    }
  };
}

var petitCaniche = new Dog("momo", "white", 15);
var grosPitbull = new Dog("fofo", "red", 5);

console.log("====================================");
console.log(petitCaniche);
console.log("====================================");
console.log("====================================");
console.log(grosPitbull.name, grosPitbull.color, grosPitbull.age);
console.log("====================================");

petitCaniche.aboie("Haouuu");
grosPitbull.aboie("Aaouuu");
