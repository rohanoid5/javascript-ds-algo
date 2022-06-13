const merge = function (low, mid, high, arr) {
  let aux = [];
  for (let i = low; i < high + 1; i++) {
    aux[i] = arr[i];
  }

  let left = low;
  let right = mid + 1;

  for (let i = low; i < high + 1; i++) {
    if (left > mid) {
      arr[i] = aux[right];
      right += 1;
    } else if (right > high) {
      arr[i] = aux[left];
      left += 1;
    } else if (aux[left] > aux[right]) {
      arr[i] = aux[right];
      right += 1;
    } else {
      arr[i] = aux[left];
      left += 1;
    }
  }
};

const sort = function (low, high, arr) {
  if (high <= low) {
    return;
  }

  let mid = low + Math.floor((high - low) / 2);

  sort(low, mid, arr);
  sort(mid + 1, high, arr);
  merge(low, mid, high, arr);
};

const mergeSort = function (arr) {
  let low = 0;
  let high = arr.length - 1;

  sort(low, high, arr);

  return arr;
};

module.exports = mergeSort;
