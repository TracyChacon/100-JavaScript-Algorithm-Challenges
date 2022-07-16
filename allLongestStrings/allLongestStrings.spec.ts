import { allLongestStrings } from './allLongestStrings';

describe(allLongestStrings.name, () => {
    it('1st tests: ', () => {
        // act
        const result = allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);

        // assert
        expect(result).toStrictEqual(["aba", "vcd", "aba"])
    });
});