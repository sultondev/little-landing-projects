////Animations Alements 
const animationElements = document.querySelectorAll(".anim-elements");
const animationBlocks = document.querySelectorAll(".anim-blocks");

let options = {
    threshold: 0,
    rootMargin: "0px"
};


const observerFunctionWithClass = (className) => (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add(className)
        } else {
            entry.target.classList.remove(className)
        }

    })
}

const elLevel = observerFunctionWithClass('appear-anim')
const blockLevel = observerFunctionWithClass('appear-anim-block')


const appearObserver = new IntersectionObserver(elLevel, options)
const appearBlockObserver = new IntersectionObserver(blockLevel, options)


const makeObserver = (els, obs) => {els.forEach(el => obs.observe(el))}; 

makeObserver(animationElements, appearObserver)
makeObserver(animationBlocks, appearBlockObserver)
