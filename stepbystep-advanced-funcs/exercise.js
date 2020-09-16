/*
Task 1

Write a function, myMap which will take two arguments,
an array and a function, and return an array that
results from applying the function to every element in
the array (just a reimplementation of the native map).

Example:

myMap([1, 2, 3], x => x * 10); 

returns [10, 20, 30], the same as doing
[1, 2, 3].map(x => x * 10)
*/

const timesTen = num => num * 10;

const myMap = (numArray, transformFunc) => {
    const newArray = [];
    for (let i = 0; i < numArray.length; i += 1) {
        newArray.push(transformFunc(numArray[i]));
    }
    return newArray;
}

const myArray = [1, 2, 3,];
// console.log(myMap([1, 2, 3,], timesTen))

/*
Task 2

** Write function preloadedMap, 
function named preloadedMap
*** Need to practice arrow function syntax so use that 

** What does preloadedMap do? 
which can take any number of arguments of any type, 
takes any number of arguments of any type (number, string)
*** rest parameter to pass an indefinite number of arguments as an array

** What does it return?
and returns a function that,
*** return... a function definition
*** this function definition gets called with myMap and 
*** returns a transformed array using the given arguments to preloadedMap

** What does the returned function do?
when called with a function (let’s call this the map
function) will return an array containing each of the
arguments to preloadedMap after having the map function
applied to them.

Example 1:

var loadedWithNames = preloadedMap('John', 'Terry', 'Dave');
loadedWithNames(name => 'Hello ' + name);

returns ['Hello John', 'Hello Terry', 'Hello Dave']


loadedWithNames(name => name + ' ' + name);

returns ['John John', 'Terry Terry', 'Dave Dave']


Example 2: 

var loadedWithNumbers = preloadedMap(1, 2, 3)
loadedWithNumbers(x => x - 1);

returns [0, 1, 2]
*/


// MIGUELS WAY
// const preloadedMap = (...args) => {
//     return function (transformingFunction) {
//         const newArray1 = [];
//         for (let i = 0; i < args.length; i += 1) {
//         newArray1.push(transformingFunction(args[i]));
//         }
//         return newArray1;
//     }
// } 

//VIDEO SOLUTION REFACTOR
const preloadedMap = (...args) => 
newFunc => args.map(newFunc);

const loadedWithNames = preloadedMap(`Miguel`, `Monica`, `Meggie`,);
console.log(loadedWithNames (name => `Hello ${name}`));
console.log(loadedWithNames (name => `${name} ${name}`));

const loadedWithNumbers = preloadedMap(1, 2, 3, 4, 5,);
console.log(loadedWithNumbers (num => num + 1));
console.log(loadedWithNumbers (num => num * 2));