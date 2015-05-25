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