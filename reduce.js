/* // --sum of all array element ---//
const num = [1, -1, 2, 3];
let sum = 0;
for (let i of num) {   // --using "for of  loop"
  sum += i;
}
console.log(sum); */

// 1.--using reduce method --//
const num = [1, -1, 2, 3];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const sum = num.reduce(reducer, 0); //--here "0" = initial value of accumulator( we can initial of accumulator value) and currentValue will = first element value(1) //
const sum = num.reduce(reducer); //--if not initialize of accumulator value ,then accumulator initial value will be =  first element value(1) and currentValue = 2nd element value(-1)//
console.log(sum);

// 2.//
const num1 = [1, -1, 2, 3];
const sum2 = num1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum2);
