const activitySelection = require("../activity-selection/ActivitySelection");

describe("Activity Selection", () => {
  it("should return the minimum activities that can be performed", () => {
    expect(
      activitySelection([
        [1, 2],
        [3, 4],
        [0, 6],
        [5, 7],
        [8, 9],
        [5, 9],
      ])
    ).toEqual([0, 1, 3, 4]);

    expect(
      activitySelection([
        [10, 20],
        [12, 25],
        [20, 30],
      ])
    ).toEqual([0, 2]);
  });
});
