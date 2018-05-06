var key = 'account';
var state = {
    key: '666666@gmail.com'
}
console.log(state['account'])

var grade = 80;

if (0 < grade < 60) {
    console.log('不及格')
} else if (60 <= grade <= 80) {
    console.log('一般般')
} else {
    console.log('优秀')
}

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