/*1006. 换个格式输出整数 (15)
时间限制
400 ms
内存限制
65536 kB
代码长度限制
8000 B
判题程序
Standard
作者
CHEN, Yue
让我们用字母B来表示“百”、字母S表示“十”，用“12...n”来表示个位数字n（<10），换个格式来输出任一个不超过3位的正整数。例如234应该被输出为BBSSS1234，因为它有2个“百”、3个“十”、以及个位的4。

输入格式：每个测试输入包含1个测试用例，给出正整数n（<1000）。

输出格式：每个测试用例的输出占一行，用规定的格式输出n。

输入样例1：
234
输出样例1：
BBSSS1234
输入样例2：
23
输出样例2：
SS123
*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (cmd) {
  var bai = Math.floor(cmd/100);
  var shi = Math.floor(cmd%100/10);
  var ge = Math.floor(cmd%10);
  var str = '';
  for(var i = 0;i < bai; i++) {
    str += 'B';
  };
  for (var i = 0; i < shi; i++) {
    str += 'S';
  };
  for (var i = 0; i < ge; i++) {
    str += (i + 1);
  };
  console.log(str);
});