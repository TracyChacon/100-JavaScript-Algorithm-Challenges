export const alphabetSubSequence = (s: string): boolean => {
    const arrOfChars: string[] = s.split('');
    const arrOfCharCodes: number[] = arrOfChars.map(e => e.charCodeAt(0));

    for(let j = 0; j < arrOfCharCodes.length; j++) {
        const ruleViolation = arrOfCharCodes[j] >= arrOfCharCodes[j + 1];
        
        if(ruleViolation) {
            return false;
        }
    }
    return true;
};

console.log(alphabetSubSequence("abefxz"));

console.log(alphabetSubSequence("effg"));
console.log(alphabetSubSequence("cdce"));
console.log(alphabetSubSequence("ace"));
console.log(alphabetSubSequence("bxz"));