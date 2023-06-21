"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My balance: ${this._balance}`);
    }
    addBalance(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(333, "Himel", 234);
console.log(myAccount);
