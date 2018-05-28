"use strict";

/**
 * 有
 */

let epicLevelFirms = ["apple", "Google", "microSoft", "IBM", "mozilla"];
/**
 *
 * @param strArray
 * @returns {*}
 */
let processStr = (strArray) => strArray.map((ele, index) => ele[0].toUpperCase().concat(ele.slice(1)));
console.log(processStr(epicLevelFirms)[0]);
console.log(epicLevelFirms[0]);


let arr = ['1', '2', '3'];
let r;
r = arr.map(parseInt);
console.log(r); // [ 1, NaN, NaN ]


let digitalStrArray = ["2", "ha", "13", "5", "Mischief", "46"];
/**
 *
 * @param array
 * @returns {Int32Array}
 */
let deal = (array) => array.
filter(ele => !isNaN(parseInt(ele))).
map(ele => parseInt(ele)).sort((x, y) => x - y).reverse();
console.log(deal(digitalStrArray)); // [ 2, 5, 13, 46 ]


let objects = [
    {
        level: "p7",
        age: 28
    },
    {
        level: "p7",
        age: 19
    },
    {
        level: "p5",
        age: 19
    }
];

/**
 *
 * @param array
 * @returns {*}
 */
let sortArray = array => array.sort((x, y) => {
    let firstCmp = (parseInt(x.level.slice(1)) - parseInt(y.level.slice(1)));
    if (firstCmp !== 0) {
        return firstCmp
    } else {
        return y.age -x.age
    }
});

console.log(sortArray(objects));
/*
[ { level: 'p5', age: 19 },
  { level: 'p7', age: 28 },
  { level: 'p7', age: 19 } ]
 */