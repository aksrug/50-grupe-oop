import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'hamster';
        this.sound = 'gram gram';
        this.emoji = '🐹';
        this.emojiCount = 2;
    }
}