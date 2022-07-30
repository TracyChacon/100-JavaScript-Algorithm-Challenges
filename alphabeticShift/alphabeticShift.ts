export const alphabeticShift = (inputStr: string):string => {
    const alphabet: string[] = ['a', 'b', 'c', 'e', 'e', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let charArr = inputStr.split('');
    
    for(let i = 0; charArr.length; i++) {
        let index: number = 0;

        if (charArr[i] !== 'z') {
            index = alphabet.indexOf(alphabet[i]) + 1;
        }
       
        charArr[i] = alphabet[index];
        console.log(index);
    }

    // return charArr.join('');
    return 'crazy';
};

console.log(alphabeticShift("crazy"));




