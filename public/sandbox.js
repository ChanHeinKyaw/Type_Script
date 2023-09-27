"use strict";
//########################Chapter-1########################//
// const charcter = "lario"
// console.log(charcter);
// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//     console.log(input);
// })
//########################Chapter-2########################//
// const charcter = "mario";
// const age = 30;
// const isBlackBelt = false;
// //character  = 20;
// charcter = 'luigi';
// //age  = 'yoshi';
// age = 40;
// //isBlackBelt  = 'yes';
// isBlackBelt = true;
// //boolean,string,number,array,object
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// // console.log(circ("Hello")); //Error => NaN
// console.log(circ(23)); // Result => 72.25663103256524
//########################Chapter-3########################//
//Array 
// let names = ['luigio','mario','yoshi'];
// names.push('toad');// fine
// names.push(3);// fine
// names[0] = 3; // Sould Not Number
// let numbers = [10,20,30,40];
// numbers.push(25); //fine
// numbers.push('hello'); // fine
// numbers[0] = 'hello'; // Sould Not String
// let mixed = ['ken',4,'chun-li',8,9];
// mixed.push(25); //fine
// mixed.push('hello'); // fine
// mixed[0] = 3; // fine
// console.log(mixed);
//Object
// let ninja = {
//     name: 'mario',
//     belt : 'black',
//     age:30,
// }
// ninja.age = 40; // Fine
// ninja.name = 'ryu', // Fine
// ninja.age = '30'; // Should Not String
// ninja.skills = ['fighting','sneaking'] // Array does not exit
// အပေါ်မှာ ninja object ရဲ့ property တွေက ၃ ခု ရှိပါတယ် အောက်မှာ ninja object ကို overwrite လုပ်တော့ ၂ ခု ပဲ လုပ်ထားလို့ error ပြနေပါတယ်
// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
// }
// အပေါ်မှာ ninja object ရဲ့ property တွေက ၃ ခု ရှိပါတယ် အောက်မှာ ninja object ကို overwrite လုပ်တော့ ၃ ခု ပဲ လုပ်ထားလို့ error မပြပါဘူး
// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
//     age: 40,
// }
// console.log(ninja);
//########################Chapter-4########################//
//Explicit Types
// let character: string;
// let age: number;
// let isloggedIn: boolean;
// //age = 'luigi';
// age = 30;
// //isloggedIn = 25;
// isloggedIn = true;
// //arrays 
// let ninjas: string[] = [];
// ninjas.push('hello');
// console.log(ninjas);
// //union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);
// let uid: string|number;
// uid = '123';
// uid = 123;
// // Objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi',age: 30};
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string,
// }
// ninjaTwo = {name: "mario",age: 20,beltColour:'black',skills: []}
//########################Chapter-5########################//
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = {name: 'luigi'};
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);
// let ninja: {name: any,age: any}
// ninja = {name: 'yoshi',age: 25};
// console.log(ninja);
// ninja = {name: 25,age: 'yoshi'};
// console.log(ninja);
//########################Chapter-7########################//
// let greet: Function;
// // greet = 'hello'; // Error
// greet = () => {
//     console.log("Hello,again")
// }
// const add = (a: number, b: number, c?: number | string = 10): void => {
//     console.log(a + b);
//     console.log(c);
// }
// // add('Hello' , 'world'); Error
// add(2 , 3 , '15');
// const mins = (a: number, b: number): number => {
//     return a + b;
// }
// let result = mins(3, 3);
// console.log(typeof result);
// const mins = (a: number, b: number): number => {
//     return a + b;
// }
// let result = mins(3, 3);
// console.log(typeof result);
//########################Chapter-8########################//
// type StringOrNum = string | number;
// type objWithName = {name: string, uid: StringOrNum};
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }
// const greetAgain = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }
//########################Chapter-9########################//
//example-1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// //example-2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if(action === 'add'){
//         return numOne + numTwo;
//     }else{
//         return numOne - numTwo;
//     }
// }
// //example-3
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
