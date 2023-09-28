//########################Chapter-17#######################//
// enum ResourceType{ BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: ResourceType.BOOK,
//     data: {name: 'shaun'},
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: ResourceType.PERSON,
//     data: ['bread','milk','toilet roll']
// }

// console.log(docThree,docFour);

//########################Chapter-16#######################//
// GENERICS

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: 'yoshi', age: 40});

// // With Interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'preson',
//     data: {name: 'shaun'},
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread','milk','toilet roll']
// }

// console.log(docThree,docFour);

//########################Chapter-13#######################//
// interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: "shaun",
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent' , amount);
//         return amount;
//     }
// }

// const greetPerson = (person: IsPerson) => {
//     console.log('hello ' , person.name);
// }

// greetPerson(me);
// console.log(me);

//########################Chapter-14#######################//
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi','web work', 250);
// docTwo = new Payment('mario','pluming work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

//########################Chapter-11#######################//
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = []; // type ကို Invoice ကြေ ြငာထားလို့ Invoice class ကို invoke လုပ်ထားတဲ့ varible ပဲ ထည့်လို့ရမယ်
// //invoices.push('name'); // error 
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv =>{
//     console.log(inv.client, inv.amount, inv.format());
// });

// invOne.client = "yoshi" // error because of this client is readonly modifier

// invOne.client = 'yoshi'; // overwrite mario
// invTwo.amount = 400; // overwrite 300


// console.log(invOne,invTwo);
// console.log(invoices);


//########################Chapter-10#######################//
// const anchor = document.querySelector('a')!;

// if(anchor){
//     console.log(anchor.href);
// }

// console.log(anchor.href);

import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//input
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    
    list.render(doc, type.value, 'end');
})





