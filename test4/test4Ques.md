# Test4 questions

## Basic konwledges

1. 什么是higher-order function?

2. 怎么理解**函数式编程**这个词?

3. 面向对象编程简称**oop**,函数式编程简称**fp**,你认为**fp**的出现有什么意义,或者说解决了你以前编程的哪些痛点?

4. 常见的高阶函数有:

   * [摘抄自js高级程序设计](http://www.chinastor.org/upload/2014-12/14122310427265.pdf )

   >迭代类
   >
   >ECMAScript 5 为数组定义了 5 个迭代方法。每个方法都接收两个参数：要在每一项上运行的函数和
   >（可选的）运行该函数的作用域对象——影响 this 的值。传入这些方法中的函数会接收三个参数：数
   >组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同，这个函数执行后的返回值可能
   >会也可能不会影响方法的返回值。以下是这 5 个迭代方法的作用。
   >
   > every() ：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true ，则返回 true 。
   > filter() ：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
   > forEach() ：对数组中的每一项运行给定函数。这个方法没有返回值。
   > map() ：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
   > some() ：对数组中的每一项运行给定函数，如果该函数对任一项返回 true ，则返回 true 。
   >
   >
   >
   >归并类			
   >
   >ECMAScript 5 还新增了两个归并数组的方法： reduce() 和 reduceRight() 。这两个方法都会迭
   >代数组的所有项，然后构建一个最终返回的值。其中， reduce() 方法从数组的第一项开始，逐个遍历
   >到最后。而 reduceRight() 则从数组的最后一项开始，向前遍历到第一项。
   >这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。传
   >
   >给 reduce() 和 reduceRight() 的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这
   >个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。

   谈谈map, filter,forEach,reduce分别的使用场景,也就是说这几个函数分别应该在什么时候选择

   他们；

5. js中的**this**有很多坑,两个问题:

   1. 请写出不同情况下**this**的指向情况
   2. 有哪些情况下**this**不存在?

## Desigin function

#### 题一要求：

1. 处理一个字符串数组epicLevelFirms,其中有些首字母小写
2. 补全一个函数**processStr**,使得其将传入的数组中首字母全部改成大写
3. 返回的是原数组的拷贝,对原数组不能改变
4. 尽量使用高阶函数

```javascript
let epicLevelFirms = ["apple", "Google", "microSoft", "IBM", "mozilla"];
/**
 * 
 * @param strArray
 * @returns {*}
 */
// 补齐下面的函数
let processStr = 
console.log(processStr(epicLevelFirms)[0]); // Apple
console.log(epicLevelFirms[0]); // apple
```



### 题二要求

补全函数使得它可以接收任意个参数并且返回其相乘的结果

```javascript
/**
 * 
 * @param args
 * @returns {*|number}
 */
let factorial =
    // 补全
console.log(factorial(2, 3, 4)); // 24
```



### 题三要求

廖雪峰教程里面的一道题,请改正并说清楚为什么是小明那样的结果;

```javascript
let arr = ['1', '2', '3'];
let r;
r = arr.map(parseInt);
console.log(r); // [ 1, NaN, NaN ]
```



###  题四要求

1. 有一个数组digitalStrArray,请将其中非数字字符串过滤掉
2. 将string数组转成number数组
3. 排序
4. 返回倒序后的数组

```javascript
let digitalStrArray = ["2", "ha", "13", "5", "Mischief", "46"];
/**
 * 
 * @param array
 * @returns {Int32Array}
 */
let deal = (array) => 
// 补全
console.log(deal(digitalStrArray)); // [ 46， 13， 5， 2 ]
```



### 题五要求

1. 就是一个复杂排序
2. 首先按level排序,p后面的数越大排序的**权重**(就是越应该放最后的)越大
3. 其次按age排序,age越小权重越大
4. 反思: 有了高阶函数,别人写的排序函数是不是得以定制化了?,就不用一个场景写一个排序函数。

```javascript
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
    // 补全
});

console.log(sortArray(objects));
/*
[ { level: 'p5', age: 19 },
  { level: 'p7', age: 28 },
  { level: 'p7', age: 19 } ]
 */
```



