var obj = JSON.parse($response.body); 
obj['data']['official_verify']['type'] = 2;
obj['data']['official_verify']['desc'] = "超级管理员";
obj['data']['official_verify']['role'] = 2;
obj['data']['official_verify']['title'] = "管理员";
obj['data']['vip']['status'] = 2;
obj['data']['vip']['avatar_subscript'] = 2;
obj['data']['vip']['role'] = 2;
obj['data']['vip']['type'] = 2;
obj['data']['vip']['vip_pay_type'] = 2;
$done({body: JSON.stringify(obj)});