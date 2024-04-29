const capitalize = require("./capitalize");

test("properly capitalize the first letter of word 'word' ", () => {
  expect(capitalize("word")).toBe("Word");
});
