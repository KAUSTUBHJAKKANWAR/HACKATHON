
  const video = document.getElementById("herov");
  const muteBtn = document.getElementById("mute-unmute");
  const muteIcon = muteBtn.querySelector("img");

  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;

    // Change icon based on mute state
    if (video.muted) {
      muteIcon.src = "./assets/icon/mute.png"; // muted icon
      muteIcon.alt = "mute";
    } else {
      muteIcon.src = "./assets/icon/unmute.png"; // unmuted icon
      muteIcon.alt = "unmute";
    }
  });

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");

    if (window.scrollY > hero.offsetHeight - 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

