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
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'pluming work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
//########################Chapter-11#######################//
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = []; // type ကို Invoice ကြေ ြငာထားလို့ Invoice class ကို invoke လုပ်ထားတဲ့ varible ပဲ ထည့်လို့ရမယ်
//invoices.push('name'); // error 
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
