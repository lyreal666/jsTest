# Test4 Basic konwledges

1. 什么是higher-order function?

   ```javascript
   能把函数当参数传递，或把函数当作返回值的函数
   ```

2. 怎么理解**函数式编程**这个词?

   ```
   函数式编程就像数学表达式运算,变量值是不可变的,一切新的值都是通过函数演算得到的, y = f(x);
   一切问题的最终解都是由一个个小函数组合出来的一个最终函数，函数是基本的运算单元, 实际体现就是函数参数和返回值都可以是函数;
   函数式编程更接近自然语言,是对行为的抽象；
   ```

   

3. 面向对象编程简称**oop**,函数式编程简称**fp**,你认为**fp**的出现有什么意义,或者说解决了你以前编程的哪些痛点?

   ```markdown
   1.看起来比不用函数式编程更简洁更自然
   2.函数可以传参,提高了函数的扩展性,可以返回函数使得函数可以抽象成装饰器,通俗点说就是可以函数可以订制化
   3.函数式编程是状态的转换,不允许可变量,同一个输入,有固定的输出,所以构建的程序更稳定。
   
   ```

   

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

   #### 注意加粗的字

   1. map: 要**返回**和原可迭代对象**同数量**的经过**映射**元素的集合时
   2. filter: 当需要**过滤**原可迭代对象中符合**某些条件**的元素,并**返回**原集合元素的**一部分**构成的集合
   3. forEach: 就是一个**不可以break**的函数式的**计数器式for循环**,适用于需要遍历可迭代对象且**不需要返回**的情况；
   4. reduce: 会返回**一个**最终结果,这个结果是不断由**相邻**的元素演算得到

   总结:上面4个都会遍历所有元素,但是forEach是没有返回的,map返回的集合时原集合经过映射后的,filter返回的是原对象的子集,reduce使用场景很有特点:相邻, 归并到一个变量,比如连乘连加等需要连着来得到最终解的情况...

   

5. js中的**this**有很多坑,两个问题:

   1. 请写出不同情况下**this**的指向情况
   2. 有哪些情况下**this**不存在?

   ```
   // 第一个问题:
   /*
   * 首先给出总结性的一句话:this总是指向调用者
   * 情况一:对象调用
   * xiaoMing.func(),func中的this指向调用者xiaoMing
   * 情况二:直接调用
   * func,直接调用的且带有this只有全局函数,由于全局函数被绑定到全局变量window(浏览器环境),所以func和
   * window.func等效的,func指向window
   * 由于指向window没什么意义,而且不合理,所以严格模式下,直接规定this指向undefined
   * 情况三:通过call函数和bind函数绑定后,此时this始终指向被绑定对象,
   * 希望你们记住call函数的参数形式是(bindedObj, ...arges),bind是(bindedObj, argsArray)
   */
   
   // 第二个问题:
   /*
   * 有人说没看懂意思?就是字面意思啊,你以为任意函数内this都是存在的吗?too young....
   * 1. 箭头函数内不存在this,不仅是this, arguments也不存在,但是可以用rest语法
   * 2. 函数内函数,不存在,函数作用域是独立与全局作用域的,函数内函数this如果要指向对象也是指向外层函数
   * ,注意：js是一门比较纯面向对象的语言,一切皆对象,函数也是对象，指向外层函数没什么意义,也就this指向* * undefined
   * 3. 这就比较扯淡了: this = undefined;......
   */
   // 测试代码
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
   
   arrowObj.arrowFunc()
   
   // 输出
   // funcInFunc:  undefined
   // arrowFuncThis:  undefined
   ```

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
let processStr = strArray => strArray.map(ele => ele[0].toUpperCase() + ele.slice(1))
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
let factorial = (...args) => args.reduce((f, b) => f * b);
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

```javascript
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

```javascript
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
```



### 题五要求

1. 就是一个复杂排序
2. 首先按level排序,p后面的数越大排序的**权重**(就是越应该放最后的)越大
3. 其次按age排序,age越小权重越大
4. 反思: 有了高阶函数,别人写的排序函数是不是得以定制化了?,就不用一个场景写一个排序函数。

```javascript
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
```
