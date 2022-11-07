document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var worldcup2022 = (new Date("Nov 20, 2022 16:00:00").getTime() / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(worldcup2022)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
