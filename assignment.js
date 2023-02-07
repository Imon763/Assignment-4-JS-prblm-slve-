/*----------- Let's play a mind game -------------*/
function mindGame(num) {
    let result = (num * 3 + 10) / 2 - 5;
    return result;
}
let answer = mindGame(50);
console.log(answer);



/*--------- Finding even or odd -----------*/
function evenOdd(stringdata){
    let length = stringdata.length;
    if (length % 2 === 0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
let output = evenOdd('Batch7');
console.log(output);





/*----------- Is less or Greater than seven --------------*/

function isLGSeven(input) {
    let difference = Math.abs(input - 7);
    if (difference < 7) {
      return difference;
    } 
    else {
      return 2 * difference;
    }
  }

  let result = isLGSeven(13);
  console.log(result);




/*--------- Finding Bad data -----------*/

function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
      if (element < 0) {
        count++;
      }
    }
    return count;
  }
  const arr = [3, 42, -5, 4, -6, 7, 0, -9, 14, -17]
  const count = findingBadData(arr);
  console.log(count);


/*--------- Convert your gemes into diamond ---------*/
function gemesToDiamond (f1Gems, f2Gems, f3Gems){
    const f1GemsPower = f1Gems * 21;
    const f2GemsPower = f2Gems * 32;
    const f3GemsPower = f3Gems * 43;
    const totalDiamond = f1GemsPower + f2GemsPower + f3GemsPower;
    if (totalDiamond > (1000 *2)){
        const extraDiamond = totalDiamond - 2000;
        return extraDiamond;
    }
    else{
        return totalDiamond;
    }
}
const extraDiamond = gemesToDiamond(100,5,1);
console.log(extraDiamond);





