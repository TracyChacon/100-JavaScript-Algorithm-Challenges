export const adjacentElementsProduct = (num: number[]): number => {
    let index = 0;
	
    const productsArr = num.map(element => element * num[++index] );	
    productsArr.pop();
    return Math.max(...productsArr);
}	
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));  



// export const adjacentElementsProduct = (num: number[]): number => {
//     let greater = num[0] * num[1];

//     for (let i = 1; i < num.length - 1; i++) {
//         if ((num[i] * num[i + 1]) > greater) {
//           greater = num[i] * num[i + 1];
//         }
//     }
//     return greater;
// }

// let inputArr = [3, 6, -2, -5, 3];

// console.log(adjacentElementsProduct(inputArr));  // prints 18


