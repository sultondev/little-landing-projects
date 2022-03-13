const switchBtn = document.querySelector(".main-btn");
const switchBlock = document.querySelector(".switch");
const videoFile = document.querySelector(".main-video");


////Events

document.addEventListener("DOMContentLoaded", (e) => {
    videoFile.play();
})


switchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!switchBlock.classList.contains("switch-off")) {
        switchBlock.classList.add("switch-off");
        videoFile.pause();
    } else {
        videoFile.play();
        switchBlock.classList.remove("switch-off");
    }
});