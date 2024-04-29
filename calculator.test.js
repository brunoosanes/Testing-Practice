const calculator = require("./calculator");

describe("testes básicos de soma, subtração, divisão e multiplicação", () => {
  test("testar se 1 + 1 = 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("testar se 2 - 1 = 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("testar se 4 / 2 = 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("testar se 2 * 2 = 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  
});
