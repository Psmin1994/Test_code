<!-- JSON이 없다면? -->
<?php
    $timezone = ['Asia/Seoul', 'America/New_York'];
    header('Content-Type : application/json');
    echo json_encode($timezone);
?>