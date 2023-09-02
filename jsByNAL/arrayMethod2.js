//1. every() : Determine whether all array members satisfies a condition and ut returns true/false accordingly

let num =[1, 2, 3, 4, 5, 6, 30]

let flag= num.every((e) => e < 10)  

console.log(flag)  //False : Because 30 is not less than 10

//2. some() : check atleast one element in the array passes the condition

let number = [1, 2, 3, 4, 5]

let flag2=number.some((e) => e%2===7) 
console.log(flag2) //false

//3. find() : Give us first element that satisfies a given condition

let num2 = [1, 8, 2, 3, 8, 9]
let fe1= num2.find((e) => e%2===0)
let fe2= num2.find((e) => e%2===7)
 console.log(fe1); //8
 console.log(fe2); //Undefined because condition not satisfied with any element

//4. reverse() : It just reverse the array order
 
let frts = ["apple", "banana", "grapes", "pear"]

let revFrts= frts.reverse()

console.log(revFrts)  //'pear', 'grapes', 'banana', 'apple'

//5. sort() :  Sort array in alphabatic order

let frts1 = ["pear","banana","apple",  "grapes", 123, "TSHIRT"]  

let sortedArray= frts1.sort()
console.log(sortedArray);  //123, 'TSHIRT', 'apple', 'banana', 'grapes', 'pear'
/*Result analysis- first precedense with NUMERIC then CAPITAL LETTERS then SMALL LETTERS */

