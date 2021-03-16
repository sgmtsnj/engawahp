<?php

// リダイレクト先のURLへ転送する
$url = 'http://engawa-net.com/';
header('Location: ' . $url, true, 301);

// すべての出力を終了
exit;
