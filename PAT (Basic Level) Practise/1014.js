// 1014. 福尔摩斯的约会 (20)

// 时间限制
// 50 ms
// 内存限制
// 65536 kB
// 代码长度限制
// 8000 B
// 判题程序
// Standard
// 作者
// CHEN, Yue
// 大侦探福尔摩斯接到一张奇怪的字条：“我们约会吧！ 3485djDkxh4hhGE 2984akDfkkkkggEdsb s&hgsfdk d&Hyscvnm”。大侦探很快就明白了，字条上奇怪的乱码实际上就是约会的时间“星期四 14:04”，因为前面两字符串中第1对相同的大写英文字母（大小写有区分）是第4个字母'D'，代表星期四；第2对相同的字符是'E'，那是第5个英文字母，代表一天里的第14个钟头（于是一天的0点到23点由数字0到9、以及大写字母A到N表示）；后面两字符串第1对相同的英文字母's'出现在第4个位置（从0开始计数）上，代表第4分钟。现给定两对字符串，请帮助福尔摩斯解码得到约会的时间。

// 输入格式：

// 输入在4行中分别给出4个非空、不包含空格、且长度不超过60的字符串。

// 输出格式：

// 在一行中输出约会的时间，格式为“DAY HH:MM”，其中“DAY”是某星期的3字符缩写，即MON表示星期一，TUE表示星期二，WED表示星期三，THU表示星期四，FRI表示星期五，SAT表示星期六，SUN表示星期日。题目输入保证每个测试存在唯一解。

// 输入样例：
// 3485djDkxh4hhGE
// 2984akDfkkkkggEdsb
// s&hgsfdk
// d&Hyscvnm
// 输出样例：
// THU 14:04

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var lineArr = [];
var weekDayMap = {
    'A' : 'MON',
    'B' : 'TUE',
    'C' : 'WED',
    'D' : 'THU',
    'E' : 'FRI',
    'F' : 'SAT',
    'G' : 'SUN'
};
var getEqual = function(str1, str2){
    var arr = [];
    for (var i = 0, len = str1.length; i < len; i++) {
        var charCode = str1[i].charCodeAt(0);
        if(str2[i] && str1[i] == str2[i] && ((charCode >= 65 && charCode <= 78) || (charCode >= 48 && charCode <=57))) {
            if(arr.length == 0 && weekDayMap[str1[i]]){
                arr.push(weekDayMap[str1[i]]);
            } else if(arr.length == 1){
                var hours = charCode - 48 > 9 ? charCode - 55 : charCode - 48;
                hours = hours < 10 ? '0' + hours : hours;
                arr.push(hours);
                break;
            }
        }
    };
    return arr;
};

var getEqualIndex = function(str1, str2){
    var index = 0;
    for (var i = 0, len = str1.length; i < len; i++) {
        var charCode = str1[i].charCodeAt(0);
        if(str2[i] && str1[i] == str2[i] && ((charCode >= 65 && charCode <=90)||(charCode >= 97 && charCode <= 122))) {
            index = i;
            break;
        }
    };
    return index;
};

rl.on('line', function(line){
    if(lineArr.length < 4) {
        lineArr.push(line);
    }
    if(lineArr.length == 4) {
        var equalArr = getEqual(lineArr[0], lineArr[1]);
        var minutes = getEqualIndex(lineArr[2], lineArr[3]);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        console.log(equalArr[0] + ' ' + equalArr[1] + ':' + minutes);
        rl.close();
    }
})