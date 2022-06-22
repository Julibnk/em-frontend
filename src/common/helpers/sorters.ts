const stringSorter = (firstValue: string, secondValue: string): number => {
  if (!firstValue) return -1;
  if (!secondValue) return 1;

  return firstValue.localeCompare(secondValue);
};

const numberSorter = (
  firsNumber: number | undefined,
  secondNumber: number | undefined
): number => {
  const a = firsNumber ?? 0;
  const b = secondNumber ?? 0;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export { stringSorter, numberSorter };
