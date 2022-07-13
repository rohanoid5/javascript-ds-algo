/**
 * Weighted Job Schedule.
 *
 * There's a list of job, each job has a start time, end time and weight.
 * We need to find a subset where the weight is maximized without causing any jobs to overlap.
 *
 * Solution:
 * There's a recurrence relation,
 * Let's say T is the set of n sorted tasks according to it's finish time.
 * Job(T, n) gives the result.
 * when n = 1, Job(T, n) = 1
 * otherwise, Job(T, n) = Max[If we exclude nth job or we include nth Job]
 * Job(T, n) = Max(Job(T, n - 1), Job(T, k) + T[n].weight) where k is
 * the closest non overlapping job from n.
 */
const findMaxWeight = function (jobs) {
  jobs.sort((a, b) => a.finish - b.finish);
  let table = new Array(jobs.length).fill(null);
  table[0] = jobs[0].weight;

  for (let i = 1; i < jobs.length; i++) {
    let inclWeight = jobs[i].weight;
    let idx = getNonOverlappingJob(jobs, i);
    if (idx !== -1) inclWeight += table[idx];

    let exclWeight = table[i - 1];
    table[i] = Math.max(exclWeight, inclWeight);
  }

  return table[table.length - 1];
};

const getNonOverlappingJob = function (jobs, i) {
  let idx = -1;
  for (let j = i - 1; j >= 0; j--) {
    if (jobs[i - 1].start >= jobs[j].finish) return j;
  }

  return idx;
};

class Job {
  constructor(start, finish, weight) {
    this.start = start;
    this.finish = finish;
    this.weight = weight;
  }
}

module.exports = {
  findMaxWeight,
  Job,
};
