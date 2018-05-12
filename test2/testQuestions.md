##                                                        第二次测试

### 1. 

> Javascript 中对象的属性是什么数据类型?

### 2.

> 下面的代码打印的结果是什么?

```
var key = 'account';
var state = {
    key: '666666@gmail.com'
}
console.log(state['account'])
```

### 3.

>写一个函数isPropertyInPropotypeChain(obj, attr),这个函数用于判断属性是否是从原型链继承得来并且自己没有这个属性的,
>
>obj是传入的对象，
>
>attr是用来判断的属性，
>
>函数返回值类型为bool类型。

### 4.

>修改下面代码使得:
>
>1. 分数在[0, 60)之间打印`不及格`
>2. [60, 80) 打印`一般`
>3. 其他打印`优秀`

```
var grade = 80;

if (0 < grade < 60) {
    console.log('不及格')
} else if (60 <= grade <= 80) {
    console.log('一般般')
} else {
    console.log('优秀')
}
```

### 5.

> 下面的这些分别值是什么?
>
> 1. !{}
> 2. !''
> 3. !0
> 4. !null
> 5. !undefine
> 6. ![]
> 7. !NaN

### 6.

>1. 写一个**for**的死循环
>2. 为什么for in循环遍历数组得到key是`string`类型 而不是`number`类型
>3. for ,while, do while分别适用于什么场景?

### 7.

>**Map** 和 **Object**很像，貌似都可以保存`key-value`,尝试列出它们的几个区别

### 8.

>尝试用多种方法,写一个函数deduplication(array) 
>
>该函数传入一个数组，返回去除重复元素且保持原顺序的新数组。

### 9.

```
var item1 = {
    id: 1,
    info: {
        name: `xiaoHong`
        gender: 'female'
    }
}

var item2 = {
    id: 1,
    info: {
        name: `xiaoMing`
        gender: 'male'
    }
}
```

>写一个**map** , 变量名为items,以**id**为key,**info**为value保存上面两条记录,并且用代码表示出item2的性别。



### 10.

>for of, for in有什么区别，for each一般传入的处理函数参数分别是什么;

### 11.

>数组的很多属性在字符串里面也有，如length, slice, indexOf,你觉得string也是Iterable吗?

### 12.

>javascript是否支持**switch**语句,以及**break**,**continue**，条件表达式(就是三目运算符 `?`)?



## 题外话

>### 强调几点
>
>- 答案文件格式不要用`.txt`,最好用`.js`,文字部分可以用注释。
>
>- 希望大家养成良好的代码风格
>
>  - 操作符左右要有空格
>
>  - js关键字后面一般要空一个空格,比如for (; ;)
>  - 花括号左边要有空格
>  - 单行注释和代码文字之间各有一个空格
>  - if 语句花括号不能省略
>  - js官方是提倡变量名驼峰写法的，如**userAge**, 像python官方提倡下划线式**use_age**
>  - 除了for循环和单行语句外不要用单目运算符++,--
>
>  ##### 示例
>
>  ```
>  let loopFlag = 0; // 定义一个标志变量 驼峰标示 单行注释左右都有空格
>  while (flag <= 5) { // 注意要while关键字右侧的空格和花括号左侧空格
>      ++loopFlag; // 单行时使用
>      if (loopFlag === 3) { // 花括号不能省略 
>          console.log(flag)
>      }
>  }
>  
>  for (; ;) { // ;表示语句结束，一般for循环中;后面有一个空格
>      
>  }
>  ```
>
>  #### js要不要写分号?
>
>  这个问题各有各有看法,vue的开发者公开表示不要写分号,但就目前而言个人认为看个人喜好吧，
>
>  我还是比较建议要写分号，毕竟js不写分号还是有一些潜在的风险
>
>  最近做项目就碰到一个
>
>  >```
>  >"use strict";
>  >
>  >async function test() {
>  >    let resultArr = [] // 没分号会被认为在对空数组索引
>  >    [1, 2, 3, 4].forEach(async (x) => resultArr.push(x));
>  >    console.log(resultArr)
>  >}
>  >
>  >(async () => {
>  >    await test()
>  >})();
>  >```
>
>  

>###  以后题目中的代码可能会出现ES6,7,8的语法，看不懂自己百度或问我，
>
>比如下面两个太常用了，我是不愿意再写var,太恶心
>
>#### 声明变量:
>
>let:声明块作用域变量,var可以不再使用了
>
>const: 相当于字面上的const let
>
>#### 箭头函数
>
>let add = (x, y) => x+y
>
>console.log(add(1, 2) )  // 3

