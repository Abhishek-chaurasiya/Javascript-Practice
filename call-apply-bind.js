let name = {
  firstname: "abhishek",
  lastname: "chaurasiya",
};
let printFullName = function (hometown) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown);
};
printFullName.call(name, "chitrakoot", "up");

let name2 = {
  firstname: "raj",
  lastname: "karan",
};

// function borrowing
printFullName.call(name2, "lucknow", "up");
printFullName.apply(name2, ["lucknow", "up"]);

// bind method
let printMyname = printFullName.bind(name, "chitrakoot", "up");
printMyname();
