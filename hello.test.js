const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the Office Hours in the terminal! An additional update is made for assignment 4.2.");
  });
});
