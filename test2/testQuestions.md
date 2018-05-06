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

>写一个**map** items,以**id**为key,**info**为value保存上面两条记录,并且用代码表示出item2的性别。



### 10.

>for of, for in有什么区别，for each一般传入的处理函数参数分别是什么;

### 11.

>数组的很多属性在字符串里面也有，如length, slice, indexOf,你觉得string也是Iterable吗?



