export const allLongestStrings = (strArr: any[]): any[] => {
    // see what the longest string of the arr is 
    // store that string length in a var
    const strLenArr = strArr.map(el => el.length);
    const largestStrLen = Math.max(...strLenArr);

    // once i kknow what the longest stirng is 
    // create a new arr var with only the strings thtat are the same length of the longest string
    let longestStrs: string[] = [];
    for(let i = 0; i < strArr.length; i++){
        // compare each element of the strArr to the length of the longest arr 
        // store the elements that match in a newly create arr
        if(strArr[i].length === largestStrLen) {
            longestStrs.push(strArr[i]);
        }
    }
    return longestStrs;
};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aadsfasdba"]));









// const allLongestStrings = (inputArray: string[]): string[] => {
//     let longestLength = 0;
//     const longestWords: string[] = [];

//     inputArray.forEach((word: string) => {
//         longestLength = longestLength < word.length ? word.length : longestLength;        
//     });
    
//     inputArray.forEach((word: string) => {
//         if(word.length === longestLength) {
//             longestWords.push(word);
//         }
//     });

//     return longestWords;
// }

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aadsfasdba"]));