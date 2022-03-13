const linkToggleBtn = document.querySelector(".nav-bars"),
    linksContainer = document.querySelector(".nav-container__links"),
    sections = document.querySelectorAll(".section"),
    animationElements = document.querySelectorAll(".animationElements"),
    navBar = document.querySelector(".nav"),
    date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

let options = {
    threshold: 0,
    rootMargin: "0px"
}

////Events
linkToggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    linksContainer.classList.toggle("show-container__links");
})


window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight / 2) {
        navBar.classList.add("nav-fixed");
    } else {
        navBar.classList.remove("nav-fixed");
    }
    // setup back to top link
});


observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `observingElements 2s forwards ease-out`;
        } else {
            entry.target.style.animation = "none";
        }
    })
}, options)

animationElements.forEach(animationElement => observer.observe(animationElement))