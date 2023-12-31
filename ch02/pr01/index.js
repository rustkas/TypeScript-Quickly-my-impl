"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    ;
    sayHello() {
        return 'Dog says hello!';
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    dive(howDeep) {
        return `Diving ${howDeep} feet`;
    }
}
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry.';
    }
}
const myDog = new Dog('Sammy');
const myFish = new Fish('Marry');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
// talkToPet({ name: 'John' })
