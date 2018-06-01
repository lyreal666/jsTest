const fs = require('fs');

let log = console.log;
console.log = (...rest) => {
    log(rest);
    if (rest.length === 1) {
        fs.appendFileSync('output.txt', String(typeof rest[0] === "object" ? JSON.stringify(rest[0]) : rest[0]) + "\n");
    } else {
        fs.appendFileSync('output.txt', rest.reduce((f, b) => {
            return String(typeof f === "object" ? JSON.stringify(f) : f) + String(typeof b === "object" ? JSON.stringify(b) : b) + "\n"
        }))
    }
};

obj = {
    funcInFunc: 7,
    outer
};

function outer() {
    let funcInFunc = 6;
    function inner() {
        console.log("funcInFunc: ", this.funcInFunc)
    }
    inner()
}

obj.outer();

let arrowFunc = () => {
    console.log("arrowFuncThis: ", this.arrowFuncThis)
};

let arrowObj = {
    arrowFunc,
    arrowFuncThis: "hahaha..."
};

arrowObj.arrowFunc();


//--------------------函数设计一-------------------------//
let epicLevelFirms = ["apple", "Google", "microSoft", "IBM", "mozilla"];
/**
 *
 * @param strArray
 * @returns {*}
 */
// 补齐下面的函数
let processStr = strArray => strArray.map(ele => ele[0].toUpperCase() + ele.slice(1));

console.log(processStr(epicLevelFirms)[0]); // Apple
console.log(epicLevelFirms[0]); // apple


//------------------函数设计二--------------------------//
/**
 *
 * @param args
 * @returns {*|number}
 */
let factorial = (...args) => args.reduce((f, b) => f * b);
    // 补全
console.log(factorial(2, 3, 4)); // 24


//------------------函数设计三--------------------------//
let arr = ['1', '2', '3'];
let r;
r = arr.map(parseInt);
console.log(r); // [ 1, NaN, NaN ]

/*
* 由于map默认传三个参数,ele, index, self,parseInt默认可以接收两个参数parsedStr, radix
* 导致map函数内部的循环是这样调用parseInt的: parseInt(ele, index, self)
* 内部实际调用情况如下:
*/
console.log(parseInt("1", 0, arr)); // 1
console.log(parseInt("2", 1, arr)); // NaN, 1进制无意义
console.log(parseInt('3', 2, arr)); // NaN, 2进制没有3,如果要表示3应该是11
console.log(parseInt("11", 2, arr)); // 3
/*copy自w3c
parseInt(string, radix)

string	必需。要被解析的字符串。
radix	可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

parseInt("10");			//返回 10
parseInt("19",10);		//返回 19 (10+9)
parseInt("11",2);		//返回 3 (2+1)
parseInt("17",8);		//返回 15 (8+7)
parseInt("1f",16);		//返回 31 (16+15)
parseInt("010");		//未定：返回 10 或 8
*/


//------------------函数设计四-------------------------//
let digitalStrArray = ["2", "ha", "13", "5", "Mischief", "46"];
/**
 *
 * @param array
 * @returns {Int32Array}
 */
let deal = array => array.
filter(ele => !isNaN(parseInt(ele))).
map(ele => parseInt(ele)).
sort((x, y) => x -y).
reverse();
// 补全
console.log(deal(digitalStrArray)); // [ 46， 13， 5， 2 ]


//-------------------函数设计五----------------------//
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
    let [xInt, yInt] = [parseInt(x.level.slice(1)), parseInt(y.level.slice(1))];
    if (xInt !== yInt) {
        return xInt - yInt
    } else {
        return y.age - x.age
    }
});

console.log(sortArray(objects));
/*
[ { level: 'p5', age: 19 },
  { level: 'p7', age: 28 },
  { level: 'p7', age: 19 } ]
 */