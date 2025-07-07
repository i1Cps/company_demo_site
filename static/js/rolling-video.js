document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".video-carousel");
  const videos = Array.from(carousel.querySelectorAll(".video-slide"));
  const carouselWidth = carousel.clientWidth;

  let videoWidth = videos[0].videoWidth;
  let totalWidth = videos[0].clientWidth * videos.length;
  console.log(videos.length);
  console.log(videos[0]);
  let currentOffset = 0;
  let animationOn = true;

  function slideVideos() {
    if (!animationOn) return;
    currentOffset -= 2; // This controls the speed of the sliding. Adjust as needed.

    videos.forEach((video, index) => {
      let videoOffset = index * videoWidth + currentOffset;
      if (index == 0) {
      }
      video.style.transform = `translateX(${videoOffset}px)`;

      if (videoOffset + videoWidth < 0) {
        videoOffset += videoWidth;
        video.style.transform = `translateX(${videoOffset}px)`;
      }
    });

    // Reset sliding sequence once offset reached is total width / 3 ( this should be padded with screen width for mobile users, but its not a priority)
    if (currentOffset <= -(totalWidth / 3)) {
      currentOffset = 0;
    }
    requestAnimationFrame(slideVideos);
  }

  slideVideos();

  // Pause sliding animation on hover
  carousel.addEventListener("mouseover", function () {
    animationOn = false;
  });

  // Resume sliding animation on mouseout
  carousel.addEventListener("mouseout", function () {
    animationOn = true;
    slideVideos(); // Restart the animation loop
  });
});
