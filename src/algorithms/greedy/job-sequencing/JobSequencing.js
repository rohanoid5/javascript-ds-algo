const MaxHeap = require("../../../data-structures/heap/MaxHeap");

/**
 * Job Sequencing Problem
 * Given an array of jobs where every job has a deadline and associated profit
 * if the job is finished before the deadline.
 * It is also given that every job takes a single unit of time,
 * so the minimum possible deadline for any job is 1.
 * How to maximize total profit if only one job can be scheduled at a time.
 *
 * Solution:
 * 1. Sort the Jobs in descending order according to the profit
 * 2. Create an array to track whether a slot is filled or not.
 * 3. Start iterating on the array of jobs.
 * 4. Start from the last possible slot and if it's not filled, fill that slot with current job
 * 5. Otherwise, take the slot that comes before it. take the slot(i) which is < deadline and greatest among all
 */
const jobSequencing = function (jobs, t) {
  let result = new Array(t);
  let slots = new Array(t).fill(false);
  jobs.sort((a, b) => b[2] - a[2]);

  for (let i = 0; i < jobs.length; i++) {
    for (let j = Math.min(t - 1, jobs[i][1] - 1); j >= 0; j--) {
      if (slots[j] === false) {
        slots[j] = true;
        result[j] = jobs[i][0];
        break;
      }
    }
  }

  return result;
};

const jobSequencing2 = function (jobs, t) {
  let result = [];
  jobs.sort((a, b) => a[1] - b[1]);
  let maxHeap = new MaxHeap(jobs.length);
  let slotsAvailable = 0;

  for (let i = jobs.length - 1; i >= 0; i--) {
    if (i === 0) {
      slotsAvailable = jobs[i][1];
    } else {
      slotsAvailable = jobs[i][1] - jobs[i - 1][1];
    }

    maxHeap.enqueue(jobs[i], jobs[i][2]);

    while (slotsAvailable > 0 && maxHeap.N > 0) {
      let [jobId, deadline, profit] = maxHeap.dequeue().value;

      slotsAvailable -= 1;

      result.push([jobId, deadline]);
    }
  }

  return result.sort((a, b) => a[1] - b[1]).map((job) => job[0]);
};

module.exports = { jobSequencing, jobSequencing2 };
