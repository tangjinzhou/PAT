/*读入n名学生的姓名、学号、成绩，分别输出成绩最高和成绩最低学生的姓名和学号。

输入格式：每个测试输入包含1个测试用例，格式为

  第1行：正整数n
  第2行：第1个学生的姓名 学号 成绩
  第3行：第2个学生的姓名 学号 成绩
  ... ... ...
  第n+1行：第n个学生的姓名 学号 成绩
其中姓名和学号均为不超过10个字符的字符串，成绩为0到100之间的一个整数，这里保证在一组测试用例中没有两个学生的成绩是相同的。
输出格式：对每个测试用例输出2行，第1行是成绩最高学生的姓名和学号，第2行是成绩最低学生的姓名和学号，字符串间有1空格。

输入样例：
3
Joe Math990112 89
Mike CS991301 100
Mary EE990830 95
输出样例：
Mike CS991301
Joe Math990112*/
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var max = -1,
    maxInfo = '',
    minInfo = '',
    maxScore = 0,
    minScore = 100;
var check = function(str) {
    var tempArr = str.split(' ');
    if(+tempArr[2] >= maxScore) {
        maxScore = +tempArr[2]; //注意转成数字类型赋值，否则下次if条件就变成了字符串比较
        maxInfo = tempArr[0] + ' ' + tempArr[1];
    }
    if(+tempArr[2] <= minScore) {
        minScore = +tempArr[2];
        minInfo = tempArr[0] + ' ' + tempArr[1];
    }
};
rl.on('line', function(line) {
    if(max == -1) {
        max = line;
    } else {
        max--;
        check(line);
    }
    if(max == 0 || line == 0) {
        console.log(maxInfo);
        console.log(minInfo);
        rl.close();
    }
})