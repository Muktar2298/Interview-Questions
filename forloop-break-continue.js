/*// --break --//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const num = numbers[4];
// console.log(num);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    break;
  }
  console.log(numbers[i]);
} */

// ---continue 1 ---//
const numbers = [1, -2, 2, -3, 3, -5, 4, -8, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    continue; //--continue (means => ignore them and then continue with other )
  }
  //   console.log(numbers[i]);
}

// --continue 2 --// (find the "Even number")
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 != 0) {
    continue; //--continue (means => ignore them and then continue with other )
  }
  console.log(numbers2[i]);
}
