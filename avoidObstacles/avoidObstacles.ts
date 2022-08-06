export const avoidObstacles = (inputArray: number[]): number => {
    inputArray = inputArray.sort((a, b) => a-b );

    const largestArrayVal = inputArray[inputArray.length - 1];

    for (let i = 1; i <= largestArrayVal + 1; i++) {

        const isMinJumpForEveryElement = inputArray.every((element) => element % i !== 0
       );

        if(isMinJumpForEveryElement) {
            return i;
        }
    }
};

console.log(avoidObstacles([5, 3, 6, 7, 9]));