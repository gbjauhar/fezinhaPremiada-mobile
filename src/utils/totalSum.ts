import {formatValue} from './formatValue';

export function totalSum(e) {
  let value = 0;
  for (let i = 0; i < e.length; i++) {
    value += Number(e[i].price);
  }
  return formatValue(value);
}
