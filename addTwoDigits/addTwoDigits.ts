// export const addTwoDigits = (number: any): number => {
//     const digits = number.toString().split('');
//     return digits.reduce((a: string, b:string): number => {
//         return parseInt(a) + parseInt(b);
//     });
// };


// console.log(addTwoDigits(29));



export const addTwoDigits = (number: number): number => {
    const digits = number.toString().split('');

    return parseInt(digits[0]) + parseInt(digits[1]);
};


console.log(addTwoDigits(29));