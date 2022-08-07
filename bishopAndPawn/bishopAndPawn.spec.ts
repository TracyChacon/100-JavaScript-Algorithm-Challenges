import { bishopAndPawn } from './bishopAndPawn';

describe(bishopAndPawn.name, () => {
    it('test 1', () => {
        // assign
        // act
        const result = bishopAndPawn('a1', 'c3');
        // assert
        expect(result).toBe(true);
    });
});