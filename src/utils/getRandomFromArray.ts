export function getRandomFromArray<T = any>(
  arr: Array<T>,
  atualObject?: T | null,
): T {
  if (!atualObject) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const filteredArr = arr.filter(item => item !== atualObject);

  return filteredArr[Math.floor(Math.random() * filteredArr.length)];
}

export function getRandomElementsFromArray<T = any>(
  arr: Array<T>,
  numElements: number,
) {
  if (numElements >= arr.length) {
    return arr.slice(); // Retorna uma cópia do array original, pois estamos selecionando todos os elementos
  }

  const shuffledArray = arr.slice(); // Cria uma cópia do array original para não afetar o array original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, numElements);
}

export function adjustArray(baseArry: any[], inputArray: any[]) {
  const maxLength = inputArray.length;

  const adjustedArray = baseArry.filter(num => parseInt(num) <= maxLength);
  return adjustedArray;
}
