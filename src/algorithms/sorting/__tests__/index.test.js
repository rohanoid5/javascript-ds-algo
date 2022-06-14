const mergeSort = require("../MergeSort");
const quickSort = require("../QuickSort");

describe("Merge Sort", () => {
  it("should sort an Array", () => {
    let arr = [9, 2, 4, 6, 12, 1, 22];

    mergeSort(arr);

    expect(arr).toStrictEqual([1, 2, 4, 6, 9, 12, 22]);
  });
});

describe("Quick Sort", () => {
  it("should sort an Array", () => {
    let arr = [9, 2, 4, 6, 12, 1, 22];

    quickSort(arr);

    expect(arr).toStrictEqual([1, 2, 4, 6, 9, 12, 22]);
  });
});
