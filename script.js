// Launch Date: Jan 18, 2026 @ 11:00 AM EST (which is 16:00:00 UTC)
const launchDate = new Date("2026-01-18T16:00:00Z").getTime();

// Update the count down every 1 second
const timer = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the launch date
  const distance = launchDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements with IDs
  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "WE ARE LIVE!";
  }
}, 1000);