import { addBorder } from "./addBorder";

describe(addBorder.name, () => {
    xit('test 1: do we have top/bottom borders?', () => {
        // arrange
        let inputArr = ['abc', 'xyz'] 
        
        // act
        const result = addBorder(inputArr);

        // assert
        expect(result).toEqual(['*****','abc', 'xyz', '*****']);
    });

    it('test 2: do we have left/right borders?', () => {
        // arrange
        let inputArr = ['abc', 'xyz'] 
        
        // act
        const result = addBorder(inputArr);

        // assert
        expect(result).toEqual(['*****','*abc*', '*xyz*', '*****']);
    });
});
