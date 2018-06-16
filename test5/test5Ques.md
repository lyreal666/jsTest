#  第五次javascript测验

### 基本语法

1.给下面的函数加上文档注释

```javascript
function preAutoAdd(operand) {
    operand += 1;
    return operand
}
```

### 数据类型

2.ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。以前我出过一道题，问对象的属性名即键是什么数据类型，当时给出的答案是String类型,事实上这是错误的,请你用代码测试数组的键的数据类型。

3.写出下面的输出,写在注释后面，自行测试看看和你们想的是否一样,ES6 Object新增加一个is方法,也是用来判断相等性的,自行测试我给出的测试代码,并总结一下`==`,`===`,`Object.is()`各自特点。

```javascript
// 猜测并测试
console.log('	' == false); //
console.log('   ' === false); //
console.log(+0 === -0); //

// Object.is()测试代码
console.log(Object.is(1, 2)); //
console.log(Object.is('', false)); //
console.log(Object.is(+0, -0)); //
console.log(Object.is(NaN, NaN)) ; //
```

### 变量

4.根据代码提示完成下列关于各种声明变量方式的作用域的测试，在注释后面写出测试结果

```javascript
/*
testDir内有三个文件
./testDir
├── external1.js
├── external2.js
└── index.html
*/

// index.html
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
<script src="external1.js"></script>
<script src="external2.js"></script>
</html>
*/

// external1.js
directDefinition = 'directDefinition';
var varDefinition = 'varDefinition';
let letDefinition = 'letDefinition';
const constDefinition = 'constDefinition';

function test() {
    directDefinition1 = 'directDefinition1';
    var varDefinition1 = 'varDefinition1';
    let letDefinition1 = 'letDefinition1';
    const constDefinition1 = 'constDefinition1';
}

test()

// external2.js 下面的输出是怎样的情况?
console.log(directDefinition);
console.log(varDefinition);
console.log(letDefinition);
console.log(constDefinition);

console.log(directDefinition1);
console.log(varDefinition1);
console.log(letDefinition1);
console.log(constDefinition1);
```

5.使用函数表示后置自增运算符的计算过程,可以参考题1中表示前置自增运算符的函数。

6.下面的代码中count经过计算后结果是什么?

```javascript
let count = 0;
for (let i = 0; i < 100; ++i) {
    count = count++;
}
console.log(count);
```

7.所有有**length**属性的对象都可以看作是类数组,String的包装对象也有l**length**,怎样把一个字符串优雅有安全的转换成数组

8.function声明的函数内部有一个arguments对象,请判断他是不是数组类型,如果不是,怎样将它转换成数组对象?

9.用代码表示出所有你知道的遍历一个对象属性和属性值的方法,比较它们各自特点。

10.下面的代码解释了什么是浅拷贝,如何深拷贝一个对象,又叫克隆。

```javascript
// 浅拷贝（shallow copy）：只复制指向某个对象的指针，而不复制对象本身，新旧对象共享一块内存； 
//  深拷贝（deep copy）：复制并创建一个一摸一样的对象，不共享内存，修改新对象，旧对象保持不变。
var a = 25;
var b = a;
b = 10;
console.log(a);//25
console.log(b);//10

//浅拷贝
var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = obj1;
obj2.b = 40;
console.log(obj1);// { a: 10, b: 40, c: 30 } 
console.log(obj2);// { a: 10, b: 40, c: 30 }

// 怎样深拷贝?
```

### 流程控制

11.改写下面我写的冒泡排序算法,去掉break。

```javascript
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
```

### 设计函数

##### 字符串处理

12.按照代码提示完成函数

```javascript
let firms = ['MicroSoft', 'google', 'IBM', 'Intel', 'AMD', 'TI', 'mozilla'];
/**
 * 将字符串数组每个元素首字母改成大写,再把字符串倒置
 * @param strArray
 * @returns array
 */
const dealString = strArray => {
    // 补全
}
console.log(dealString(firms)); // [ 'tfoSorciM', 'elgooG', 'MBI', 'letnI', 'DMA', 'IT', 'allizoM' ]
```

##### 闭包

> 闭包是装饰器的基础

13.设计一个高阶函数setLog,它接受一个函数func作为参数,返回一个函数autoLogFunc,这个autoLogFunc功能和func一样,但是通过闭包修饰后的autologFunc会在执行前打印当前时间,并在执行后打印执行改函数花了多少时间。

```javascript
const setLog = func => {
    const autoLogFunc = // 补全

    return autoLogFunc;
};

const func = () => {
    for (let i = 0; i < 10000; ++i) {
        for (let j = 0; j < 10000; ++j) {
            `${i} ${j}`;
        }
    }
};

setLog(func)();
/*
Execute func at Sat Jun 16 2018 23:11:09 GMT+0800 (中国标准时间)
Execute func cost 3.526s
 */
```

### 性能优化

14.优化下面过滤数据的操作

```javascript
// 过滤来自另一份数据源的优化
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
```

