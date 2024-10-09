export function currencyToNumber(currencyString: string) {
  // Remover símbolo de moeda "R$"
  const cleanString = currencyString.replace('R$', '');

  // Remover pontos de milhar
  const numericString = cleanString.replace(/\./g, '');

  // Substituir a vírgula decimal por ponto decimal
  const dotDecimalString = numericString.replace(',', '.');

  // Converter para um número
  const numericValue = parseFloat(dotDecimalString);

  return numericValue;
}
