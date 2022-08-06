import { avoidObstacles } from './avoidObstacles';

describe(avoidObstacles.name, () => {
    it('test 1', () => {
        // assign
        // act
        const result = avoidObstacles([5, 3, 6, 7, 9]);
        // assert
        expect(result).toBe(4)

    });
});