/*1015. 德才论 (25)

时间限制
200 ms
内存限制
65536 kB
代码长度限制
8000 B
判题程序
Standard
作者
CHEN, Li
宋代史学家司马光在《资治通鉴》中有一段著名的“德才论”：“是故才德全尽谓之圣人，才德兼亡谓之愚人，德胜才谓之君子，才胜德谓之小人。凡取人之术，苟不得圣人，君子而与之，与其得小人，不若得愚人。”

现给出一批考生的德才分数，请根据司马光的理论给出录取排名。

输入格式：

输入第1行给出3个正整数，分别为：N（<=100000），即考生总数；L（>=60），为录取最低分数线，即德分和才分均不低于L的考生才有资格被考虑录取；H（<100），为优先录取线——德分和才分均不低于此线的被定义为“才德全尽”，此类考生按德才总分从高到低排序；才分不到但德分到线的一类考生属于“德胜才”，也按总分排序，但排在第一类考生之后；德才分均低于H，但是德分不低于才分的考生属于“才德兼亡”但尚有“德胜才”者，按总分排序，但排在第二类考生之后；其他达到最低线L的考生也按总分排序，但排在第三类考生之后。

随后N行，每行给出一位考生的信息，包括：准考证号、德分、才分，其中准考证号为8位整数，德才分为区间[0, 100]内的整数。数字间以空格分隔。

输出格式：

输出第1行首先给出达到最低分数线的考生人数M，随后M行，每行按照输入格式输出一位考生的信息，考生按输入中说明的规则从高到低排序。当某类考生中有多人总分相同时，按其德分降序排列；若德分也并列，则按准考证号的升序输出。

输入样例：
14 60 80
10000001 64 90
10000002 90 60
10000011 85 80
10000003 85 80
10000004 80 85
10000005 82 77
10000006 83 76
10000007 90 78
10000008 75 79
10000009 59 90
10000010 88 45
10000012 80 100
10000013 90 99
10000014 66 60
输出样例：
12
10000013 90 99
10000012 80 100
10000003 85 80
10000011 85 80
10000004 80 85
10000007 90 78
10000006 83 76
10000005 82 77
10000002 90 60
10000014 66 60
10000008 75 79
10000001 64 90*/

//时间超时，无奈
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var n = l = h = -1;
var studInfoArr = [],
    hArr = [], //才德全尽
    dhArr = [], //德胜才
    cdlArr = [], //才德兼亡
    otherArr = [];//其它及格考生
var sum = 0;
var sortFunc = function(arr1, arr2){
    var total1 = arr1[1] + arr1[2],
        total2 = arr2[1] + arr2[2];
    if (total1 != total2) {
        return total2 - total1; //降序
    } else if(arr1[1] != arr2[1]) {
        return arr2[1] - arr1[1]; //降序
    } else {
        return arr1[0] - arr2[0];//升序
    };
};

var getResult = function(hArr, dhArr, cdlArr, otherArr){
    
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].sort(sortFunc);
        for (var j = 0; j < arguments[i].length; j++) {
            console.log(arguments[i][j].join(' '));
        };
    };
} 

rl.on('line', function(line){
    if(n == -1) {
        var arr = line.split(' ');
        n = +arr[0], 
        l = +arr[1],
        h = +arr[2];
    } else {
        var infoArr = line.split(' '),
            infoId = +infoArr[0],
            de = +infoArr[1],
            cai = +infoArr[2];
        if(de < l || cai < l) {
        } else if(de >= h && cai >= h) {
            sum++;
            hArr.push([infoId, de, cai]);
        } else if(de >= h) {
            sum++;
            dhArr.push([infoId, de, cai]);
        } else if(de >= cai) {
            sum++;
            cdlArr.push([infoId, de, cai]);
        } else {
            sum++;
            otherArr.push([infoId, de, cai]);
        }
        
        n--;
    }
    if(n == 0){
        console.log(sum);
        getResult(hArr, dhArr, cdlArr, otherArr);
        rl.close();
    }
})