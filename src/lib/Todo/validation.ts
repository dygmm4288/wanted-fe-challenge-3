export const validateInput = (value: string) => {
  return !!value.trim() && value.length <= 25;
};
