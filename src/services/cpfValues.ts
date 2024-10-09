export function formatValue(value: String) {
  const cleanedValue = value.replace(/[^0-9]/g, '');

  if (cleanedValue.length > 11) {
    return cleanedValue.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      '$1.$2.$3/$4-$5',
    );
  } else {
    return cleanedValue.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
      '$1.$2.$3-$4',
    );
  }
}

export function testCPF(strCPF: String) {
  strCPF = strCPF.replace(/[^\d]/g, '');

  let sum;
  let mod;
  sum = 0;
  if (strCPF === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }
  mod = (sum * 10) % 11;

  if (mod === 10 || mod === 11) {
    mod = 0;
  }
  if (mod !== parseInt(strCPF.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }
  mod = (sum * 10) % 11;

  if (mod === 10 || mod === 11) {
    mod = 0;
  }
  if (mod !== parseInt(strCPF.substring(10, 11))) {
    return false;
  }
  return true;
}

export function testCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  let sum = 0;
  let weight = 2;
  for (let i = 11; i >= 0; i--) {
    sum += parseInt(cnpj.charAt(i)) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  let verify = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (parseInt(cnpj.charAt(12)) !== verify) {
    return false;
  }

  sum = 0;
  weight = 2;
  for (let i = 12; i >= 0; i--) {
    sum += parseInt(cnpj.charAt(i)) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  verify = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (parseInt(cnpj.charAt(13)) !== verify) {
    return false;
  }

  return true;
}
