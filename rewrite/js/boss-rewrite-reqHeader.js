

var modifiedHeaders = $request.headers;
console.log('修改前的请求头'+modifiedHeaders['User-Agent']);

// 修改请求头

modifiedHeaders['User-Agent'] = 'BossZP/12.060 (iPhone; iOS 15.4.1; Scale/3.00)'

var modifiedPath = $request.url;
console.log('修改后的请求头'+modifiedHeaders['User-Agent']);
$done({path: modifiedPath, headers : modifiedHeaders});
