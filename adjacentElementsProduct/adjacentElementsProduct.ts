export const adjacentElementsProduct = (num: number[]): number => {
    let greater = num[0] * num[1];

    for (let i = 0; i < num.length - 1; i++) {
        if ((num[i] * num[i + 1]) > greater) {
          greater = num[i] * num[i + 1];
        }
    }
    return greater;
}


let inputArr = [3, 6, -2, -5, 3];

console.log(adjacentElementsProduct(inputArr));  // prints 18