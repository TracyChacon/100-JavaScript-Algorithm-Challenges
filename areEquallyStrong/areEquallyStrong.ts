export const areEquallyStrong = (yourRight: number, yourLeft: number, friendsRight: number, friendsLeft: number): boolean => {
   const yourStrongArm =  yourLeft >= yourRight ? yourLeft : yourRight;
   
   const friendsStrongArm = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

   const yourWeakArm =  yourLeft < yourRight ? yourLeft : yourRight;
   
   const friendsWeakArm = friendsLeft < friendsRight ? friendsLeft : friendsRight;

    return yourStrongArm === friendsStrongArm && yourWeakArm === friendsWeakArm;
};

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));