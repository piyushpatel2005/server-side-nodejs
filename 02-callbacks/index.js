var rect = require('./rectangle');

function solveRect(l, b) {
  console.log("Solving rectangle: ");
  rect(l,b,(err, rectangle) => {
    if(err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log("The area of rectangle with dimensions l = " + l + " and b = " + b + " is " + rectangle.area());
      console.log("The perimeter of rectangle with dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter());
    }
  });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
