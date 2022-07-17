 export const almostIncreasingSequence = (sequence: number[]): boolean => {
    let compareInfractionCounter = 0;

    for (let i = 0; i < sequence.length - 1; i++) {
        const compareOneAhead = sequence[i] >= sequence[i + 1];
        const compareTwoAhead = sequence[i] >= sequence[i + 2];
        const compareOneBehind = sequence[i] <= sequence[i - 1];
        const compareTwoBehind = sequence[i] <= sequence[i - 2];
        
        if(compareOneAhead) {
            ++compareInfractionCounter;

            if(compareTwoAhead || compareOneBehind || compareTwoBehind){
                return  false;
            }
        }
    }
    return compareInfractionCounter <= 1;
};

console.log(almostIncreasingSequence([1, 2, 3, 1, 4, 2]));
console.log(almostIncreasingSequence([10, 9, 8]));
// console.log(almostIncreasingSequence([1, 3, 2]));
// console.log(almostIncreasingSequence([1, 3]));
// console.log(almostIncreasingSequence([4, 3, 4, 5, 2]))