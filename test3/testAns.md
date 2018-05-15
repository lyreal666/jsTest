## 第三次测试

### 1.  基础复习

>```javascript
>let num = 15;
>// 用代码表示出num的16进制字符
>
>// 字符'饕餮'的unicode码值是多少
>
>// console.log(!new Set([])) 输出是什么?
>
>// console.log(0.1 - 0.1 === 0.0) true还是false?
>
>// 下面答应的结果是什么? 把&&换成||呢?
>let str = 'abc';
>'' && str.slice(0, 1);
>console.log(str);
>```

```javascript
//------------------------第一题-----------------------//
// 进制转换
let num = 15;
console.log(num.toString(16)); // f

// 打印码值
console.log('饕'.codePointAt(0).toString(16), '餮'.codePointAt(0).toString(16));

// 复习bool转换,对象转bool,一定是true
console.log(!new Set([])); // false

// 0.0 和 0在js一点区别都没有,都是number类型
console.log(0.1 - 0.1 === 0.0); // true

// 考察短路操作符,以及slice并不会改变原来的字符串
// 短路操作符就是短路操作符前面可以得出结果就不会执行后面的判断
let str = 'abc';
'' && str.slice(0, 1);
console.log(str); // abc
'' || str.slice(0, 1);
console.log(str); // abc
// 看下面的例子
'' && console.log('def'); // 不打印
'' || console.log('hjk'); // 打印hjk

```



### 2.设计函数

>```javascript
>/**
> * 一群学生分组对抗 
> * 不足2人返回null
> * 人数足够多8人一组
> * 最少2组
> * 返回应该分的组数
> * @param studentsCount
> * @returns {*}
> */
>let getGroups = studentsCount => {
>    // 补齐代码
>};
>
>console.debug(getGroups(1)); // null
>console.debug(getGroups(7)); // 2
>console.log(getGroups(19)); // 3
>```

```javascript
//----------------------第二题---------------------------//
// Math对象是个好东西,要学会利用

// 推荐答案
let getGroups = studentsCount => studentsCount < 2 ? null : Math.max(2, Math.ceil(studentsCount / 8));

console.debug(getGroups(1)); // null
console.debug(getGroups(7)); // 2
console.log(getGroups(19)); // 3

/**
 * 普通方法
 * 3种情况
 * 小于2, 大于2小于17, 大于等于17
 * 概率高分支的放前面有助于提高效率
 * @param studentsCount
 */
getGroups = (studentsCount) => {
    if (studentsCount >= 17 ) {
        return studentsCount / 8 === 0 ? studentsCount / 8 : Math.trunc(studentsCount / 8) + 1;
    } else if (studentsCount >= 2 && studentsCount <= 17) {
        return 2;
    } else {
        return null
    }
};

console.debug(getGroups(1)); // null
console.debug(getGroups(7)); // 2
console.log(getGroups(19)); // 3

// 扩展
console.log(Math.ceil(2.1)); // 3 向上取整
console.log(Math.floor(2.7)); // 2 向下取整
console.log(Math.round(2.1), Math.round(2.6)); // 2 3四舍五入
console.log(Math.pow(3, 4)); // 81 阶乘
console.log(Math.min(6, 4, -1)); // -1 取最小值, max类似
console.log(Math.trunc(-0.141592654)); // -0 取整
```



### 3. 字符串处理

>```javascript
>// 待处理字符串数组
>let data = [
>    '*/A19_100.lab',
>    '*/A19_101.lab',
>    '*/A19_102.lab',
>    '*/A19_103.lab',
>    '*/A19_104.lab',
>    '*/A19_105.lab',
>    '*/A19_106.lab',
>];
>
>
>/**
> * 将data数组中每个字符串前后加一个双引号
> * 将data中字符串拼成一个字符串使得其中每个元素占一行
> * @param data
> * @returns {string}
> */
>const deal = (data) => {
>    let resultStr = '';
>    // 补齐代码
>
>    return resultStr;
>};
>```

```javascript
//----------------------第三题-------------------------//
// 待处理字符串数组
let data = [
    '*/A19_100.lab',
    '*/A19_101.lab',
    '*/A19_102.lab',
    '*/A19_103.lab',
    '*/A19_104.lab',
    '*/A19_105.lab',
    '*/A19_106.lab',
];

/**
 * 将data数组中每个字符串前后加一个双引号
 * 将data中字符串拼成一个字符串使得其中每个元素占一行
 * @param data
 * @returns {string}
 */
let deal = (data) => { // 普通做法1
    let resultStr = '';
    for (let i = 0; i < data.length; ++i) {
        data[i] = `"${data[i]}"\n`;
    }
    resultStr = data.join('').slice(0, -1); // 直接用'\n拼接也行
    return resultStr;
};
let data1 = data.slice();
console.log(Array(30).fill('-').join(''));
console.log(deal(data));


deal = data => {
    let resultStr = '';
    for (let i = 0; i < data.length; ++i) {
        resultStr += `"${data[i]}"\n`
    }
    resultStr = resultStr.slice(0, -1); // 直接用'\n拼接也行
    return resultStr;
};
let data2 = data1.slice();
console.log(Array(30).fill('-').join(''));
console.log(deal(data1));

// 逼格高的做法1 使用高阶函数
deal = data => data.map(ele => `"${ele}"`).join('\n');
let data3 = data2.slice();
console.log(Array(30).fill('-').join(''));
console.log(deal(data2));

// 高逼格2
deal = data => data.map(ele => `"${ele}"`).reduce((f, b) => `${f}\n${b}`);
console.log(Array(30).fill('-').join(''));
console.log(deal(data2));
```



