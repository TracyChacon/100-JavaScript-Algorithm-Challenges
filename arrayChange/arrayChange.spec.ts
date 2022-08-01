import { arrayChange } from './arrayChange';

describe(arrayChange.name, () => {
    it('1st test', () => {
        // assign
        // act
        const result = arrayChange([1, 1, 1]);
        // assert
        expect(result).toBe(3);
    });
});