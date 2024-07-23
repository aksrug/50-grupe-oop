import { Cat } from "./inheritence/Cat.js";
import { Dog } from "./inheritence/Dog.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";
import { Pigeon } from "./inheritence/Pigeon.js";
import { Hamster } from "./inheritence/Hamster.js";
import { Pet } from "./inheritence/Pet.js";


console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalu');
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.voice());

const aukse = new GoldenFish('Aukse');
console.log(aukse.voice());

const balandukas = new Pigeon('Balandukas');
console.log(balandukas.voice());

const pukis = new Hamster('Pukis');
console.log(pukis.voice());

const katia = new Pet('Katia');
console.log(katia.voice());