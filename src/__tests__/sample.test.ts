import { SampleClass } from '../sample';

test('sample', () => {
    expect(SampleClass.isSample())
})

test('getNum', () => {
    expect(SampleClass.getNum()).toBe(1)
})
test('getStr', () => {
    expect(SampleClass.getStr()).toBe("Sample String")
})