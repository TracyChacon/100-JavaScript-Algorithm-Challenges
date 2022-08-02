import { arrayMaxConsecutiveSum } from './arrayMaxConsecutiveSum';

describe(arrayMaxConsecutiveSum.name, () => {
    it('1 test', () => {
        // assign
        // act
        const result = arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2 );
        // assert
        expect(result).toBe(8);
    });
});