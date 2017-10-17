module.exports = (x, y, callback) => {
  if(x <= 0 || y <= 0) {
    setTimeout(() => {
      // If there is error, use callback function with error object.
      callback(new Error("Rectangle dimensions should be greater than zero."), null);
    }, 2000);
  } else {
    // if no error, use callback function wihtout error object.
    setTimeout(() => {
      callback(null, {
        // return object with area and perimeter if not error.
        perimeter: () => (2 * (x + y)),   // use closure to get values of x and y
        area: () => x * y
      })
    }, 2000);
  }
}
