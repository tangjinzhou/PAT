// 1010. 一元多项式求导 (25)

// 时间限制
// 400 ms
// 内存限制
// 65536 kB
// 代码长度限制
// 8000 B
// 判题程序
// Standard
// 设计函数求一元多项式的导数。（注：xn（n为整数）的一阶导数为n*xn-1。）

// 输入格式：以指数递降方式输入多项式非零项系数和指数（绝对值均为不超过1000的整数）。数字间以空格分隔。

// 输出格式：以与输入相同的格式输出导数多项式非零项的系数和指数。数字间以空格分隔，但结尾不能有多余空格。注意“零多项式”的指数和系数都是0，但是表示为“0 0”。

// 输入样例：
// 3 4 -5 2 6 1 -2 0
// 输出样例：
// 12 3 -10 1 6 0
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', function(line){
    var arr = line.trim().split(' ');
    var arrTemp = [];
    var resultArr = [];
    if(arr.length >= 2) {
        //本题略坑，初步判断测试case中的输入样例中有连续多个空格，其它语言不会存在这个问题
        //如果输入：5 0 输出的是: 0 0
        for (var i = 0, len = arr.length; i < len; i ++) {
            if(arr[i] && arr[i] != '') {
                arrTemp.push(arr[i]);
            }
        }
        for (var i = 0, len = arrTemp.length; i < len; i += 2) {
            var a = parseInt(arrTemp[i],10) * parseInt(arrTemp[i+1], 10);
            var e = parseInt(arrTemp[i+1],10) - 1;
            if(a != 0) {
                resultArr.push(a, e);
            }

        };
    }

    resultArr = resultArr.length >= 2 ? resultArr : [0, 0];
    console.log(resultArr.join(' ').trim());
    rl.close();
})