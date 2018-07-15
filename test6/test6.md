# javascript test 6th

### date部分 

补全下面函数

返回当前本地时间和时间戳字符串,格式按照下面代码所示

``` javascript
"use strict";

// Date
const getLocaleNowTimeStr = () => {
    
    return 
}

console.log(getLocaleNowTimeStr()); // => localeTime=[星期日/7月/2018年:21时:13分:31秒] timestamp=[1531660411535毫秒]

```
### 正则表达式和JSON

补全下面函数，函数接受一个待处理字符串,返回一个json字符串

从下面的toBeDealtStr模版字符串中提取出students数组,按照给定序列化结果的格式序列化为JSON文本字符串。

```javascript
// 正则表达式 和 JSON

const toBeDealtStr = `# some students data


 // 注: [686]后面一定是数字 grade为1-4
'[name]=ly [age]=21    [grade]=2 [686]=999
'Motto---fighting......

'[name]=jxq [age]=22 [grade]=2     [686]=666
'Motto---To be able to eat is a blessing, ha ha...

'[name]=aGirl     [age]=21 [grade]=1 [686]=646
'Motto---em em em...

`

const dealStr = (toBeDealtStr) => {

    return  ;
}

console.log(dealStr(toBeDealtStr));
// => [{"name":"ly","age":"21","grade":"2","溜不溜":"999","motto":"fighting......"},{"name":"jxq","age":"22","grade":"2","溜不溜":"666","motto":"To be able to eat is a blessing, ha ha..."},{"name":"aGirl","age":"21","grade":"1","溜不溜":"646","motto":"em em em..."}]

```

