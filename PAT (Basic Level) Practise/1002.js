/*读入一个自然数n，计算其各位数字之和，用汉语拼音写出和的每一位数字。

输入格式：每个测试输入包含1个测试用例，即给出自然数n的值。这里保证n小于10100。

输出格式：在一行内输出n的各位数字之和的每一位，拼音数字间有1 空格，但一行中最后一个拼音数字后没有空格。

输入样例：
1234567890987654321123456789
输出样例：
yi san wu*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(cmd){
    var arr = ['ling', 'yi', 'er', 'san', 'si', 'wu', 'liu', 'qi', 'ba', 'jiu'];
    var tempArr = [];
    var sum = 0;
    for (var i = 0, len = cmd.length; i < len; i++) {
        sum += +cmd[i];
    }
    var sumStr = sum + '';
    for (var i = 0, len = sumStr.length; i < len; i++) {
        tempArr.push(arr[+sumStr[i]]);
    }
    console.log(tempArr.join(' '));
    rl.close();
})