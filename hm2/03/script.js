var Calculator = function (firstNumber) {
    this.firstNumber = firstNumber;
};

Calculator.prototype.sum = function () {
    var result = this.firstNumber;
    for (var item of arguments) {
        result += item;
    }
    return result;
};

Calculator.prototype.dif = function () {
    var result = this.firstNumber;
    for (var item of arguments) {
        result -= item;
    }
    return result;
};

Calculator.prototype.div = function () {
    var result = this.firstNumber;
    for (var item of arguments) {
        if (item != 0) result = result / item;
    }
    return result;
};

Calculator.prototype.mul = function () {
    var result = this.firstNumber;
    for (var item of arguments) {
        result = result * item;
    }
    return result;
};

var myCalculator = new Calculator(100);

console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));