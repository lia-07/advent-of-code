import { readFile } from "fs/promises";

export function solve(input: string): any {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""));

  const done = Array.from({ length: grid.length }, () =>
    Array(Math.max(...grid.map((row) => row.length))).fill(false)
  );

  let partNumbers: number[] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!/\d/.test(grid[i][j]) && grid[i][j] != ".") {
        let received = getGearRatio(grid, done, i, j);
        partNumbers.push(received);
      }
    }
  }
  return partNumbers.reduce((section, a) => section + a, 0);
}

function findFullNumber(
  grid: string[][],
  done: boolean[][],
  row: number,
  col: number
): number {
  let numberString = grid[row][col];
  done[row][col] = true;
  let i = 1;

  while (/\d/.test(grid[row][col - i])) {
    numberString = grid[row][col - i] + numberString;
    done[row][col - i] = true;

    i++;
  }

  i = 1;
  while (/\d/.test(grid[row][col + i])) {
    numberString = numberString + grid[row][col + i];
    done[row][col + i] = true;
    i++;
  }

  return Number(numberString);
}

function getGearRatio(
  grid: string[][],
  done: boolean[][],
  row: number,
  col: number
): number {
  let numbersFound = [];
  // loop rows
  for (let i = 1; i >= -1; i--) {
    // loop columns
    for (let j = -1; j <= 1; j++) {
      if (/\d/.test(grid[row + i][col + j])) {
        if (done[row + i][col + j]) break;

        numbersFound.push(findFullNumber(grid, done, row + i, col + j));
      }
    }
  }
  if (numbersFound.length > 1) {
    return numbersFound.reduce(
      (accumulator, currentValue) => accumulator * currentValue
    );
  }
  return 0;
}

// so bun test doesn't execute it (i know, right?)
if (Bun.argv[2] === "solve") {
  readFile("in.txt", "utf-8")
    .then((inputFile) => {
      console.log(solve(inputFile));
    })
    .catch((error) => {
      console.error("❌ Error reading input: " + error);
    });
}
