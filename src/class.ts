// class Animal {
//     name:string;
//     species:string;
//     sound:string
//     constructor(name:string,species:string,sound:string){
//         this.name=name
//         this.species=species
//         this.sound=sound
//     }

//     makeSound(){
//         console.log(`${this.name} is making sound: ${this.sound}`);
        
//     }

// }
class Animal {
    constructor(
        public name: string,
        public species: string,
        public sound: string
    ) {}

    makeSound(): void {
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}

const dog = new Animal("Doggy", "dog", "bark");
const cat = new Animal("Catty", "cat", "meow");

console.log(dog.name);
dog.makeSound();
cat.makeSound();



