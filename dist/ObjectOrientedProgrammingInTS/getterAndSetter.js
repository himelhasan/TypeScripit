"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter/setter methods
    get balance() {
        return this._balance;
    }
    set deposit(value) {
        this._balance = this._balance + value;
    }
    getBalance() {
        // console.log(`My balance: ${this._balance}`);
        return this._balance;
    }
    addBalance(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(333, "Himel", 234);
myAccount.getBalance();
console.log("getter", myAccount.balance);
myAccount.deposit = 36;
console.log(myAccount.getBalance());
