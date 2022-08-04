export const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number) => {
    inputArray.forEach((e, i) => {
        if(e === elemToReplace){
            inputArray[i] = substitutionElem;
        }
       
    });
    return inputArray;
    
};

console.log(arrayReplace([1, 2, 1], 1, 3));