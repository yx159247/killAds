

var modifiedHeaders = $request.headers;
console.log('修改前的请求头',modifiedHeaders);

// 修改请求头

modifiedHeaders['User-Agent'] = 'BossZP/12.0.0 (iPhone; iOS 15.4.1; Scale/3.00)'

console.log('修改后的请求头',modifiedHeaders);
$done({headers : modifiedHeaders});