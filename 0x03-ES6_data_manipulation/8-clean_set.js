export default function cleanSet(set, startString) {
    const resultArray = [];
    set.forEach(value => {
      if (startString === undefined || (startString !== '' && value.startsWith(startString))) {
        resultArray.push(value.substring(startString.length));
      }
    });
    return resultArray.join('-');
  }
