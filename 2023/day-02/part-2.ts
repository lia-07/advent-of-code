import { readFile } from "fs/promises";

export function solve(input: string): any {
  let gamesMinCubesPowers: Array<number> = [];

  const numberOfCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const games = input.split("\n");

  // loop over all games
  for (let i = 0; i < games.length; i++) {
    const rounds = games[i].split(": ")[1].split("; ");

    let needed = { red: 0, green: 0, blue: 0 };

    // loop over all rounds in a game
    game: for (let j = 0; j < rounds.length; j++) {
      const cubes = rounds[j].split(", ");

      // loop over all cubes in a round
      for (let k = 0; k < cubes.length; k++) {
        const cubeData = cubes[k].split(" ");
        const cubeNumber = Number(cubeData[0]);
        const cubeColor = cubeData[1];

        switch (cubeColor) {
          case "red":
            needed.red = Math.max(needed.red, cubeNumber);
            break;
          case "green":
            needed.green = Math.max(needed.green, cubeNumber);
            break;
          case "blue":
            needed.blue = Math.max(needed.blue, cubeNumber);
            break;
          default:
            break;
        }
      }
    }
    gamesMinCubesPowers.push(needed.red * needed.green * needed.blue);
  }

  return gamesMinCubesPowers.reduce((section, a) => section + a, 0);
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
