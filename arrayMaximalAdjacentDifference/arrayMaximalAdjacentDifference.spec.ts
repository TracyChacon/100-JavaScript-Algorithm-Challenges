import { arrayMaximalAdjacentDifference } from './arrayMaximalAdjacentDifference';

describe(arrayMaximalAdjacentDifference.name, () => {
    it('test 1', () => {
        // assign
        // act
        const result = arrayMaximalAdjacentDifference([2, 4, 1, 0]); 
        // assert
        expect(result).toBe(3);
    });

    it('test 2', () => {
        // assign
        // act
        const result = arrayMaximalAdjacentDifference([2, 9, 1, 0]); 
        // assert
        expect(result).toBe(8);
    });
});