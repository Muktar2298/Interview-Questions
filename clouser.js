function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

//--First time call Parent funtion --//
const clock1 = stopWatch();
// console.log(clock1);
console.log("Clock 1 Function:");
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

// --Second time Call Parent Function--//
const clock2 = stopWatch();
// console.log(clock2);
console.log("Clock 2 Function:");
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

// ---call again clock1() ---//
console.log("Again call clock1 Function:");
console.log(clock1()); 
console.log(clock1());
// --call again clock2() ---//
console.log("Again call clock2 Function:");
console.log(clock2());
console.log(clock2());
