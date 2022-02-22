let x = "Uwielbiam JavaScript";
let y = "Jestem świetnym programistą";

function myFunction(x,y) {
  let a = x.length;
  let b = y.length;
  if (a > b) {
    return x;
  } else if (a == b) {
    return "Strings are equal";
  } else {
    return y;
  }
}

console.log (myFunction(x,y));