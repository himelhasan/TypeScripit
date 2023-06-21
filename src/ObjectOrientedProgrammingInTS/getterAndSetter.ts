class BankAccount {
  id: number;
  name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  // getter/setter methods

  get balance(): number {
    return this._balance;
  }

  set deposit(value: number) {
    this._balance = this._balance + value;
  }

  getBalance(): number {
    // console.log(`My balance: ${this._balance}`);
    return this._balance;
  }
  addBalance(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(333, "Himel", 234);
myAccount.getBalance();

console.log("getter", myAccount.balance);
myAccount.deposit = 36;
console.log(myAccount.getBalance());

export {};
