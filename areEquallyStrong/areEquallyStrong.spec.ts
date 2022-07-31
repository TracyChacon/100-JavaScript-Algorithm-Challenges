import { areEquallyStrong } from './areEquallyStrong';
describe(areEquallyStrong.name, () => {
    it('1st test:', () => {
        // assign
        // act
        const result = areEquallyStrong(10, 15, 15, 10);
        // assert
        expect(result).toBe(true);
    });
    it('2nd test:', () => {
        // assign
        // act
        const result = areEquallyStrong(15, 10, 15, 10);
        // assert
        expect(result).toBe(true);
    });

    it('3rd test:', () => {
        // assign
        // act
        const result = areEquallyStrong(15, 10, 15, 9);
        // assert
        expect(result).toBe(false);
    });
});