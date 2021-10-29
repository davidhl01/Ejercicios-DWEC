class Person{
    constructor(name,age){
        this.name = name;
        this.age = age; 
        this.stomach = [];
    }

    eat(comida){
        if (this.stomach.length > 10){
            return "No puedes comer más";
        }else{
            this.stomach.push(comida);
        }
    };

    poop(){
        this.stomach = [];
    };

    tostring(){
        return this.name + ', ' + this.age;
    };

};

let p1 = new Person("David",20);

p1.eat('arroz');
p1.poop();
console.log(p1.tostring());
console.log(p1.stomach);

