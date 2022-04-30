function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function addTwoNumber(num1, num2) {
  return num1 + num2;
}
var addTwoNumberz = addTwoNumber(12, 29);
console.log('second sum', addTwoNumberz);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(12);
console.log('Hours to Minutes', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;

}
var hi = getGreeting('World');
console.log('greeting', hi);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var product = addAndMultiplyBy5(12, 29);
console.log('Add, then multiply by 5', product);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}
var divide = multiplyAndDivideBy5(12, 29);
console.log('multiply and divide by 5', divide);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}
var subtract = subtractTwoNumbers(29, 12);
console.log('subtract two numbers', subtract);

function getCircleCircumference(radius) {
  var result = radius * (2 * 3.14);
  return result;
}
var circum = getCircleCircumference(10);
console.log('Circumference', circum);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
var name = getFullName('Edward', 'Cullen');
console.log('full name', name);

function cube(number) {
  var result = number * number * number;
  return result;
}
var cubed = cube(12);
console.log('cube', cubed);
