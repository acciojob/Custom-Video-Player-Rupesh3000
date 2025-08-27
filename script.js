/* Edit this file */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");


toggle.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

video.addEventListener("play", () => {
  toggle.textContent = "❚ ❚";
});

// when video pauses → change button
video.addEventListener("pause", () => {
  toggle.textContent = "►";
});


function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener("timeupdate", handleProgress);




function handleRangeUpdate() {
  video[this.name] = this.value;
}

ranges.forEach(range => range.addEventListener("input", handleRangeUpdate));


function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach((button) => button.addEventListener("click", skip));
















