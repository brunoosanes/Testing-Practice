const calculator = {
  add(...args) {
    return args.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

module.exports = calculator;
