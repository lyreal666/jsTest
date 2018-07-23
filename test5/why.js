// 1. 为什么用函数表达式
// 2. 为什么用const

function func() {
    console.log("I'm a func");
}

function func() {
    console.log("I'm a func1");
}

func();

let func1 = () => {

}

// const 不变用
// 一切错误应该尽早解决它
const oneArray = [1, 2, 4];
for (let key in oneArray) {
    console.log(typeof key);
    break;
}

// Object.keys()
console.log(typeof Object.keys(oneArray)[0]);

let symbol = Symbol(); // 独一无二的标志
let object1  = {
    [symbol]: 1
}
console.log(typeof Object.keys(object1)[0]);
console.log(typeof Object.keys(object1));

console.log(Object.getOwnPropertySymbols(object1));

// Es5 window.  const => 不变的let
function testVariable() {
    noVar = 6;
    var varVar = 6;
    for (var a = 0; a < 10; ++a) {
        console.log(a);
        break;
    }

    {
        let c = 4;
        var b = 2;
        const constVar = 8;

        const CPU_COUNT = 4;
        // CPU_COUNT = 56;

        const constObj = {
            attr: 8
        }
        constObj.attr = 7;
        console.log('constObj.attr:', constObj.attr);

        // constObj = 4;
    }
    // console.log(constVar);
    // console.log('c:', c);
    // console.log('b:', b);
    // console.log(a);
}

testVariable();


console.log(noVar);
// console.log(varVar);

function swap(a, b) {
    let temp = b;
    b = a;
    a = temp;
}

var x = 1,
    y = 2;
console.log('x:', x, 'y:', y);
swap(x, y)
console.log('x:', x, 'y:', y);

const backAutoAdd = (operand) => {
    let temp = operand;
    operand += 1;
    return temp;
}

let op1 = 4;
console.log(op1++);
// console.log('a,b,c'.split(','));
// for 循环
// console.log('abc'.map(element => element));
// console.log(Array.prototype.slice('abc'));
console.log(Array.from('abc'));
console.log([...'cab']);

// for of 
var s = "𠮷";

// s.length // 2
// s.charAt(0) // ''
// s.charAt(1) // ''
// s.charCodeAt(0) // 55362
// s.charCodeAt(1) // 57271

console.log(s.length);
console.log('中'.length); // 
let str = '𠮷𠮷𠮷𠮷𠮷𠮷𠮷𠮷';
console.log(str.length);
console.log(Array.from(str).length);

for (let index =0; index < str.length; ++index) {
    console.log(str[index]);
}

for (let char of str) {
    console.log(char);
}

// \u0000-\uFFFF =>36 
console.log(String.fromCharCode(36));


// for of 解决4字节字符问题

const bubbleSort = array => {
    let flag = true;

    for (let i = 0; i < array.length - 1 && flag; ++i) {
        flag = false;
        for (let j = 0; j < array.length - i - 1; ++j) {
          if (array[j] > array[j + 1]) {
              [array[j], array[j + 1]] = [array[j + 1], array[j]];
              flag = true;
          }
        }
    }
    return array
};

console.log(bubbleSort([12, 2, 7, 2, 6, 5, 5, 18, 3, 99, 99])); // [ 2, 2, 3, 5, 5, 6, 7, 12, 18, 99, 99 ]

