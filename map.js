/*//--find element using "loop" --//
const numbers  = [1,2,3,4,5,6,7,8,9,10,11];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    let result = element * element;
    output.push(result); 
}
console.log(output);
*/

//--using "map()" --//
// 1.
/*const numbers  = [1,2,3,4,5,6,7,8,9,10,11];
function double(element){
    return element * element;
}
const output =  numbers.map(double)
console.log(output);*/

// 2.
// const numbers  = [1,2,3,4,5,6,7,8,9,10,11];
// const output =  numbers.map(function(element) {
//     return element * element;
// })
// console.log(output);

// 3.
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
numbers.map(function (element, index, array) {
  console.log(element, index, array);
});*/


//4. using arrow function --//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const double = element => element * element;
// const result = numbers.map(double);
// // console.log(result);

// const square = (element,index) => {
//     console.log(element * element, index);
// }
// const result2 = numbers.map(square);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const result = numbers.map(element => element * element);
console.log(result);



