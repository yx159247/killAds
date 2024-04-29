

var modifiedHeaders = $request.headers;
var obj = JSON.parse(modifiedHeaders);
// 修改请求头
obj['User-Agent'] = 'BossZP/12.060 (iPhone; iOS 15.4.1; Scale/3.00)';
modifiedHeaders = JSON.stringify(obj)
var modifiedPath = $request.url;
$done({path: modifiedPath, headers : modifiedHeaders});
