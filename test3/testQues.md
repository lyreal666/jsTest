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







