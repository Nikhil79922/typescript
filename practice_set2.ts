//1. solution :- 

class Bankdetails{
public accountNumber:number;
 private balance:number;

 constructor(accountNumber:number,balance:number){
    this.accountNumber=accountNumber;
    this.balance=balance;
 }
  deposit(amount:number):string{
     this.balance=this.balance+amount;
     return (`Balance after deposit${this.balance}`);
 }
 withdraw(amount:number):string{
    this.balance=this.balance-amount;
    return(`Balance after withdraw: ${this.balance}`);
 }

 getbalance():string{
    return(`Total Balance left: ${this.balance}`);
 }
}
const B=new Bankdetails(1,100);
console.log(B.deposit(20))
console.log(B.withdraw(70))
console.log(B.getbalance())


