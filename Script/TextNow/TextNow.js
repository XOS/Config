/*
^https:\/\/api\.textnow\.me\/.+\/users\/.* url script-response-body langkhach/Textnow.js
*/
var obj = JSON.parse($response.body); 
obj['state'] = "PREMIUM_SUBSCRIPTION";
obj['show_ads'] = false;
obj['premium_calling'] = true;
obj['platform'] = "TN_IOS";
obj['error_code'] = "NOT_FOUND";
$done({body: JSON.stringify(obj)});