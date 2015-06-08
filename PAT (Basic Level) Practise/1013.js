// 1013. 数素数 (20)

// 时间限制
// 100 ms
// 内存限制
// 65536 kB
// 代码长度限制
// 8000 B
// 判题程序
// Standard
// 作者
// CHEN, Yue
// 令Pi表示第i个素数。现任给两个正整数M <= N <= 104，请输出PM到PN的所有素数。

// 输入格式：

// 输入在一行中给出M和N，其间以空格分隔。

// 输出格式：

// 输出从PM到PN的所有素数，每10个数字占1行，其间以空格分隔，但行末不得有多余空格。

// 输入样例：
// 5 27
// 输出样例：
// 11 13 17 19 23 29 31 37 41 43
// 47 53 59 61 67 71 73 79 83 89
// 97 101 103

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var isPrime = function(num) {
    var flag = true;
    //判断素数的时候只需要判断到它的平方根即可，提高效率，如果小于平方根的数都不能被整除，那么大于平方根的数一定不会被整除
    //另外此题如果不取平方根，也会超时
    var temp = Math.sqrt(num);
    for (var i = 2; i <= temp; i++) {
        if(num%i == 0) {
            flag = false;
            break;
        }
    };
    return flag;
};

rl.on('line', function(line){
    var lineArr = line.split(' ');
    var start = +lineArr[0],
        end = +lineArr[1];
    var resultArr = [];
    var temp = 0;
    var i = 1;
    while(i++) {
        if(isPrime(i)) {
            temp++;
            temp >= start && resultArr.push(i);
        }
        if(temp == end) {
            break;
        }
    }
    for (var i = 0, len = resultArr.length; i < len; i += 10) {
        var start = i, end = i + 10 > len ? len : i + 10;
        console.log(resultArr.slice(start, end).join(' '));
    };
    rl.close();
})

















