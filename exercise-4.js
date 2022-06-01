function calculate() {
    let total = 0;
    return {
      add: function(number) {
        total = total + number;
        return this;
      },
      sub: function(number) {
        total = total - number ;
        return this;
      },
      multiply: function(number) {
        total = total * number;
        return this;
      },
      divide: function(number) {
        total = total / number;
        return this;
      },
      printResult: function () {
        return total;
      }
   }
  };

const calculator = calculate();
const total = calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(total);