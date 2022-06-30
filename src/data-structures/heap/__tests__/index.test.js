const MaxHeap = require("../MaxHeap");
const MinHeap = require("../MinHeap");

describe("Heap", () => {
  it("should be created after initializing", () => {
    let heap = new MaxHeap(0);
    expect(heap).toBeDefined();
  });

  it("should create a storage of N + 1 size", () => {
    let heap = new MaxHeap(12);
    expect(heap.storage.length).toBe(13);
  });

  it("should enqueue values to storage", () => {
    let heap = new MaxHeap(12);

    const priorities = [4, 3];
    heap.enqueue(12, priorities[0]);
    heap.enqueue(8, priorities[1]);

    expect(heap.storage[1].priority).toBe(priorities[0]);
    expect(heap.storage[2].priority).toBe(priorities[1]);
  });

  it("should maintain heap properties after enqueueing new entry", () => {
    let heap = new MaxHeap(19);

    const priorities = [
      15, 13, 14, 9, 11, 12, 14, 8, 2, 1, 10, 8, 6, 9, 7, 4, 5,
    ];
    const value = 1;
    const newPriority = 12;

    priorities.forEach((p) => {
      heap.enqueue(value, p);
    });
    heap.enqueue(value, newPriority);

    expect(heap.storage[4].priority).toBe(newPriority);
    expect(heap.storage[1].priority).toBe(priorities[0]);
  });

  it("should give back the entry with highest priority after dequeue", () => {
    let heap = new MaxHeap(19);

    const priorities = [
      16, 15, 14, 13, 11, 12, 14, 8, 12, 1, 10, 8, 6, 9, 7, 4, 5, 2, 9,
    ];
    const value = 1;

    priorities.forEach((p) => {
      heap.enqueue(value, p);
    });

    expect(heap.dequeue().priority).toBe(priorities.sort((a, b) => b - a)[0]);
  });

  it("should give back the entry with lowest priority after dequeue", () => {
    let heap = new MinHeap(19);

    const priorities = [
      16, 15, 14, 13, 11, 12, 14, 8, 12, 1, 10, 8, 6, 9, 7, 4, 5, 2, 9,
    ];
    const value = 1;

    priorities.forEach((p) => {
      heap.enqueue(value, p);
    });

    expect(heap.dequeue().priority).toBe(priorities.sort((a, b) => a - b)[0]);
  });
});
