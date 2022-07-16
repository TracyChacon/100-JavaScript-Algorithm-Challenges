 export const almostIncreasingSequence = (intArr: number[]): boolean => {
    let equalsAndLessCounter = 0;

    for (let i = 0; i < intArr.length - 1; i++) {
        const equalityTest = intArr[i] <= intArr[i + 1];

        if(!equalityTest) {
            equalsAndLessCounter++;

            if(equalsAndLessCounter > 1){
                return false
            }
        }
    }
    return true;
};

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3]));
console.log(almostIncreasingSequence([4, 3, 4, 5, 2]))