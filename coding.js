// // 下面的是单行注释，注意//左右都有一个空格
// // var a = 6; // 定义了一个局部变量
// //
// // /*
// // * 这是js多行注释
// // * 多行注释每一行建议都写上*
// // */
// //
// // //这是块注释，在函数或类头部用/** */，一般的Ide都会自动填写参数和返回值
// // /**
// // *
// // * @param {*} x
// // * @param {*} y
// // */
// // function add(x, y) {
// //  return x + y
// // }
// //
// // //  /*
// // //  * /\d+*/ 这是一个表达式的例子
// // //  */
// //
// // /*
// // * 所谓支持utf-8,个人认为js解释器可以解析用utf-8编写的js代码
// // * 具体就是说js的标识符是可以用utf-8字符的，
// // */
// //
// // var 变量 = 5;
// // console.log(变量)
// //
// // console.log('这是一个双引号>> "')
// //
// //
// // console.log('------------------------------------');
// // var student = {
// //     width: '20px',
// //     'background-color': 'red' // 注意最后别写逗号
// // };
// //
// // console.log(student['background-color']);
// // console.log('-----------------------------------');
// //
// //
// // varOut = 2; // 没报错
// // function strict() {
// //     'use strict';
// //     //varIn = 4; // 调用时报错
// // }
// //
// // strict();
// //
// // var author = 'ly';
// // var poem = `  静夜诗
// //     ${author}
// // 床前明月光
// // 疑是地上霜
// // 举头望明月
// // 低头思故乡`
// // console.log(poem);
// //
// //
// // var str1 = 'caligula'; // js字符串是常量.不可以改变，改变的只是指向其实就是指针，
// // var str2 = 'caligula'; // 这不是拷贝，事实上str2指向str1指向的那个'caligula'
// // str2 = 'joke'; // 不是改动了caligula这个字符串，只是将str2指向了内存新new出来的字符串'joke'
// // // 拷贝str1的方式有很多
// // str1Copy = str1.substr();
// // console.log(`str1Copy: ${str1Copy}`);
// // str1Copy = str1.slice(); //
// // console.log(`str1Copy: ${str1Copy}`);
// // str1Copy = str1 + '';
// // console.log(`str1Copy: ${str1Copy}`);
// // str1Copy = `${str1}`;
// // console.log(`str1Copy: ${str1Copy}`);
// //
// // var arr = [1, 3, -5, 9, 55, 4, 66, 999, 1204, 444, 2, 555, 31093];
// // arr = arr.slice(0, arr.indexOf(9)).concat(arr.slice(arr.indexOf(9) + 1))
// // console.log(arr);
















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

