
var bossReq = $request.body;


// 修改请求体
bossReq = bossReq.replace('version=11.250', 'version=12.0.0');
console.log(bossReq);
$done(bossReq);