import { areSimilar } from './areSimilar';

describe(areSimilar.name, () => {
    it('1st test: ', () => {
        // assign
        // act
        const result = areSimilar([1, 2, 3], [1, 2, 3]);
        // assert
        expect(result).toBe(true);
    });

    it('2nd  test: ', () => {
        // assign
        // act
        const result = areSimilar([1, 2, 3], [2, 1, 3]);
        // assert
        expect(result).toBe(true);
    });

    it('3rd test: ', () => {
        // assign
        // act
        const result = areSimilar([1, 2, 2], [2, 1, 1]);
        // assert
        expect(result).toBe(false);
    });
});

