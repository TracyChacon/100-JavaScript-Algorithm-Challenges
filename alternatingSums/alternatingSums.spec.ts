import { alternatingSums } from './alternatingSums'; 

describe(alternatingSums.name, () => {
    it('1st test: For a = [50, 60, 60, 45, 70], alternatingSums(a) = [180, 105]', () => {
        // act
        const result = alternatingSums([50, 60, 60, 45, 70]);
        // assert
        expect(result).toEqual([180, 105])
    });
});