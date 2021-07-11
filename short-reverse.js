// --sort & reverse method --//

// --alphabet sortin & reversing --//
const names = ["NishaT", "Zarif", "Cabul", "Korim", "Arif"];
const sorting = names.sort();
console.log(sorting);

// --reverse
const names2 = ["AishaT", "Carif", "Cabul", "Korim", "Zarif"];
const reverse = names2.reverse();
console.log(reverse);

// --Number sorting & reversing --//
const numbers = [1, 2, 20, 40, 5, 8, 100, 1, 2];
const numberSorting = numbers.sort((a, b) => a - b);
console.log(numberSorting);

const numberReverse = numberSorting.reverse();
console.log(numberReverse);
