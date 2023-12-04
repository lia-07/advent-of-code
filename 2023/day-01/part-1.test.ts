import { expect, test } from "bun:test";

import { solve } from "./part-1";

// Fill in the test data below
const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const testAnswer = 142;

test("part-1", () => {
  expect(solve(testInput)).toBe(testAnswer);
});
