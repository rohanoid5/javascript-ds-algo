/**
 * We are given n Activities, each with a start and end time.
 * We have to find the maximum number of activities that can be performed.
 *
 * Solution:
 * The problem can be solved using greedy approach.
 * 1. We will sort the activities in ascending order of end time.
 * 2. We will first pick the first activity
 * 3. For rest of the activities we will check if the current activity
 * begins after or on same time previously picked activity ends.
 */
const activitySelection = function (activities) {
  let result = [];

  activities.sort((a, b) => a[1] - b[1]);
  result.push(0);
  let previous = activities[0];

  for (let i = 1; i < activities.length; i++) {
    let [start, end] = activities[i];

    if (start >= previous[1]) {
      result.push(i);
      previous = [start, end];
    }
  }

  return result;
};

module.exports = activitySelection;
