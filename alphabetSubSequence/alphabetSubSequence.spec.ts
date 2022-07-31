import { alphabetSubSequence } from './alphabetSubSequence';

describe(alphabetSubSequence.name, () => {
    it('1st test: effg', () => {
        // assign
        const s = "effg";
        // act
        const result = alphabetSubSequence(s);
        // assert
        expect(result).toBe(false);
    });

    it('2nd test: cdce', () => {
        // assign
        const s = "cdce";
        // act
        const result = alphabetSubSequence(s);
        // assert
        expect(result).toBe(false);
    });

    it('3rd test: ace', () => {
        // assign
        const s = "ace";
        // act
        const result = alphabetSubSequence(s);
        // assert
        expect(result).toBe(true);
    });

    it('4th test: bxz', () => {
        // assign
        const s = "bxz";
        // act
        const result = alphabetSubSequence(s);
        // assert
        expect(result).toBe(true);
    });
});