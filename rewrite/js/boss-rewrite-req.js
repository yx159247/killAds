
var bossReq = $request.body;


// 修改请求体
// appKey=gyPinXiXGptx5TZf&userId=G31i0xmhCPrGgBrM8U0DgA%3D%3D&version=11.250 把版本号改成12.0.0
var modifiedUrl = bossReq.replace(/version=11\.250/, "version=12.0.0")
console.log(modifiedUrl);
$done(modifiedUrl);