const largestContiguousSum = require("../kadane-algorithm/LargestContiguousSum");
const sumSubArrayMinimum = require("../sum-subarray-minimums/SumSubArrayMinimums");
const minimumSwapsRequired = require("../minimum-swaps-group-ones/MinimumSwapsToGroupOnes");

describe("Sum of all minimums of Sub Arrays", () => {
  it("should return the sum", () => {
    expect(sumSubArrayMinimum([3, 1, 2, 4])).toBe(17);
    expect(sumSubArrayMinimum([11, 81, 94, 43, 3])).toBe(444);
    expect(sumSubArrayMinimum([71, 55, 82, 55])).toBe(593);
  });
});

describe("Largest Sum of Contiguous Sub-Array", () => {
  it("should return the largest sum", () => {
    expect(largestContiguousSum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
  });
});

describe("Minimum Number of Swaps required to group 1s together", () => {
  it("should return the minimum number of swaps", () => {
    expect(minimumSwapsRequired([1, 0, 1, 0, 1, 1])).toBe(1);
    expect(minimumSwapsRequired([1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1])).toBe(3);
  });
});
