"use strict";

let debug = console.debug;

// 测试表明是字符串类型
let obj = {};
obj.oneAttr = 1;
for (let attr in obj) {
    debug(`the type of attr oneAttr in obj: ${typeof attr}`);
}

var key = 'account';
var state = {
    key: '666666@gmail.com'
}
console.log(state['account'])

let isPropertyInPropotypeChain = (obj, attr) => {
    return attr in obj && !obj.hasOwnProperty(attr)
};

let obj1 = {
    name: 'ly'
};

debug(isPropertyInPropotypeChain(obj1, 'name')); // false
debug(isPropertyInPropotypeChain(obj1, 'toString')); // true

var grade = 80;

if (grade >= 0 && grade < 60) {
    console.log('不及格')
} else if (grade >= 60 && grade < 80) {
    console.log('一般般')
} else if(grade >= 80 && grade <= 100){
    console.log('优秀')
} else {
    //
}

// 测试代码
debug(`!{}: ${!{}}`);
debug(`!'': ${!''}`);
debug(`!0: ${!0}`);
debug(`!null: ${!null}`);
debug(`!undefined: ${!undefined}`);
debug(`![]: ${![]}`);
debug(`!NaN: ${!NaN}`);

// for的死循环
//for (; ;) {}

/*
* 因为for in循环遍历的是对象的属性,对象的属性就是string类型
 */

// for 适合计数器类型的,step有规律的
for (let i = 0; i < 10; i += 2) {debug(i)}

// while 适用于不是计数器类型或者条件复杂的情况
let num = +new Date() % 2; // 时间戳对2求模
while (num !== 0) {
    debug(num);
    num = +new Date() % 2;
}

// do while 适用于至少循环一次的情况
let doSomeThing = () => debug('doSomeThing....');
do {
    doSomeThing();
} while (false);

// for 和 while 循环可能一次都不执行，因为他们是先判断循环条件再执行循环体
// 而do while是先执行再判断


// 对象key一定是string类型的,但是Map的键可以是别的任意数据类型
let map = new Map([[1, 'google'], ['country', 'America']]);
debug(map.get(1)); // 'google'
let obj2 = {
    1: 'google',
    country: 'America'
};

// for in 遍历不了Map的
for (let attr in map) {debug(attr)}

// for of 无法遍历对象,因为对象不是iterable
// for (let attr of obj2) {debug(attr)} // 报错


// 展示两种不hack的方法
let array = [2, 3, 7, 6, 2, 14, 8, 3, 6, 9, 10, 8, 14];

let deduplication1 = (array) => {
    let resultArr = [];

    array.forEach((ele) => {
        if (resultArr.indexOf(ele) === -1) {
            resultArr.push(ele);
        }
    }); // 删除重复元素

    return resultArr.sort((x, y) => x - y) // 按数字大小排序
};

debug(deduplication1(array));

let deduplication2 = (array) => Array.from(new Set(array)).sort((x, y) => x - y);
// 上面的还可以更简洁: let deduplication2 = (array) => [...new Set(array)].sort((x, y) => x - y);
debug(deduplication2(array));
debug(Array.isArray(deduplication2(array))); // Array.isArray()最靠谱的检验是不是数组的方法

var item1 = {
    id: 1,
    info: {
        name: `xiaoHong`,
        gender: 'female'
    }
}

var item2 = {
    id: 1,
    info: {
        name: `xiaoMing`,
        gender: 'male'
    }
}

let items = new Map([
    [item1.id, item1.info],
    [item2.id, item2.info]
]);

debug(items.get(1).gender);

let str = 'test2 end!';
for (let v of str) {debug(v)} // 不报错 打印每个字符