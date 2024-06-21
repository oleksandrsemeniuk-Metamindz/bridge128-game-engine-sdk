export function stringifyIfNeeded(value: string | object) {
  return typeof value === 'string' ? value : JSON.stringify(value);
}
