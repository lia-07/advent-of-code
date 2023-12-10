import { readFile } from "fs/promises";

export function solve(input: string): any {
  const cards: string[] = input.trim().split("\n");

  let cardInstances: number[] = Array(cards.length).fill(1);

  cards.forEach((card, index) => {
    const numberOfChildren = findWinningNumbers(card);

    for (let i = 0; i < numberOfChildren; i++) {
      cardInstances[index + i + 1] += cardInstances[index];
    }
  });

  return cardInstances.reduce((section, a) => section + a, 0);
}

function findWinningNumbers(card: string): number {
  const cardData = card.split(": ")[1];
  const winningNumbers = cardData.split(" | ")[0].trim().split(/\s+/);
  const myNumbers = cardData.split(" | ")[1].trim().split(/\s+/);

  let cardPoints = 0;
  myNumbers.forEach((number) => {
    if (winningNumbers.includes(number)) {
      cardPoints++;
    }
  });
  return cardPoints;
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
