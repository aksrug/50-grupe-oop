import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(3, 2));
console.log(rexas.addNumbers(3, -2));
console.log(rexas.addNumbers(-3, -2));
console.log(rexas.addNumbers(-3, 3));
console.log(rexas.manyBones(20));

console.clear();

const brisius = new Dog('Brisius', 'white', 2);
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());

console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());

console.clear();


console.log('--------------');

/* AUTO ND */

import { Car } from "./js/Car.js"; 

const audi = new Car ('Audi', '80', 'Geltona', 66, 5.2);
console.log(audi);

console.log(audi.name);
console.log(audi.model);
console.log(audi.color);
console.log(audi.fuelTankCapacityLitres);
console.log(audi.averageFuelConsumptionLitres);
console.log(audi.engineIsOn);
console.log(audi.speed);

console.log(audi.startEngine());
console.log(audi.engineOff());