export const arrayMaximalAdjacentDifference = (inputArray: number[]): number => {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for (let i = 2; i < inputArray.length; i++) {
        let diff = Math.abs(inputArray[i - 1] - inputArray[i]);

        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
};

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));