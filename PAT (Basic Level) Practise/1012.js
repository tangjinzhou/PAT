/*1012. 数字分类 (20)

时间限制
50 ms
内存限制
65536 kB
代码长度限制
8000 B
判题程序
Standard
作者
CHEN, Yue
给定一系列正整数，请按要求对数字进行分类，并输出以下5个数字：

A1 = 能被5整除的数字中所有偶数的和；
A2 = 将被5除后余1的数字按给出顺序进行交错求和，即计算n1-n2+n3-n4...；
A3 = 被5除后余2的数字的个数；
A4 = 被5除后余3的数字的平均数，精确到小数点后1位；
A5 = 被5除后余4的数字中最大数字。
输入格式：

每个输入包含1个测试用例。每个测试用例先给出一个不超过1000的正整数N，随后给出N个不超过1000的待分类的正整数。数字间以空格分隔。

输出格式：

对给定的N个正整数，按题目要求计算A1~A5并在一行中顺序输出。数字间以空格分隔，但行末不得有多余空格。

若其中某一类数字不存在，则在相应位置输出“N”。

输入样例1：
13 1 2 3 4 5 6 7 8 9 10 20 16 18
输出样例1：
30 11 2 9.7 9
输入样例2：
8 1 2 4 5 6 7 9 16
输出样例2：
N 11 2 N 9*/

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var a1 = a2 = a3 = a4 = a5 = 0;
var a = b = c = d = e = 0;
var flag = true;
rl.on('line', function(line){
    var arr = line.split(' ');
    for (var i = 1, len = arr.length; i < len; i++) {
        if(arr[i] && arr[i] != '') {
            var temp = +arr[i];
            switch(temp%5) {
                case 0:
                    if(temp%2 == 0){
                        a1 += temp;
                        a++;
                    }
                    break;
                case 1:
                    a2 += flag ? temp : -temp;
                    flag = !flag;
                    b++;
                    break;
                case 2:
                    a3++;
                    c++;
                    break;
                case 3:
                    a4 += temp;
                    d++;
                    break;
                case 4:
                    a5 = temp > a5 ? temp : a5;
                    e++;
                    break;
                default:
            }
        }
    };
    a1 = a ? a1 : 'N';
    a2 = b ? a2 : 'N';
    a3 = c ? a3 : 'N';
    a4 = d ? (a4/d).toFixed(1) : 'N';
    a5 = e ? a5 : 'N';
    console.log(a1 + ' ' + a2 + ' ' + a3 + ' ' + a4 + ' ' + a5);
    rl.close();
})