export const alphabeticShift = (inputStr: string):string => {
    const alphabet: string[] = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let charArr = inputStr.split('');
      
    for(let i = 0; i < charArr.length; i++) {
        let index: number = 0;

        if (charArr[i] !== 'z') {
            index = alphabet.indexOf(charArr[i]) + 1;
        }
       
        charArr[i] = alphabet[index];  
    }

    return charArr.join('');
};

console.log(alphabeticShift("crazy"));




