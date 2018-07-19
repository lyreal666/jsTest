/*
 * @Author: ytj 
 * @Date: 2018-07-15 20:56:24 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-15 22:24:23
 */

"use strict";

// Date
const getLocaleNowTimeStr = () => {
    let nowDate = new Date();

    let year = nowDate.getFullYear();
    let month = nowDate.getMonth();
    let day = nowDate.getDay();

    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();

    let dayMap = new Map([
        [1, '一'],
        [2, '二'],
        [3, '三'],
        [4, '四'],
        [5, '伍'],
        [6, '六'],
        [0, '日']
    ])

    return `localeTime=[星期${dayMap.get(day)}/${month + 1}月/${year}年:${hours}时:${minutes}分:${seconds}秒] timestamp=[${+nowDate}毫秒]`
}

console.log(getLocaleNowTimeStr()); // => localeTime=[星期日/7月/2018年:21时:13分:31秒] timestamp=[1531660411535毫秒]

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
    const pattern = /'\[name\]=(\w+?)\s+?\[age\]=(\d+?)\s+?\[grade\]=(\d)\s+?\[686\]=(\d+?)\n'Motto---(.+)/ig;
    let execResult = null;
    let students = [];
    while (execResult = pattern.exec(toBeDealtStr)) {
        let student = {
            name: execResult[1],
            age: execResult[2],
            grade: execResult[3],
            '溜不溜': execResult[4],
            'motto': execResult[5]
        }
        students.push(student);
    }

    return  JSON.stringify(students);
}

console.log(dealStr(toBeDealtStr));
// => [{"name":"ly","age":"21","grade":"2","溜不溜":"999","motto":"fighting......"},{"name":"jxq","age":"22","grade":"2","溜不溜":"666","motto":"To be able to eat is a blessing, ha ha..."},{"name":"aGirl","age":"21","grade":"1","溜不溜":"646","motto":"em em em..."}]
