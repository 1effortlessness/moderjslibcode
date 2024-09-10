import { describe, it, expect } from "vitest";
import { deepClone } from "../src/index";

describe("deepClone", () => {
  it("should return the same object", () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
      },
      d: [1, 2, 3],
    };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });
  it("should return the same array", () => {
    const arr = [1, 2, 3];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
  });
  it("should return the same string", () => {
    const str = "hello";
    const clonedStr = deepClone(str);
    expect(clonedStr).toEqual(str);
  });
  it("should return the same number", () => {
    const num = 1;
    const clonedNum = deepClone(num);
    expect(clonedNum).toEqual(num);
  });
  it("should return the same boolean", () => {
    const bool = true;
    const clonedBool = deepClone(bool);
    expect(clonedBool).toEqual(bool);
  });
  it("should return the same null", () => {
    const nullVal = null;
    const clonedNull = deepClone(nullVal);
    expect(clonedNull).toEqual(nullVal);
  });
  it("should return the same undefined", () => {
    const undefinedVal = undefined;
    const clonedUndefined = deepClone(undefinedVal);
    expect(clonedUndefined).toEqual(undefinedVal);
  });
  it("should return the same symbol", () => {
    const symbolVal = Symbol("test");
    const clonedSymbol = deepClone(symbolVal);
    expect(clonedSymbol).toEqual(symbolVal);
  });
  it("should return the same function", () => {
    const func = () => {};
    const clonedFunc = deepClone(func);
    expect(clonedFunc).toEqual(func);
  });
});
