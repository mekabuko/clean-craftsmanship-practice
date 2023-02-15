import { FifoQueue } from "../fifoQueue";

test('createInstance', () => {
    const queue = new FifoQueue();
    expect(queue).not.toBeNull()
})

test('addOne', () => {
    const queue = new FifoQueue();
    queue.add(1);
})

test('addOneAndGetLength', () => {
    const queue = new FifoQueue();
    queue.add(1);
    expect(queue.getLength()).toBe(1);
})

test('addTwoAndGetLength', () => {
    const queue = new FifoQueue();
    queue.add(1);
    queue.add(1);
    expect(queue.getLength()).toBe(2);
})

test('pollOne', () => {
    const queue = new FifoQueue();
    queue.add(1);
    expect(queue.poll()).toBe(1);
})

test('pollTwo', () => {
    const queue = new FifoQueue();
    queue.add(1);
    queue.add(2);
    expect(queue.poll()).toBe(1);
    expect(queue.poll()).toBe(2);
})

test('pollAndGetLength', () => {
    const queue = new FifoQueue();
    queue.add(1);
    queue.add(2);
    expect(queue.getLength()).toBe(2);
    expect(queue.poll()).toBe(1);
    expect(queue.getLength()).toBe(1);
    expect(queue.poll()).toBe(2);
    expect(queue.getLength()).toBe(0);
})

test('pollWithNoItem_returnError', () => {
    const queue = new FifoQueue();
    expect(queue.poll()).toStrictEqual(new Error('no item!'))
})
