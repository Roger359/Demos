/* Class Syntax*/
class Animal {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }

  /* Methods */
  sound() {
    console.log("I make sounds becasuse I am alive");
  }
  greet() {
    console.log(`my name is ${this.name}`);
  }
}

/* inheritance in classes*/
class Dog extends Animal {
  constructor(name, genre, size) {
    /* call the constructuor of the father class*/
    super(name, genre);
    this.size = size;
    this.breed = null;
  }

  sound() {
    console.log("Guauuu Guauuu!!");
  }

  // a static methods can be executed whitout the need for an instance of the class
  static whatYouAre() {
    console.log("I am a dog, the best friend of the human be");
  }

  /* the setters and getters are specials methods that allow us set and 
  get the attribiutes values of our class*/

  get getBreed() {
    return this.breed;
  }

  set setBreed(breed) {
    this.breed = breed;
  }
}


Dog.whatYouAre(); // output: 'I am a dog, the best friend of the human be'

//Instances of the class

const mimi = new Animal("mimi", "female"),
  scooby = new Dog("scooby", "male", "gigant");

mimi.greet(); // --> output: 'My name is mimi'
scooby.sound(); // --> output: "Guauuu Guauuu!!"
scooby.setBreed = 'Chihuahua'
console.log(scooby.getBreed)


