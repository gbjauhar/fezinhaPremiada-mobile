export function formatValue(value?: number) {
  if (value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return Number(0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatDate(value: string | Date) {
  const d = new Date(value);
  const hour = d.getUTCHours();
  const minute = d.getUTCMinutes();
  return (
    d.toLocaleDateString('en-GB', {timeZone: 'utc'}) + ` - ${hour}:${minute}`
  );
}
