"use strict";
//########################Chapter-11#######################//
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = []; // type ကို Invoice ကြေ ြငာထားလို့ Invoice class ကို invoke လုပ်ထားတဲ့ varible ပဲ ထည့်လို့ရမယ်
//invoices.push('name'); // error 
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'yoshi'; // overwrite mario
invTwo.amount = 400; // overwrite 300
console.log(invOne, invTwo);
console.log(invoices);
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
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});