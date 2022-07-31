const activitySelection = require("../activity-selection/ActivitySelection");
const {
  jobSequencing,
  jobSequencing2,
} = require("../job-sequencing/JobSequencing");
const policeCatchThieves = require("../police-catch-thieves/PoliceCatchThieves");

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

describe("Job Sequencing", () => {
  it("should the return the sequence", () => {
    expect(
      jobSequencing(
        [
          ["a", 2, 100],
          ["b", 1, 19],
          ["c", 2, 27],
          ["d", 1, 25],
          ["e", 3, 15],
        ],
        3
      )
    ).toEqual(["c", "a", "e"]);
    expect(
      jobSequencing2(
        [
          ["a", 2, 100],
          ["b", 1, 19],
          ["c", 2, 27],
          ["d", 1, 25],
          ["e", 3, 15],
        ],
        3
      )
    ).toEqual(["a", "c", "e"]);

    expect(
      jobSequencing(
        [
          ["a", 4, 20],
          ["b", 1, 10],
          ["c", 1, 40],
          ["d", 1, 30],
        ],
        2
      )
    ).toEqual(["c", "a"]);
    expect(
      jobSequencing2(
        [
          ["a", 4, 20],
          ["b", 1, 10],
          ["c", 1, 40],
          ["d", 1, 30],
        ],
        2
      )
    ).toEqual(["c", "a"]);
  });
});

describe("Policemen Catch Thieves", () => {
  it("should return the maximum number of thieves possible to catch", () => {
    expect(policeCatchThieves(["P", "T", "T", "P", "T"], 2)).toBe(2);
    expect(policeCatchThieves(["T", "T", "P", "P", "T", "P"], 2)).toBe(3);
    expect(policeCatchThieves(["P", "T", "P", "T", "T", "P"], 3)).toBe(3);
  });
});
