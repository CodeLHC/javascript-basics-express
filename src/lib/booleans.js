function negate(a) {
  // return !a - to return opposite of a
  if (a === true) {
    return false;
  }
  return true;
}

function both(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  return (a || b) && !(a && b);
}

function truthiness(a) {
  return !!a;
  // condensed using two NOT operators (!!) together to create a double negation. First evaluates the value to a boolean that will be the opposite of what it actually is, eg passing in a string (which is a truthy value) will be made false by one of the ! operators, then the second ! will flip that to true, and so evaluating the string as being truthy.
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  if (a % 2 === 0) {
    return false;
  }
  return true;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  const vowels = 'aeiou';
  const lowerCaseString = string.toLowerCase();
  for (let i = 0; i < vowels.length; i + 1) {
    if (lowerCaseString.includes(vowels[i])) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
