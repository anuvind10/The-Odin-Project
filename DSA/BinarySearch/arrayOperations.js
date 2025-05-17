export function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let leftArr = mergeSort(arr.slice(0, arr.length / 2));
  let righArr = mergeSort(arr.slice(arr.length / 2));

  return merge(leftArr, righArr);
}

function merge(leftArr, rightArr) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      mergedArray.push(leftArr[i]);
      i++;
    } else {
      mergedArray.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    mergedArray.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    mergedArray.push(rightArr[j]);
    j++;
  }

  return mergedArray;
}

export function removeDuplicate(array) {
  if (array.length === 0) return [];

  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[j] !== array[i]) {
      i++;
      array[i] = array[j];
    }
  }

  return array.slice(0, i + 1);
}
