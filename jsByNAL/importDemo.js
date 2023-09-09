import { hello, name, age } from "./exportDemo.js";  /*To import we need type: module setting in ackage.json file else you will face error-
                                                      Cannot use import statement outside a module */

hello("kapil")

console.log("Your age is: ",age);

/*  
       Output:
                 hello kapil  //Call function in exported class
                 Your age is : 40  //Call variable defined in exported class
*/
