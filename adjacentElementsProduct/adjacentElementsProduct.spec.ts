import { adjacentElementsProduct } from './adjacentElementsProduct';

describe(adjacentElementsProduct.name, () => {
    it('test 1:', () => {
        // act
        const result = adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
        // assert
        expect(result).toBe(21);
    });
});