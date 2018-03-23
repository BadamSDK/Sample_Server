<?php
/**
 * 校验token合法性
 * @param string $appid 应用ID
 * @param string $token Token
 * @return string
 */
function verify_token($appid, $token) {
    $url = 'http://test.open.badambiz.com/api/user/verify_token/';
    $post_data = array(
        'appid' => $appid,
        'token' => $token,
    );
    $postdata = http_build_query($post_data);
    $options = array(
        'http' => array(
            'method' => 'POST',
            'header' => 'Content-type:application/x-www-form-urlencoded',
            'content' => $postdata,
            'timeout' => 15 * 60 // 超时时间（单位:s）
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return $result;
}

$appid = ''; //填写游戏APPID
$token = ''; //填写token
$data = verify_token($appid, $token);
echo $data
?>
