const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function shuffleArr<T>(arr: T[]): T[] {
  return arr.sort(() => randomInt(0, 100) - randomInt(0, 100));
}

function capitalize(str: string) {
  return str.replace(/^\w/, (char) => char.toUpperCase());
}

export { shuffleArr, capitalize };
