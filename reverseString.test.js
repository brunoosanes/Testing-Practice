const reverseString = require("./reverseString");

describe("testes de reversão de string", () => {
  test("A string word vira drow", () => {
    expect(reverseString("word")).toBe("drow");
  });
});
