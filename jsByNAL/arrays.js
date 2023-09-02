let myArr = []  //Emplty array
let numbers =[1,2,3,4,5] //Number array
let fruits =["apple", "banana", "orange"] //String array
let mixedArr = [1, "Kapil", true]  //Mixed array
let lang  =["Java", "Python", "JS"] //String array

/*************Demonstrate array method************/

//push: add one or more elements to the end of the array and returns new length

lang.push["Ruby", "XML", "C++", true]  
//console.log(lang);   // Output- original lang array contents without pushing new items at the end

//console.log("-----------------");

lang.push("Ruby", true) 
console.log(lang);  // Output- return new array with original array + pushed items
console.log(lang.length)
console.log("-----------------");

//pop: removes last element of the array and returns it, If array is empty then it returns UNDEFINED

let lastLang= lang.pop()
console.log(lang);
console.log("Last item removed is: ",lastLang);
console.log("-----------------");

//shift: remove first element of the array and returns it.

let firstLang=lang.shift()
console.log(lang);
console.log("First item removed from array is: ",firstLang);

//unshift:  add one or more element at the start of the array and returns new length

let newLangArray=lang.unshift("GOLANG", "PERL")
console.log(lang)
console.log(newLangArray);
console.log(newLangArray.length);


