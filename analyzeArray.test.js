const analyzeArray = require("./analyzeArray");

describe("Check if the properties work as intended", () => {
  test("Check if the average of the array [100, 100, 100, 100] is 25", () => {
    expect(analyzeArray([100, 100, 100, 100]).average()).toBe(100);
  });

  test("Check if the average of the array [100, 100, 100, 100] is 25", () => {
    expect(analyzeArray([2, 6, 8, 16]).average()).toBe(8);
  });

  test('Check to see if "min" of [2, 6, 8, 16] is 2', () => {
    expect(analyzeArray([2, 6, 8, 16]).min()).toBe(2);
  });

  test('Check to see if "max" of [2, 6, 8, 16] is 16', () => {
    expect(analyzeArray([2, 6, 8, 16]).max()).toBe(16);
  });

  test('Check to see if "length" of [2, 6, 8, 16] is 4', () => {
    expect(analyzeArray([2, 6, 8, 16]).length).toBe(4);
  });
});
