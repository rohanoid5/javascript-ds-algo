const mergeSort = require("../MergeSort");

describe("Merge Sort", () => {
  it("should sort an Array", () => {
    let arr = [9, 2, 4, 6, 12, 1, 22];

    mergeSort(arr);

    expect(arr).toStrictEqual([1, 2, 4, 6, 9, 12, 22]);
  });
});
