import { add, add2 } from './add'; 

describe(add.name, () => {
    it('2 params test 1', () => {
        // act
        const result = add(1, 2);

        // assert
        expect(result).toBe(3);
    });

    it('2 params test 2', () => {
        // act
        const result = add(3, 2);

        // assert
        expect(result).toBe(5);
    });
});

describe(add2.name, () => {
    it('multi params test 1', () => {
        // act
        const result = add2(1, 2, 3, 4, 5);

        // assert
        expect(result).toBe(15);
    });

    it('multi params test 2', () => {
        // act
        const result = add2(3, 2);

        // assert
        expect(result).toBe(5);
    });
});