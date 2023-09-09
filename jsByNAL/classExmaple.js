class Employee {
  constructor(name, dept, location) {
    (this.name = name), (this.dept = dept), (this.location = location);
  }

  /* constructor(name, dept, location) {            //A class may only have sinlge constructor- If u try then it will give you error in run time 
    (this.name = name), 
    (this.dept = dept), 
    (this.location = location);
  } */

  getEmployeeDetails() {
    console.log(
      `Employee details are: ${this.name} ${this.dept} ${this.location}, ${this.email}`
    );
  }

  //Add new propert to employee on the fly

  setEmpEmail(email) {
    this.email = email;
  }
}



//Create object of employee class and give values to them

let emp1 = new Employee("Ammie", "Director", "London"); // Ammie Director London
emp1.setEmpEmail("ammie@gmail.com")

let emp2 = new Employee(); //Undefined

//Calling employee class function using employee class object
emp1.getEmployeeDetails(); 

/*Everytime you create object- constructor will be called automatically*/

