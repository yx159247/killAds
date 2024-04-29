

var modifiedHeaders = $request.headers;

// 修改请求头
// appKey=gyPinXiXGptx5TZf&userId=G31i0xmhCPrGgBrM8U0DgA%3D%3D&version=11.250 把版本号改成12.0.0
modifiedHeaders['User-Agent'] = 'BossZP/12.0.0 (iPhone; iOS 15.4.1; Scale/3.00)'

console.log(modifiedHeaders);
$done({headers : modifiedHeaders});