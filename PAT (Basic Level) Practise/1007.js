/*让我们定义 dn 为：dn = pn+1 - pn，其中 pi 是第i个素数。显然有 d1=1 且对于n>1有 dn 是偶数。“素数对猜想”认为“存在无穷多对相邻且差为2的素数”。

现给定任意正整数N (< 105)，请计算不超过N的满足猜想的素数对的个数。

输入格式：每个测试输入包含1个测试用例，给出正整数N。

输出格式：每个测试用例的输出占一行，不超过N的满足猜想的素数对的个数。

输入样例：
20
输出样例：
4*/

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
}
var isPrimePair = function(pre, next) { //是否素数对
    if(isPrime(pre) && isPrime(next) && !isPrime(pre + 1)) {
        return true;
    } else {
        return false;
    }
};

rl.on('line', function(line){
    var max = +line, num = 0;
    for(var i = 3; i <= max - 2;) {
        if(isPrimePair(i, i + 2)) {
            i += 2;
            num++;
        } else {
            i++;
        }
    }
    console.log(num);
    rl.close();
});