/*1016. 部分A+B (15)

时间限制
100 ms
内存限制
65536 kB
代码长度限制
8000 B
判题程序
Standard
作者
CHEN, Yue
正整数A的“DA（为1位整数）部分”定义为由A中所有DA组成的新整数PA。例如：给定A = 3862767，DA = 6，则A的“6部分”PA是66，因为A中有2个6。

现给定A、DA、B、DB，请编写程序计算PA + PB。

输入格式：

输入在一行中依次给出A、DA、B、DB，中间以空格分隔，其中0 < A, B < 1010。

输出格式：

在一行中输出PA + PB的值。

输入样例1：
3862767 6 13530293 3
输出样例1：
399
输入样例2：
3862767 1 13530293 8
输出样例2：
0*/

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', function(line){
    var arr = line.split(' ');
    var a = new RegExp('[^' + arr[1] +']', 'g');
    var pa = arr[0].replace(a,'');
    var b = new RegExp('[^' + arr[3] +']', 'g');
    var pb = arr[2].replace(b,'');
    console.log(+pa + +pb);
    rl.close();
})