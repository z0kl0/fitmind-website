<?php
// Launch Date: Jan 18, 2026 16:00:00 UTC
// We convert this date to a Unix Timestamp (seconds since 1970)
$launch_date = 1768752000; 

// Get current server time (UTC)
$current_time = time();

if ($current_time < $launch_date) {
    // If we are BEFORE the launch, show the countdown
    include('countdown.html');
} else {
    // If we are AFTER the launch, show the real website
    include('home.html');
}
?>