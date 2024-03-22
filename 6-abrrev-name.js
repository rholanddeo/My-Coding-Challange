//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// function abbrevName(name){
//     return name.split(' ').map(n => n[0].toUpperCase()).join('.');
// }

const abbrevName = name => name.split(' ').map(n => n[0].toUpperCase()).join('.');

console.log(abbrevName('Sam Harris'));