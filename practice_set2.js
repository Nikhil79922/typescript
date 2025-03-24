//1. solution :- 
var Bankdetails = /** @class */ (function () {
    function Bankdetails(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    Bankdetails.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        return ("Balance after deposit".concat(this.balance));
    };
    Bankdetails.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
        return ("Balance after withdraw: ".concat(this.balance));
    };
    Bankdetails.prototype.getbalance = function () {
        return ("Total Balance left: ".concat(this.balance));
    };
    return Bankdetails;
}());
var B = new Bankdetails(1, 100);
console.log(B.deposit(20));
console.log(B.withdraw(70));
console.log(B.getbalance());
