import { readFile } from "fs/promises";

export function solve(input: string): any {
  const lines = input.split("\n");
  let numbers = [];
  for (let i = 0; i < lines.length; i++) {
    let firstDigit: string = "";
    let lastDigit: string = "";
    for (let j = 0; j < lines[i].length; j++) {
      if (/\d/.test(lines[i].charAt(j))) {
        firstDigit = lines[i].charAt(j);
        break;
      }
    }

    for (let j = lines[i].length - 1; j >= 0; j--) {
      if (/\d/.test(lines[i].charAt(j))) {
        lastDigit = lines[i].charAt(j);
        break;
      }
    }

    numbers.push(Number(firstDigit + lastDigit));
  }
  return Number(numbers.reduce((section, a) => section + a, 0));
}

// so bun test doesn't execute it (i know, right?)
if (Bun.argv[2] === "solve") {
  readFile("in.txt", "utf-8")
    .then((inputFile) => {
      console.log(solve(inputFile));
    })
    .catch((error) => {
      console.error("❌ " + error);
    });
}
