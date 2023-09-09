const readLine = require('readline') //The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

const r1= readLine.createInterface({   //The readline.createInterface() method creates a new readline.Interfaceinstance.

    input: process.stdin,
    output: process.stdout
})

r1.question("Please enter your first name: ", (firstName) =>{   /*The rl.question() method displays the query by writing it to the output, waits for user input to be provided on input, 
                                                                 then invokes the callbackfunction passing the provided input as the first argument.*/
    console.log('First name: ', firstName)

r1.question("Please enter your last name: ", (lasttName) =>{
    console.log('last name: ', lasttName)
    r1.close()                //The rl.close() method closes the Interface instance and relinquishes control over the input and output streams. When called, the 'close' event will be emitted.

    console.log("Full Name is:", firstName.concat(lasttName));
})
})



