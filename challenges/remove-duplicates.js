function removeDuplicates(arr) {
  const uniqueElements = {};

  for(let i = 0; i < arr.length; i++) {

    if(uniqueElements[arr[i]]) {
      arr.splice(i, 1);

    } else {
      uniqueElements[arr[i]] = 1;
    }
  }
  return arr;
}

module.exports = removeDuplicates;
