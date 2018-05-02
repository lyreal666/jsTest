---
typora-root-url: ./
---

### test1

#### 1.

> 不可以用Word或写字板来编写JavaScript或HTML，因为带格式的文本保存后不是*纯文本文件*，无法被浏览器正常读取。也尽量不要用记事本编写，它会自作聪明地在保存UTF-8格式文本时添加BOM头。

#### 2.

右键感兴趣的页面部分 => 检查

![示例图片](https://github.com/lyreal666/jsTest/blob/master/test1/eq2.png?raw=true)	



#### 3.

>单行注释绝对安全
>
>多行注释在某些情况容易出问题，比如用了正则表达式的*有时候会和多行注释冲突
>
>>/*
>>
>> \* /\d+*/ 这是一个正则表达式的例子
>>
>> */
>
>其实有些编程语言不支持多行注释，他们的多行注释是用单行注释



```
 // 下面的是单行注释，注意//左右都有一个空格
 var a = 6; // 定义了一个局部变量

 /*
 * 这是js多行注释
 * 多行注释每一行建议都写上*
 */

 //这是块注释，在函数或类头部用/** */，一般的Ide都会自动填写参数和返回值
 /**
  * 
  * @param {*} x 
  * @param {*} y 
  */
 function add(x, y) {
     return x + y
 }
```



#### 4.

```
/*
* 所谓支持utf-8,个人认为js解释器可以解析用utf-8编写的js代码
* 具体就是说js的标识符是可以用utf-8字符的，
*/

var 变量 = 5;
console.log(变量)
```



#### 5.

> console.log('这是一个双引号>> "  ')



#### 6.

>结果是 : `false`
>
>因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题,
>
>其实大多数编程语言只要是浮点数参与运算都有这个问题,因为浮点数由于存储精度的问题本身就是不精确的，比如0.1可能内部存储的就是0.0999999999999999999999999,不精确的数参与运算结果当让就是不精确的，一般判断某两个浮点数是否相等是采取差值是否足够小
>
>```
>var debug = console.log;
>//----------------------epsilon 小量----------------------------//
>/**
> * 2的-52放实际上是javaScript能表示的最小精度
> * 所以误差范围小于它可以被认为没误差
> */
>debug('------------------')
>debug(Number.EPSILON === Math.pow(2, -52)); // true
>debug(0.1 + 0.2 === 0.3); // false
>
>let isEqual = (left, right) => {
>    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
>};
>
>debug(isEqual(0.1 + 0.2, 0.3)); // true
>debug(isEqual(0.3 + 0.6, 0.9)); // true
>```
>
>

>具体参考下面的连接
>
>[里面的第一道题](https://juejin.im/entry/5ae14ce86fb9a07aab298bbd)



####  7.

>''  == false ? 

![图片](https://github.com/lyreal666/jsTest/blob/master/test1/eq7.png?raw=true)



>就客观逻辑而言这显然是`不合理`的；空字符串怎么就自动转换成false? 
>
>从这可以看出js的包容性很强，让你觉得很多不应该发生的东西神奇的发生了，
>
>这些fuck特性让js布满了深坑
>
>所以当你需要精确判断两者是否相等用 `===`



#### 8.

>有个css代码
>
>​    .student {
>
>​    width: 20px;
>
>​    background-color: red;
>
>}
>
>把上面代码写成一个对象的形式，
>
>并写出你调用background-color的方式（用代码表示)

>主要想看看你们对不规范属性名是会不会处理

```
var student = {
    width: '20px',
    'background-color': 'red' // 注意最后别写逗号
};

console.log(student['background-color']);
```

![测试图片](https://github.com/lyreal666/jsTest/blob/master/test1/eq8.png?raw=true)



#### 9.

>如何使用js严格模式，能不能在函数内部声明严格模式?

>1. 在js文件头部声明`'use strict';`即可
>2. 可以在函数内部声明严格模式的

![测试图片](https://github.com/lyreal666/jsTest/blob/master/test1/eq9.png?raw=true)



#### 10.

>如果在html里面使用外部js，你认为script标签放在html哪个位置比较合适。

>body后面吧，事实上，一般情况下html渲染顺序是从html头部渲染到尾部的，如果把`<script>`放`<head>`标签内可能会由于前面js部分计算量大或者说逻辑太重导致页面渲染延迟，影响客户端观感。``

```
<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<noscript>不支持js</noscript>
</head>
<body>

</body>
<script src="test.js"></script>
</html>
<!--
	type attr 属性在写script标签时是没必要的，默认是text/script
-->
```



#### 11.

>var author = ''  // 写你自己大名
>
>使用模板字符串写一首静夜诗，里面的插入author变量。

````
var author = 'ly';
var poem = `  静夜诗     
    ${author}
床前明月光
疑是地上霜
举头望明月
低头思故乡`
console.log(poem);
````

![测试图片](https://github.com/lyreal666/jsTest/blob/master/test1/e10.png?raw=true)



#### 12.

>12. 写出你所能想到的拷贝一个字符串的方法

```
var str1 = 'caligula'; // js字符串是常量.不可以改变，改变的只是指向其实就是指针，
var str2 = 'caligula'; // 这不是拷贝，事实上str2指向str1指向的那个'caligula'
str2 = 'joke'; // 不是改动了caligula这个字符串，只是将str2指向了内存新new出来的字符串'joke'
// 拷贝str1的方式有很多
str1Copy = str1.substr();
console.log(`str1Copy: ${str1Copy}`);
str1Copy = str1.slice(); //
console.log(`str1Copy: ${str1Copy}`);
str1Copy = str1 + '';
console.log(`str1Copy: ${str1Copy}`);
str1Copy = `${str1}`;
console.log(`str1Copy: ${str1Copy}`);
```

![测试图片](https://github.com/lyreal666/jsTest/blob/master/test1/e11.png?raw=true)



#### 13.

>不使用splice方法，从数组[1, 3, -5, 9, 55, 4, 66, 999, 1204, 444, 2, 555, 31093]中删除9

```
var arr = [1, 3, -5, 9, 55, 4, 66, 999, 1204, 444, 2, 555, 31093];
arr = arr.slice(0, arr.indexOf(9)).concat(arr.slice(arr.indexOf(9) + 1))
console.log(arr);
```

![测试图片](https://github.com/lyreal666/jsTest/blob/master/test1/eq12.png?raw=true)



#### 14.

>有个数组arr，里面有100000个字符串，现在要把这个数组里面所有字符串拼成一个字符串，你认为使用循环的方式用+拼接效率高，还是用数组的join函数拼接的方式效率高。

```
var arr = new Array();
for (var index = 0; index < 10000; index++) {
    length = Math.floor(Math.random() * 5 + 1);
    var str;
    for(var j = 0; j < length; j++) {
        str += String(97 + Math.floor(Math.random() * 26));
    }
    arr.push(str);
}

console.log(`arr create! the length: ${arr.length}`);
for (var k = 1; k < 4 ; ++k) {
    console.log(`第${k}次测试:`)
    console.time('test +');
    var rstr= '';
    for (var i = 0; i < 10000; i++) {
        rstr += arr[i];
    }
    console.log(`resultStr's length is ${rstr.length}`);
    console.timeEnd('test +');

    console.time('test join');
    var rstr = arr.join('')
    console.log(`resultStr's length is ${rstr.length}`);
    console.timeEnd('test join');
}
```



![测试图片](https://github.com/lyreal666/jsTest/blob/master/test1/eq14.png?raw=true)