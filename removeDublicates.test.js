import { createArrayWithoutDuplicates } from './removeDublicates';


test("", () => {
    const arr1 = [];
    const arr2 = [];
    expect(createArrayWithoutDuplicates(arr1, arr2)).toEqual([]);
}) 