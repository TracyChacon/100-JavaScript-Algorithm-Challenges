import { absoluteValuesSumMinization } from './absoluteValuesSumMinization';

describe(absoluteValuesSumMinization.name, () => {
    it('test 1', () => {
        //arrange
        let a = [2, 4, 7];

        // act
        const result = absoluteValuesSumMinization(a);

        // assert
        expect(result).toBe(4);
    });

    it('test 2', () => {
        //arrange
        let a = [2, 4, 7, 6];
        
        // act
        const result = absoluteValuesSumMinization(a);

        // assert
        expect(result).toBe(4);
    });

    it('test 3', () => {
        //arrange
        let a = [2, 4, 7, 6, 6];
        
        // act
        const result = absoluteValuesSumMinization(a);

        // assert
        expect(result).toBe(7);
    });

    it('test 4', () => {
        //arrange
        let a = [2, 4, 7, 6, 6, 8];
        
        // act
        const result = absoluteValuesSumMinization(a);

        // assert
        expect(result).toBe(7);
    });

});