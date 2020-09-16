/*
Objects Exercise

I’m going to keep this exercise quite simple. I’ll give you some harder object oriented stuff to do after the section on classes coming later in the course.

Task 1

Create a constructor ExamResultSet. It should take as it’s only argument an array of numbers that represent exam results.

An ExamResultSet instance should have two functions:

getAverage : no arguments, returns a number which is the average of all of the results in the result set.

getHighest: no arguments, returns the highest result in the set

getLowest: no arguments, returns the lowest result in the set

You could manually calculate the min and max in the array, but these functions might make it easier.

Math.min https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/min

Math.max
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/max

You’d need to use them with something I haven’t shown you yet, arguments spread:

Math.max(...[9, 4, 5, 3]) which is the same as doing Math.max(9, 4, 5, 3). The argument spread syntax (ES6+) explodes an array when used as a function argument such that each element in the array is a new argument to the function.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

function ExamResultSet (examResultsArray) {
    this.examResultsArray = examResultsArray;
}

ExamResultSet.prototype.getAverage = function () {
    let examSum = this.examResultsArray.reduce((runningTotal, currentValue) => runningTotal += currentValue, 0);
    return examSum/(this.examResultsArray.length);
}

ExamResultSet.prototype.getHighest = function () {
    return Math.max(...this.examResultsArray);
}

ExamResultSet.prototype.getLowest = function () {
    return Math.min(...this.examResultsArray);
}

ExamResultSet.prototype.getSummary = function () {
    return this.examResultsArray;
}

const examResultSet1 = new ExamResultSet ([100, 80, 70, 80, 65, 90, 100, 99]);
console.log(examResultSet1);
console.log(examResultSet1.getAverage());
console.log(examResultSet1.getSummary());
console.log(examResultSet1.getHighest());
console.log(examResultSet1.getLowest());


/*
Task 2

Create a AddableExamResultSet constructor that takes no arguments, and inherits getHighest and getLowest and getAverage from ExamResultSet.

It should also have the following function:

add() that takes a number as the argument, and adds this number to the result set. So:

const set = new AddableExamResultSet();
set.add(10);
set.add(20);
set.add(30);
set.getAverage(); // 20
*/

//inherit the functions from ExamResultSet
AddableExamResultSet.prototype = Object.create(ExamResultSet.prototype);

function AddableExamResultSet() {
    this.examResultsArray = [];
}

AddableExamResultSet.prototype.add = function (num) {
    this.examResultsArray.push(num);
}

const set = new AddableExamResultSet();
console.log(set)
set.add(10);
set.add(20);
set.add(30);
console.log(set.getHighest());
console.log(set.getLowest());
console.log(set.getAverage()); // 20
console.log(set.__proto__.__proto__)

