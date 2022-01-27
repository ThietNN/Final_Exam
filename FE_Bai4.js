class Animal{
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(n){
        this.name = n;
    }
    setWeight(w){
        this.weight = w;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return "name: " + this.name + ", weight: " + this.weight;
    }
}
let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();


let objAnimal2 = new Animal("Cat",5);
objAnimal2.setName("Mouse");


