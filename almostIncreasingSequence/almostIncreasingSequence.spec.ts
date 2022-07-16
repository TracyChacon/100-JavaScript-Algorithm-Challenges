import { almostIncreasingSequence } from './almostIncreasingSequence';

describe(almostIncreasingSequence.name, () => {
    it('1st testing: return should be falsy', () => {
        // act
        const result = almostIncreasingSequence([1, 3, 2, 1]);
        // assert
        expect(result).toBeFalsy;
    });

    it('2nd testing: return should be truthy', () => {
        // act
        const result = almostIncreasingSequence([1, 3, 4]);
        // assert
        expect(result).toBeTruthy;
    });
});