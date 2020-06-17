export const removePropertyQuotes = (jsonString: string) => {
  return jsonString.replace(/"([^"]+)":/g, '$1:');
};
