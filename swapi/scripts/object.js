// // object literal, JSON
// let person = {
//   name: 'fred',
//   age: 37
// }

// let p1 = person;
// let p2 = person;

// p1.age = 38;
// p2.age = 36;

// console.log(person.age); // 36

// // object constructor
// function Person() {
//   this.name = 'fred';
//   this.age = 37;
// }

// let p3 = new Person(); // person
// let p4 = new Person(); // person
// let p5 = Person; // undefined

// p3.name = 'larry';
// p4.name = 'jeremy';
// p5.name = 'samuel';

// console.log(p5.name); // undefined, Person

// // closure
// class Person {
//   private string name;

//   getName() {
//     return name;
//   }

//   setName(value) {
//     name = value;
//   }
// }

// let p = new Person();

// p.setName('fred');

function Product() {
  let name = 'lenovo';

  return function (input) {
    if (input) {
      name = input;
    }

    return name;
  }
}

// class Product
// {
//   private string name = 'lenovo';

//   public string Property
//   {
//     get
//     {
//       return name
//     }
//   }
// }

let productName = Product();
let theName = productName('fred');
theName = productName();

let productName2 = Product();
let theName2 = productName2();


console.log(theName); // fred
console.log(theName2); // lenovo
