export class FifoQueue {
    private values: number[] = [];
    poll(): number | Error {
        const ret = this.values.shift();
        if (ret) return ret;
        return new Error("no item!")
    }
    getLength(): number {
        return this.values.length;
    }
    add(arg0: number) {
        this.values.push(arg0)
    }
}