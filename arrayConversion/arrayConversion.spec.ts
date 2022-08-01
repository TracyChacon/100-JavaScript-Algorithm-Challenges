import { arrayConversion } from './arrayConversion';

describe(arrayConversion.name, () => {
    it('1st test', () => {
        // assign
        // act
        const result = arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]);
        // assert
        expect(result).toBe(186);
    });
})