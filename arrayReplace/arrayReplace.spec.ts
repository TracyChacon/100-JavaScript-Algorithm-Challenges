import { arrayReplace } from './arrayReplace';

describe(arrayReplace.name, () => {
    it('test 1', () => {
        // assign
        // act
        const result = arrayReplace([1, 2, 1], 1, 3);
        // assert
        expect(result).toEqual([3, 2, 3]);
    })
});