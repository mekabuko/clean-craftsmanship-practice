import { WordWrapper } from "../WordWrapper";

let wrapper: WordWrapper;
const GETTYSBURG_ADDRESS = 
    "Four score and seven years ago our fathers brought forth on this "+
    "continent, a new nation, conceived in Liberty, and dedicated to "+
    "the proposition that all men are created equal"

beforeEach(() => {
    wrapper = new WordWrapper();
})

const assertWrapped = (str: string, width: number, expected: string) => {
    expect(wrapper.wrap(str, width)).toBe(expected);
}

test('createWrapperInstance', () => {
    expect(wrapper).toBeInstanceOf(WordWrapper)
})

test('wrap', () => {
    assertWrapped("", 1, "")
    assertWrapped("x", 1, "x")
    assertWrapped("xx", 1, "x¥nx")
    assertWrapped("xxx", 1, "x¥nx¥nx")
    assertWrapped("xxx", 2, "xx¥nx")
    assertWrapped("xxxx", 2, "xx¥nxx")
    assertWrapped("xxxx", 3, "xxx¥nx")
})

test('wrap space', () => {
    assertWrapped("x x", 1, "x¥nx")
    assertWrapped("x x", 2, "x¥nx")
    assertWrapped("x x x", 1, "x¥nx¥nx")
    assertWrapped("x x x", 2, "x¥nx¥nx")
    assertWrapped("x x x", 3, "x x¥nx")
    assertWrapped("x x x", 4, "x x¥nx")
    assertWrapped("x x x", 5, "x x x")
    assertWrapped("xx xx", 1, "x¥nx¥nx¥nx")
    assertWrapped("xx xx", 2, "xx¥nxx")
    assertWrapped("xx xx", 3, "xx¥nxx")
    assertWrapped("xx xx", 4, "xx¥nxx")
    assertWrapped("xx xx", 5, "xx xx")
})

test("wrap Gettysburg address 15", () => {
    assertWrapped(
        GETTYSBURG_ADDRESS, 
        15, 
        /*
        -123456789012345--
        */
        "Four score and¥n" +
        "seven years ago¥n" +
        "our fathers¥n" +
        "brought forth¥n" +
        "on this¥n" +
        "continent, a¥n" +
        "new nation,¥n" +
        "conceived in¥n" +
        "Liberty, and¥n" +
        "dedicated to¥n" +
        "the proposition¥n" +
        "that all men¥n" +
        "are created¥n" +
        "equal"
    )
})


test("wrap Gettysburg address 30", () => {
    assertWrapped(
        GETTYSBURG_ADDRESS, 
        30, 
        /*
        -123456789012345678901234567890--
        */
        "Four score and seven years ago¥n" +
        "our fathers brought forth on¥n" +
        "this continent, a new nation,¥n" +
        "conceived in Liberty, and¥n"+
        "dedicated to the proposition¥n"+
        "that all men are created equal"
    )
})


test('wrap(old)', () => {
    assertWrapped("Four", 7, "Four")
})

test('wrap ¥n(old)', () => {
    assertWrapped("Four score", 7, "Four¥nscore")
})

test("wrap Gettysburg address (old)", () => {
    assertWrapped(
        "Four score and seven years ago our", 
        7, 
        "Four¥nscore¥nand¥nseven¥nyears¥nago our"
    )
})
