const readLine = require('readline')

const r1= readLine.createInterface({

    input: process.stdin,
    output: process.stdout
})

r1.question("Please enter your first name: ", (firstName) =>{
    console.log('First name: ', firstName)

r1.question("Please enter your last name: ", (lasttName) =>{
    console.log('last name: ', lasttName)
    r1.close()

    console.log("Full Name is:", firstName.concat(lasttName));
})
})



