import { addTwoDigits } from "./addTwoDigits";

describe(addTwoDigits.name, () => {
    it('test 1: result should be the sum of a two digit number', () => {

        // act
        const result = addTwoDigits(29);
        
        // assert
        expect(result).toBe(11);

    });
});