#### 4.数据结构

>#### 分别选用合适的数据类型用代码表示给出的伪代码数据
>
>1. ```yaml
>   file:
>       fileName: 'test.txt'
>       fileSize: 200
>       type: 'executable'
>   ```
>
>2. ```yaml
>   来过11栋的人:
>     - 小刘
>     - 小骆
>     - 小兰
>     - 小高
>     - 小骆
>     - 小高
>     - 小胡
>   ```
>
>3. ```yaml
>   items:
>     item1:
>       22
>     item2:
>       33
>     item3:
>       44
>     item3:
>       22
>     item4:
>       66
>   ```

```javascript
//----------------------第四题-----------------------------//
// 显然是对象
let file = {
    fileName: 'test.txt',
    fileSize: 200,
    type: 'executable'
};

// 要重复数据何用,只需要记录有谁来过
let 来过11栋的人 = new Set([
    '小刘',
    '小骆',
    '小兰',
    '小高',
    '小骆',
    '小高',
    '小胡'
]);

for (let 人 of 来过11栋的人) {
    console.log(人);
}

// 对象不是用来保存数据的,保存大量键值对用map
let items = new Map([
    ['item1', 22],
    ['item2', 33],
    ['item3', 44],
    ['item3', 66],
    ['item4', 66]
]);

for (let [key, value] of items) {
    console.log(key, 'is', value);
}

```



### 5.函数初步

>1. 不使用`ES6`参数默认值语法怎样给参数设默认值?例如下面的**pow**函数
>
>```javascript
>// ES6
>let pow = (n, m=2) => {
>    return Array(m).fill(n).reduce((f, b) => f * b);
>};
>
>console.log(pow(2)); // 4
>console.log(pow(2, 3)); // 8
>
>// ES5不能用 m=2，用代码改写;
>const pow = n => {
>    return
>};
>```
>2. 根据代码注释完成
>
>```javascript
>/**
> * 接受任意个参数
> * 打印用空格拼接所有字符串参数构成的字符串
> * @param 
> */
>const print = // 补全函数
>      
>      
>      
>print('hello', 'world'); // hello world
>print('name:', 'ly'); // name: ly
>
>```
>
>3. **var** 和**let**有什么区别? 
>
>4. 提取其中`method`,`url`,`status`,按比如`<GET http://localhost:8081/> status: 200`的格式输出他们(相当于一条日志)
>
>```javascript
>   let http = {
>    method: 'GET',
>    header: {
>        'User-Agent': 'fireFox'
>    },
>    req: {
>      url: 'http://localhost:8080/'
>    },
>    response: {
>        status: 200,
>        reason: 'ok',
>        text: '<h1>测试成功</h1>'
>    }
>};
>```
>
>   

```javascript
//---------------------第五题--------------------------//
// ES6
let pow = (n, m=2) => {
    return Array(m).fill(n).reduce((f, b) => f * b);
};

console.log(Array(30).fill('-').join(''));
console.log(pow(2)); // 4
console.log(pow(2, 3)); // 8

// ES5不能用 m=2，用代码改写;
// 方法一 箭头函数内部不存在arguements,所以用匿名函数
pow = function (n) {
    let m =  arguments[1] || 2;
    return Array(m).fill(n).reduce((f, b) => f * b);
};

console.log(Array(30).fill('-').join(''));
console.log(pow(2)); // 4
console.log(pow(2, 3)); // 8

// 方法二
pow = ({n, m}) => {
    m = m ? m : 2;
    return Array(m).fill(n).reduce((f, b) => f * b);
};
console.log(Array(30).fill('-').join(''));
console.log(pow({n: 2})); // 4
console.log(pow({n: 2, m: 3})); // 8

/**
 * 接受任意个参数
 * 打印用空格拼接所有字符串参数构成的字符串
 * @param rest
 */
const print = (...rest) => console.log(rest.reduce((f, b) => `${f} ${b}`));
print('hello', 'world'); // hello world
print('name:', 'ly'); // name: ly

/**
 * 最大的区别: 作用域不同
 * var 是函数作用域或全局作用域
 * let 是块作用域
 * 另外:
 * var 比较浪,各种不合理用法不会报错
 * let 比较严肃,正经,限制很大,带来的好处就是不容易出错
 * 上面两点具体就是说:
 * var 可以重复声明,有变量提升,导致一种先声明后使用的假象
 * let 不可以重复声明,必须先声明后使用
 * 结论: 应该使用let少用var
 * 题外话: 今天在学校机房那破电脑上试了试那电脑IE浏览器能不能用let声明,结果不行
 */

let http = {
    method: 'GET',
    header: {
        'User-Agent': 'fireFox'
    },
    req: {
        url: 'http://localhost:8080/'
    },
    response: {
        status: 200,
        reason: 'ok',
        text: '<h1>测试成功</h1>'
    }
};

let {method:m, req: {url}, response: {status:s}} = http;
console.log(`<${m} ${url}> status: ${s}`);



```







