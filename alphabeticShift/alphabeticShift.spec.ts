import { alphabeticShift } from './alphabeticShift';

describe(alphabeticShift.name, () => {
    it('1st test:', () => {
        // act
        const result = alphabeticShift("crazy");
        
        // assert
        expect(result).toBe("dsbaz");

    });
});