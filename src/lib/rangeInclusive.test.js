import rangeInclusive, { inRange } from "./rangeInclusive";

describe("rangeInclusive", () => {
  it("lists numbers from start to end", () => {
    expect(rangeInclusive(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it("can step by something other than 1", () => {
    expect(rangeInclusive(3, 12, 3)).toEqual([3, 6, 9, 12]);
    expect(rangeInclusive(3, 0, -1)).toEqual([3, 2, 1, 0]);
  });

  it("gives empty array if start > end", () => {
    expect(rangeInclusive(1, -10)).toEqual([]);
  });
});

describe("inRange", () => {
  it("determines if n is between start and end", () => {
    expect(inRange(3, 1, 5)).toBe(true);
    expect(inRange(-3, -1, -5)).toBe(true);
    expect(inRange(7, 2, 4)).toBe(false);
    expect(inRange(-7, -2, -4)).toBe(false);
    expect(inRange(2, 2, 2)).toBe(true);
    expect(inRange(0, -5, 5)).toBe(true);
  });
});
