
window.addEventListener("DOMContentLoaded", function() {
  // Add fade-in animation to sections
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.add("fade-in");
  }

  // Video Player
  var video = document.getElementById("video");
  var playButton = document.getElementById("play-button");

  // Play or pause the video when play button is clicked
  playButton.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      playButton.innerHTML = "&#10074;&#10074;"; // Display pause icon
    } else {
      video.pause();
      playButton.innerHTML = "&#9658;"; // Display play icon
    }
  });
});
