const partition = function (arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i += 1;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
};

const sort = function (arr, low, high) {
  if (low >= high) return;

  let location = partition(arr, low, high);
  sort(arr, low, location - 1);
  sort(arr, location + 1, high);
};

const quickSort = function (arr) {
  let low = 0;
  let high = arr.length - 1;

  sort(arr, low, high);

  return arr;
};

module.exports = quickSort;
