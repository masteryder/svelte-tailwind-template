import { add } from "../__libs/calc";

describe("test add function", () => {
  it("should return 3 for add(1,2)", () => {
    expect(add(1, 2)).toBe(3);
  });
it("should return 0 for add(999,-999)", () => {
    expect(add(999, -999)).toBe(0);
  });
});
