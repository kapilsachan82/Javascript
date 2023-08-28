/*
    1. var: old way
    2. Can be Re-Declared and Re-Initialize
    3. Can be Re-Initialized
    4. Can declare value without initializing it- In this case UNDEFINE will return.
*/

var x=10
function test(){
    let y=20
    console.log("Value of y: "+y)
}
console.log("Value of x: "+x);
test()


var pop="hi"  //Global declaration
function rel(){

    var top = "Hello Kapil" //Functional declaration
    console.log(top)
}
console.log(pop);
rel()
//console.log(top)  //Error: Top not defined 

var browser = "chrome"
var browser ="firefox"  //ReDeclaration & ReInitialization allowed
browser="edge"
console.log("Browser is: "+browser)

var g;
console.log("default value of g :"+g)//Output: Undefined

//Issue with var
var flag= "Hey Kapil"
var t=4
if(t>3){
    var flag= "Hey Ammie" 
}
console.log("Value of t: "+flag) //Output: Hey Ammie and this is the problem now <Flag= Hey Kapil> is re-initialized as condition satisfied.
                                 //and now we can use "Hay Kapil" further in code.

                                 