import foods from "./foods";
import { choice, remove } from "./helpers";

let fruit = choice(foods);

console.log(`Id like one ${fruit}, please!`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let rem = remove(fruit, foods);

console.log(`Im sorry, we're all out. We have ${rem.length} left.`);
