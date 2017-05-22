<?php
// destination for all user signups:
$to = "sales@logzilla.net";

/* Dev Mode for local testing of the script itself
set devmode=1 for local command line testing
e.g.: 'php ./emailform.php'
*/
$devmode=0;

if($_POST) {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    list($fname, $lname) = explode(",", $name);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $company = filter_var($_POST["company"], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
} else {
    if ($devmode == 1) {
        $name = "Clayton Dukes";
        $email = "test@cduk.es";
        $subject = "test from www";
        $message = "test message";
        $company = "LogZilla";
        $phone = "919-111-1111";
    }
}
if (isset($email)) {
    $slackData = array (
        'channel' => '#website',
        'attachments' =>
        array (
            0 =>
            array (
                'color' => '#9C1A22',
                'title' => "$subject",
                'text' => "```$message```",
                'thumb_url' => 'http://www.logzilla.net/images/icon_warning_25x25.png',
                'fallback' => 'New Download Request',
                'author_icon' => 'http://www.logzilla.net/images/log_file_icon_25x25.png',
                'pretext' => "New Download Request from $name",
                'author_link' => "mailto:$email",
                'fields' =>
                array (
                    0 =>
                    array (
                        'value' => "$name",
                        'title' => 'Name',
                        'short' => 'true',
                    ),
                    1 =>
                    array (
                        'value' => "$email",
                        'title' => "$fname's email address",
                        'short' => 'true',
                    ),
                    array (
                        'value' => "$phone",
                        'title' => "$fname's #",
                        'short' => 'true',
                    ),
                    array (
                        'value' => "$company",
                        'title' => "$fname's Company",
                        'short' => 'true',
                    ),
                ),
                'mrkdwn_in' =>
                array (
                    0 => 'text',
                    1 => 'fields',
                ),
                'author_name' => 'LogZillaBot',
            ),
        ),
        'username' => 'WWW',
        'icon_url' => 'http://www.logzilla.net/images/logo_orange_png_cropped_40x40.png',
    );
    /* DEBUG Log */
    $file = '/var/log/mailer.log';
    $current = file_get_contents($file);
    $body = "Message: $message\nE-mail: $email";

    if(@mail($to, $subject, $body)) {
        $output = json_encode(array('success' => true));
        $current .= "success," . date("Y-m-d") . "," . date("H:i:s") . ",$subject, $name, $email, $company, $phone, $message\n";
        $syslog = "Path: assets/ajax/mailer.php Mailer: Success Subject: $subject Name: $name Email: $email Company: $company Phone: $phone Message: $message\n";
        openlog('www-mailerform', LOG_NDELAY, LOG_USER);
        syslog(LOG_NOTICE, $syslog);
        file_put_contents($file, $current);
        slack($name, $subject, $email, $company, $phone, $message, $slackData);
        die($output);
    } else {
        $output = json_encode(array('success' => false));
        $current .= "failed," . date("Y-m-d") . "," . date("H:i:s") . ",$subject, $name, $email, $company, $phone, $message\n";
        $syslog = "Path: assets/ajax/mailer.php Mailer: Failed Subject: $subject Name: $name Email: $email Company: $company Phone: $phone Message: $message\n";
        openlog('www-mailerform', LOG_NDELAY, LOG_USER);
        syslog(LOG_NOTICE, $syslog);
        file_put_contents($file, $current);
        die($output);
    }
}

function slack($name, $subject, $email, $message, $company, $phone, $slackData, $room = "website") {
    $room = ($room) ? $room : "website";
    $data = "payload=" . json_encode($slackData);

    // You can get your webhook endpoint from your Slack settings
    $ch = curl_init("https://hooks.slack.com/services/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");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    curl_close($ch);

    // Laravel-specific log writing method
    // Log::info("Sent to Slack: " . $message, array('context' => 'Notifications'));

    return $result;
}
?>
