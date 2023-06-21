class BankAccount {
  id: number;
  name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance() {
    console.log(`My balance: ${this._balance}`);
  }
  addBalance(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(333, "Himel", 234);

console.log(myAccount);

export {};
