import { arrayPreviousLess } from './arrayPreviousLess';

describe(arrayPreviousLess.name, () => {
    it('test 1', () => {
        // assign
        // act
        const result = arrayPreviousLess([3, 5, 2, 4, 5]);
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});