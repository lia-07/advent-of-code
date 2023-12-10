import { readFile } from "fs/promises";

export function solve(input: string): any {
  const cards = input.trim().split("\n");

  let cardsPoints: number[] = [];

  cards.forEach((card) => {
    const cardData = card.split(": ")[1];
    const winningNumbers = cardData.split(" | ")[0].trim().split(/\s+/);
    const myNumbers = cardData.split(" | ")[1].trim().split(/\s+/);

    let cardPoints = 0;
    myNumbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        cardPoints == 0 ? cardPoints++ : (cardPoints *= 2);
      }
    });
    cardsPoints.push(cardPoints);
  });
  return cardsPoints.reduce((section, a) => section + a, 0);
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
