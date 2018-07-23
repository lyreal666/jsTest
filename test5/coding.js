'use strict';

/**
 * @author: ly
 * @file: coding.js
 * @time: 2018/6/16 18:53
 * @desc:
 */


/**
 * 前置自增运算符函数
 * @param operand
 * @returns {number}
 */
function preAutoAdd(operand) {
    operand += 1;
    return operand
}

// 猜测并测试
console.log('	' == false); //
console.log('   ' === false); //
console.log(+0 === -0); //

// Object.is()测试代码
console.log(Object.is(1, 2)); //
console.log(Object.is('', false)); //
console.log(Object.is(+0, -0)); //
console.log(Object.is(NaN, NaN)) ; //

let count = 0;
for (let i = 0; i < 100; ++i) {
    count = count++;
}
console.log(count);

const bubbleSort = array => {
    let flag = true;

    for (let i = 0; i < array.length - 1; ++i) {
        if (!flag) {
            break;
        }
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


let firms = ['MicroSoft', 'google', 'IBM', 'Intel', 'AMD', 'TI', 'mozilla'];
/**
 * 将字符串数组每个元素首字母改成大写,再把字符串倒置
 * @param strArray
 * @returns array
 */
const dealString = strArray => strArray.map(ele => [...`${ele[0].toUpperCase()}${ele.substring(1)}`].reverse().join(''))
console.log(dealString(firms)); // [ 'tfoSorciM', 'elgooG', 'MBI', 'letnI', 'DMA', 'IT', 'allizoM' ]

const setLog = func => {
    const autoLogFunc = (...args) => {
        console.log(`Execute func at ${new Date()}`);
        const start = +new Date();
        const result = func(...args);
        const end = +new Date();
        console.log(`Execute func cost ${~~((end -start) / 1000)}s`);
        return result
    };

    return autoLogFunc;
};

const func = () => {
    for (let i = 0; i < 10000; ++i) {
        for (let j = 0; j < 10000; ++j) {
            `${i} ${j}`;
        }
    }
};

// setLog(func)();
/*
Execute func at Sat Jun 16 2018 23:11:09 GMT+0800 (中国标准时间)
Execute func cost 3.526s
 */

const createTestStrArray = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let strArray = [];
    for (let i = 0; i < 100; ++i) {
        let str = '';
        for (let j = 0; j < 5; ++j) {
            str = `${str}${letters[~~(Math.random()*26)]}`
        }
        strArray.push(str)
    }

    return strArray
};

let data1 = getData1();
// [{id: XXX, name: XXX}, ...]

let data2 = getData2();
// [{id: XXX, name: XXX}, ...]

data2 = data2.filter(item => {
    for (let target of data1) {
        if (target.id === item.id) {
            return false
        }
    }

    return true
});
// 有两个列表，要保证第一个列表中的数据不会出现在第二个列表中

// 作者：Jiasm
// 链接：https://juejin.im/post/5b1a9a73e51d4506dc0ac409
//     来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。