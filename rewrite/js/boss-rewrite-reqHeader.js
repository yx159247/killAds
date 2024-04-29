

var modifiedHeaders = $request.headers;

// 修改请求头

modifiedHeaders['User-Agent'] = 'BossZP/12.0.0 (iPhone; iOS 15.4.1; Scale/3.00)'

console.log(modifiedHeaders);
$done({headers : modifiedHeaders});