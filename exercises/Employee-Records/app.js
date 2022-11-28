// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

function Employee (Name, Title, Salary, Status){
  this.Name = Name;
  this.Title = Title;
  this.Salary = Salary;
  this.Status = "Full Time";
  this.printEmployeeForm = function(){
    Employee.push(this)
  }
}

var Employee1 = new Employee("John", "Dish washer", "28k/yr");
console.log(Employee1);

var Employee2 = new Employee ("Joe", "Server", "20k + tips/yr");
Employee2.Status ="Contract"
console.log(Employee2);

var Employee3 = new Employee ("Jane", "Line-prep", "15k/yr");
Employee3.Status = "Part Time"
console.log(Employee3);

