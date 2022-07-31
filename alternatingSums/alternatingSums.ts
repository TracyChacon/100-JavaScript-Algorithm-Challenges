export const alternatingSums = (a: number[]): number[] => {
    let even: number = 0;
    let odd: number = 0;
    
    a.forEach((e, i) => {
        if( i % 2 === 0 ){
            even += e;
        } else {
            odd += e;
        }

    })
    return [even, odd];    
};



console.log(alternatingSums([50, 60, 60, 45, 70]));