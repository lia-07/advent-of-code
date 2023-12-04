import { expect, test } from "bun:test";

import { solve } from "./part-2";

// Fill in the test data below
const testInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const testAnswer = 281;

test("part-2", () => {
  expect(solve(testInput)).toBe(testAnswer);
});
