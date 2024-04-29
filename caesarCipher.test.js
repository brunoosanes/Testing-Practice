const caesarCipher = require("./caesarCipher");

describe("testing for caesarCipher functions", () => {
  test("test if word with a shift factor of 3 returns zrug", () => {
    expect(caesarCipher("word", 3)).toBe("zrug");
  });

  test("test if abcdefghijklmnopqrstuvwxyz with a shift factor of 40 returns opqrstuvwxyzabcdefghijklmn", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 40)).toBe(
      "opqrstuvwxyzabcdefghijklmn"
    );
  });

  test("test if ABCDEFGHIJKLMNOPQRSTUVWXYZ with a shift factor of 40 returns OPQRSTUVWXYZABCDEFGHIJKLMN", () => {
    expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 40)).toBe(
      "OPQRSTUVWXYZABCDEFGHIJKLMN"
    );
  });

  test("test if AbCdEf with a shift factor of 3 returns DeFgHi", () => {
    expect(caesarCipher("AbCdEf", 3)).toBe("DeFgHi");
  });

  test("test if ##%%AbCdEf$$&& with a shift factor of 3 returns ##%%DeFgHi$$&&", () => {
    expect(caesarCipher("##%%AbCdEf$$&&", 3)).toBe("##%%DeFgHi$$&&");
  });
});
