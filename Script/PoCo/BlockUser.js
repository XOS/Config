let body = $response.body;
body = JSON.parse(body);

// 黑名单
let blackId = [201843361, 201494286, 201919782, 200605457, 201489873, 201107858, 201977522, 201919782, 201582860, 54686547, 63456771, 202001592, 44236021, 43054956, 201744654, 56752090, 201227915, 200060220, 201999962, 187575408, 174984891, 44236021, 202000045, 185799093, 175301721, 201739470, 201947233, 202002061, 61865297, 202001856, 202001585, 202001378, 53876837, 24961694, 201864116, 2907672, 178653666, 186628224, 62803345, 201907745, 202001508, 201939124, 201599228, 201571970, 201781665, 200699021, 46196999, 51762616, 201360689, 53897517, 43070459, 201370347, 201594333, 201843427, 201960827, 201969115, 54469419, 59215064];

if (body.data && body.data.list && body.data.list.length > 0) {
    var data = body.data.list;
    for (var i in data) {
        let uid = data[i].user_id;
        // let vid = data[i].visited_user_id;
        let nickname = data[i].user_nickname;
        for (var k in blackId) {
            if (uid === blackId[k]) {
                data[i] = null;
                data.splice(i, 1);
                console.log(nickname + "已被屏蔽！");
                // console.log("屏蔽用户ID："+ uid);
            }
        } 
    }
}

body = JSON.stringify(body);
$done({ body });