export const parseFloatSafe = (value: number | null): number | null => {
  if (value === 0 || value === null) return null;

  try {
    const fixedValue = value.toFixed(1);
    return parseFloat(fixedValue);
  } catch (err) {
    return null;
  }
};

export default {};
