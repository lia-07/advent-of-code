import { readFile } from "fs/promises";

// needed a little help from https://www.reddit.com/r/adventofcode/comments/1883ibu/comment/kbrd7t7/?utm_source=share&utm_medium=web2x&context=3
// most code is still my own
export function solve(input: string): any {
  const sanitisedInput = input
    .replace(/one/g, "one1one")
    .replace(/two/g, "two2two")
    .replace(/three/g, "three3three")
    .replace(/four/g, "four4four")
    .replace(/five/g, "five5five")
    .replace(/six/g, "six6six")
    .replace(/seven/g, "seven7seven")
    .replace(/eight/g, "eight8eight")
    .replace(/nine/g, "nine9nine");

  const lines = sanitisedInput.split("\n");
  console.log(lines);
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
      console.error("❌ Error reading input: " + error);
    });
}
