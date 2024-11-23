export const arePropsSameBy = (propKey) => (prevProps, nextProps) => {
  const prevValue = prevProps?.[propKey];
  const nextValue = nextProps?.[propKey];

  return prevValue === nextValue;
};

export function compareAscending(value1, value2, isDate = false) {
  if (isDate) {
    return new Date(value1) - new Date(value2);
  }
  return value1 - value2;
}

export function compareDescending(value1, value2, isDate = false) {
  if (isDate) {
    return new Date(value2) - new Date(value1);
  }
  return value2 - value1;
}
