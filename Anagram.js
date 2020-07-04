const anagram = (strA, strB) => {
  //Character Map helper function
  const buildCharMap = (string) => {
    const charMap = {};
    for (let char of string) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  };
  //Character Maps
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
};
