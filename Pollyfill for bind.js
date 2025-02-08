myBind mimics the built-in bind method.
Partial application is achieved using params and args2.
Uses closures to remember this and initial arguments.

let name = {
  firstname: "abhishek",
  lastname: "chaurasiya",
};
let printName = function (hometown,state) {
  console.log(this.firstname + " " + this.lastname + " " + hometown + "  " + state);
};

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0],[...params,...args2]);
  };
};

let printMyname = printName.myBind(name,"chitrakoot");
printMyname("up");
