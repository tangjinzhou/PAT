/*1008. 数组元素循环右移问题 (20)

时间限制
400 ms
内存限制
65536 kB
代码长度限制
8000 B
判题程序
Standard
一个数组A中存有N（N>0）个整数，在不允许使用另外数组的前提下，将每个整数循环向右移M（M>=0）个位置，即将A中的数据由（A0 A1……AN-1）变换为（AN-M …… AN-1 A0 A1……AN-M-1）（最后M个数循环移至最前面的M个位置）。如果需要考虑程序移动数据的次数尽量少，要如何设计移动的方法？

输入格式：每个输入包含一个测试用例，第1行输入N ( 1<=N<=100)、M（M>=0）；第2行输入N个整数，之间用空格分隔。

输出格式：在一行中输出循环右移M位以后的整数序列，之间用空格分隔，序列结尾不能有多余空格。

输入样例：
6 2
1 2 3 4 5 6
输出样例：
5 6 1 2 3 4*/
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var nm = [], arr = [];
var result = function(n, m, arr){
    if(n >= 1 && m >=0 && arr.length === n){
        m = m%n; //如果m > n则只需要移动m%n即可
        return (arr.slice(0 - m).join(' ') + ' ' +arr.slice(0, 0 -m).join(' ')).trim();
    } else {
        return '格式错误';
    }
};
rl.on('line', function(line){
    if(nm.length == 0) {
        nm = line.trim().split(' ');
    } else {
        arr = line.trim().split(' ');
        console.log(result(+nm[0], +nm[1], arr));
        rl.close();
    }
})