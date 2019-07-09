const removeDuplicates = require('./remove-duplicates');

function intersection(arrOne, arrTwo) {
  const singularArrayOne = removeDuplicates(arrOne);
  const singularArrayTwo = removeDuplicates(arrTwo);
  const commonValues = [];

  for(let i = 0; i < singularArrayOne.length; i++) {
    for(let j = 0; j < singularArrayTwo.length; j++) {
      if(singularArrayOne[i] === singularArrayTwo[j]) {
        commonValues.push(singularArrayOne[i]);
      }
    }
  }
  return commonValues;
}

module.exports = intersection;







// var commonValues = [];
// var i, j;
// var arr1Length = arr1.length;
// var arr2Length = arr2.length;

// for (i = 0; i < arr1Length; i++) {
//     for (j = 0; j < arr2Length; j++) {
//         if (arr1[i] === arr2[j]) {
//             commonValues.push(arr1[i]);
//         }
//     }
// }