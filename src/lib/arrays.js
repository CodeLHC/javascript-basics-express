const getNthElement = (index, array) => {
  if (index >= array.length) {
    const newIndex = index - array.length;
    return array[newIndex];
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => {
    return string.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(word => {
    return word
      .split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  return numbers.filter(number => {
    return number % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  return array.filter((element, i) => {
    return i !== index;
  });
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    const vowels = 'aeiou';
    return vowels.includes(string.toLowerCase()[0]);
  });
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => {
    return acc + number;
  });
};

const sortByLastLetter = strings => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return strings.sort((current, next) => {
    const currentLastLetterIndex = current.length - 1;
    const currentLastLetter = current[currentLastLetterIndex];
    const nextLastLetterIndex = next.length - 1;
    const nextLastLetter = next[nextLastLetterIndex];
    const currentIndexInAlphabet = alphabet.indexOf(currentLastLetter);
    const nextIndexInAlphabet = alphabet.indexOf(nextLastLetter);
    return currentIndexInAlphabet - nextIndexInAlphabet;
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
