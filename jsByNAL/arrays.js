let myArr = []  //Emplty array
let numbers =[1,2,3,4,5] //Number array
let mixedArr = [1, "Kapil", true]  //Mixed array
let lang  =["Java", "Python", "JS"] //String array

/*************Demonstrate array method************/

//1. push: add one or more elements to the end of the array and returns new length

lang.push["Ruby", "XML", "C++", true]  
//console.log(lang);   // Output- original lang array contents without pushing new items at the end

//console.log("-----------------");

lang.push("Ruby", true) 
console.log(lang);  // Output- return new array with original array + pushed items
console.log(lang.length)
console.log("-----------------");

//2. pop: removes last element of the array and returns it, If array is empty then it returns UNDEFINED

let lastLang= lang.pop()
console.log(lang);
console.log("Last item removed is: ",lastLang);
console.log("-----------------");

//3. shift: remove first element of the array and returns it.

let firstLang=lang.shift()
console.log(lang);
console.log("First item removed from array is: ",firstLang);

//4. unshift:  add one or more element at the start of the array and returns new length

let newLangArray=lang.unshift("GOLANG", "PERL")
console.log(lang)
console.log(lang.length);
//console.log(newLangArray);  //Return UNDefined


//5. splice: removes element from the array and inserts new in their place also returns the deleted element

let names = ["kapil", "ammie", "chamko", "chucu"]

let deletedName=names.splice(0,2,"AMMIE")
// console.log(names);
// console.log(deletedName);

//6. slice: returns a copy of section of an array, If start is undefined then it cosider it from 0, End index is exclusive

let pop = [1,2,3,4,5,6,7]

let newPop=pop.slice(2,6)
//console.log(newPop);

//7. concat: concat 2 arrays and returns new arrays.

let media1= ["FB", "TWITTER"]
let media2= ["TINDER", "ORKUT"]

let Media=media1.concat(media2)
// console.log(Media);
// console.log(Media.length);


//8. indexOf: returns index of first occurance of an element in array

let sweets = ["toffee", "cake", "donuts"]

console.log(sweets.indexOf("Donuts"))  //-1 as it didn't located
console.log(sweets.indexOf("donuts"))  // 2 as it finds at 2nd index

/* 9. includes: Check and returns if it find supplied value in array. True- Located  | False- Not Located | 
      Can check multiple values | Implement OR condition in case of multiple values that means it returns TRUE if any one of them is found*/

console.log(sweets.includes("toffee")) //Returns True
console.log(sweets.includes("toffee", "kapil"))  //Returns True, even when Kapil is not present because it applies OR CONDITION HERE
console.log("xxxxxxxxxxxxxxxxxxxxx")

//10. lastIndexOf: Returns last occurance of searched result in an array

let savories = ["bhujia", "samosa", "namakpara", "chaney", "samosa", "samosa",  "samosa"]
console.log(savories.indexOf("samosa"))  //Returns first occurance of searched result in array
console.log(savories.lastIndexOf("samosa")) //Return last occurance of searched results in array

//What if I want to print indexes apart from first and last occurances
console.log("-----------------------")
console.log(savories.indexOf("samosa", 2));

console.log(savories.indexOf("samosa", savories.indexOf("samosa")+1))

console.log("-----------------------")
//11. forEach

let n = [1, 2, 3, 4, 5, 6, 7, 8]

n.forEach((e) => {       //e- Variable and it works like CALLBACK function
    console.log(e*2+3)  //Write what you want to do with array records.
})
