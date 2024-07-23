import { Pet } from "./Pet.js";

export class Cat extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.animalType = 'cat';
        this.sound = 'miau';
        this.emoji = '🐈';
        this.emojiCount = 2;
    }
}