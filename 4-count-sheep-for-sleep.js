// ?https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript
var countSheep = function (num){
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }
    return str;
}
console.log(countSheep(3));