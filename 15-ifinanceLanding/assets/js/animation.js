////
const fadeUpEls = document.querySelectorAll(".fade-up-anim");
const appearEls = document.querySelectorAll(".appear-anim");

const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style = "transform: translateY(0); opacity: 1;"
        } else {
            entry.target.style = "transform: translateY(10rem); opacity: 0;"
        }
    })
}, 
    {threshold: 0, 
    rootMargin: "60px"
})

const appearObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style = "opacity: 1;"
        } else {
            entry.target.style = "opacity: 0;"
        }
    })
})


fadeUpEls.forEach(fadeUpEl => fadeUpObserver.observe(fadeUpEl));
appearEls.forEach(appearEl => appearObserver.observe(appearEl));

































// const fadeUpAnimation = (className) => (entries) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.style = "transform: translateY(0); opacity: 1;"
//         } else {
//             entry.target.style = "transform: translateY(-10rem); opacity: 0;"
//         }
//     })
// }

// const fadeUpComplete = fadeUpAnimation()