// Q1. Create a Student Object

let student={
    Name: "Chandra Prakash",
    Age: 20,
    Course: "B.Tech",
    City: "Lucknow"
}
console.log(student);



// Q2. Update object properties

student.Name="Ayush Kumar Singh"
student.Age=21
console.log(student);

// Q3. Add New Properties

student.Email ="PRAKASHCHANDRA02@GMAIL.COM"
student.MobileNo ="9918151067"
console.log(student);

// Q4. Delete a Properety

delete student.MobileNo
console.log(student);





// Q5. Create an object named employee:

let employee={
    Id: 240344,
    Name: "Rmau",
    Department: "Civil Engineer",
    Salary: 35000
}
console.log(employee);

// .. Q6.  Create an object named product with:

let Product={
    ProductName: "Table Fan",
    Price: 2500,
    Category: "Electric",
    Stock: 20
}


update stock

Product.Stock=80
console.log(Product);

// Q7. Nested Object
// Create a student object with an address object inside it.


let student={
  Name: "Chandra Prakash",
  Age: 20,
  Address: {
    City: "Siddharth Nagar",
    State: "UP"
  }
}

console.log(student.Address);


// Q8. Object Keys
// Create an object of your choice and print all its keys using JavaScript.


let std={
  Name: "Muskan",
  Age: 19,
  Profile: "Student",
  Branch: "Computer Science Computer",

  Address: {
    Town: "Mahuadih",
    City: "Deoria",
    State: "UP"
  }
}
console.log(std);


// Q9. Object Values
// Create an object of your choice and print all its values using JavaScript.


// AS IT AS THE 8TH QUESTION........




//  ⭐ Challenge Question

// Create an object named company containing:

let Company={
     CompanyName: "Nova Tech",
     Founder: "Chandra Roy",
     EstablishedYear: 2021,
     Employees: 370
}
console.log(Company);

// Add a new property location
Company.location = "Siddharth Nagar"
console.log(Company);

// 3. Update the number of employees.
  Company.Employees= 870
  console.log(Company);

// 4. Delete the founder property.
delete Company.Founder
console.log(Company);


// 5. Display the final object.
console.log(Company);
