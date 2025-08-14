// function CreatePerson(name , age) {//this acctory function  has a disadvantages as it create a copsy of the object for evwhichery new person  is a very ineffecient way fo storing data.

//     const person = {
//         age: age,
//         name: name,
//         talk() {
//             console.log(`Hi, i am ${name}`);
//         },

//     }
//     return person;
// }

// let p1  = CreatePerson("raj", 21);

// --------------------------------------- New Operator-----------------------------------------

//Constructor - doesn't return anything & start with Capital letter

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`hi, i am ${name}`)
}

let p1 = new Person("raj", 21);

