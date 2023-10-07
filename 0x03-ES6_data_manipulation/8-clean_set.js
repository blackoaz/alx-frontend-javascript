export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input types');
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const resultString = filteredValues.map((value) => value.slice(startString.length)).join('-');

  return resultString;
}
