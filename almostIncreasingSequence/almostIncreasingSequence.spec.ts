import { almostIncreasingSequence } from './almostIncreasingSequence';

describe(almostIncreasingSequence.name, () => {
    xit('1st testing: return should be falsy', () => {
        // act
        const result = almostIncreasingSequence([1, 3, 2, 1]);
        // assert
        expect(result).toBe(false);
    });

    xit('2nd testing: return should be truthy', () => {
        // act
        const result = almostIncreasingSequence([1, 3, 4]);
        // assert
        expect(result).toBe(true);
    });

    it('3rd test: index destance edge case should return false', () => {
        //act
        const result = almostIncreasingSequence([41, 22, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 79, 80, 33 ]);
        // assert
        expect(result).toBe(false);
    } );
});