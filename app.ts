// // let message: string = 'Hello, World!';

// // // create a new header 1 element

// // let heading = document.createElement('h1');
// // heading.textContent = message;

// // // add heading to the document

// // document.body.appendChild(heading);


// // console.log('Hello'.length);
// // console.log('Hello'.toLowerCase());


// // console.log('Hello'.toUpperCase());


// // const heading = document.querySelector('h1');


// // syntax of the type annotation is like this 

// // let counter: number = 1;
// // console.log(counter);

// //cannot assign one type to another

// // assigning array of strings

// let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
// console.log(names);

// //assigning array of objects


// let person :{
//   name: string;
//   age: number;
// }

// person={
//   name: 'John',
//   age: 25,
// };

// console.log(person);


// //function arguments and return types

// let greeting : (name:string) => string;

// greeting = function(name:string){
//   return `Hi ${name}`; 
// }

// document.addEventListener('click', function (event) {
//     console.log(event.button); 
// });


// the following shows some of the decimal numbers


let counter: number = 0;
let x: number = 100;
let y: number = 100;
let octal: number = 0o10;
console.log(octal);