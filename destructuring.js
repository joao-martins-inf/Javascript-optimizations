//basics

const arr = ['arrow', 1 , 'bacon'];

const [arrow, num, bacon] = arr;

console.log(num); // 1
console.log(arrow) // arrow

console.log("\nignore values:")
const arr2 = ['arrow', 1 , 'bacon'];

const [pos1,, pos3] = arr2;

console.log(pos1); // arrow
console.log(pos3) // bacon

console.log("\ncombine the rest:")
const arr3 = ['arrow', 1 , 'bacon'];

const [elem1, ...rest] = arr3;

console.log(elem1); // arrow
console.log(rest) // [1, 'bacon']

const week = ['mon','tue','wed','thur','fri'];
const weekend = ['sat','sun'];
console.log([...week, ...weekend]); // ['mon','tue','wed','thur','fri','sat','sun']
week.push(...weekend);
console.log(week); // ['mon','tue','wed','thur','fri','sat','sun']


console.log("\nDefault value:")
//default value---> use '=' so set a default
const arr_undef = [undefined, 1, 2];
const [first = 5, middle, last] = arr_undef;

console.log(first) // 5
console.log(middle) // 1
console.log(last) // 2

// can also be used to destructure objects
console.log("\nObjects:");
const obj = {
    'shroom': 1,
    'banana': 2,
    'pepper': 20
}

const { shroom, banana, pepper } = obj;
//const { shroom: mushroom, banana: ban, pepper: pep } = obj; // to rename properties

console.log(pepper) // 20
console.log(banana) // 2
console.log(shroom) // 1



