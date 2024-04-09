export const getNumbersInRange = (min: number, max: number, isFloat?: boolean) => {
  const result = Math.random() * (max - min + 1) + min;
  return isFloat ? +result.toFixed(6) : Math.floor(result);
};

export const getRandomPredominantPollenType = () => {
  const pollens = ['Trees', 'Weeds', 'Molds', 'Grasses'];
  const randomIndex = Math.floor(Math.random() * pollens.length);

  return pollens[randomIndex];
};
