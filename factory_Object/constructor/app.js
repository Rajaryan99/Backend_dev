class Mammal {
    // base class / parent
    Constructor(name) {
        this.name = name;
        this.type = 'Warm-blooded'

    }

    eat() {
        console.log('I am eating')
    }
}

class dog extends Mammal {
    //child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log('wooff....');
    }
}

class cat extends Mammal {
    constructor(name) {
        super(name);

    }

    meow() {
        console.log('meow..meow...')
    }
}