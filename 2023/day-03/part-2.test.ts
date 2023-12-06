import { expect, test } from "bun:test";

import { solve } from "./part-2";

// Fill in the test data below
const testInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const testAnswer = 467835;

test("part-2", () => {
  expect(solve(testInput)).toBe(testAnswer);
});
