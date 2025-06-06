const getValidMoves = ([x, y]) => {
  const moves = [
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
  ];

  return moves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);
};

const knigtMoves = (start, end) => {
  let queue = [[start]];
  let visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x == end[0] && y == end[1]) {
      console.log(
        `You made it in ${path.length - 1} moves! Here is your path:`
      );
      path.forEach((position) => {
        console.log(position);
      });
      return path;
    }

    const key = `${x}, ${y}`;
    if (visited.has(key)) continue;
    visited.add(key);

    for (let move of getValidMoves([x, y])) {
      queue.push([...path, move]);
    }
  }

  return null;
};

console.log(knigtMoves([0, 0], [3, 3]));
