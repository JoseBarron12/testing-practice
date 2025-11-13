const capitalize = (string) => {
  if(typeof string != "string") throw new TypeError("Expected a string");
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const reverseString = (string) => {
  if(typeof string != "string") throw new TypeError("Expected a string");

  if(string.length <= 1) // String is reversed
  {
    return string;
  }

  // Split string into two O(n log (n)) [Merge sort]
  const middleIndex = (string.length % 2 != 0) ? Math.floor(string.length / 2) : string.length / 2 ;
  const leftString = string.slice(0,middleIndex); 
  const rightString = string.slice(middleIndex, string.length);

  const reversedLeft = reverseString(leftString); // Reverse left
  const reversedRight = reverseString(rightString); // Reverse Right

  return reversedRight + reversedLeft; // Reverse string by making right side go before original left side of string

}


export {capitalize, reverseString}

