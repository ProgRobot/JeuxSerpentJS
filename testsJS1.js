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

//*Tables   => in a unique variable we will save several values

var fruits = ["pomme", "orange", "Poire", "Cirtron"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
