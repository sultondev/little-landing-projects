const undrawArray = [
    {
        id: 1,
        src: "assets/icon/draw/login-draw.svg",
        key: "login"
    },{
        id: 2,
        src: "assets/icon/draw/email-draw.svg",
        key: "reg"
    },{
        id: 3,
        src: "assets/icon/draw/login-draw.svg",
        key: "forgot"
    }
]

function resetAnimation() {
    const el = document.querySelector(".change-mode-anim");
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
    const banner = document.querySelector(".change-banner-anim");
    banner.style.animation = 'none';
    banner.offsetHeight; /* trigger reflow */
    banner.style.animation = null; 
}

const createAccountBtn = document.querySelector(".main-reg__option-new");
const forgotPasswordBtn = document.querySelector(".main-reg__option-forgot");
const loginAccount = document.querySelector(".main-reg__option-login");

// 
const mainWindow = document.querySelector("body");
const regForm = document.querySelector(".main-list")
const bannerMode = document.querySelector(".main-banner")


createAccountBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    regForm.classList.remove("change-mode-anim");
    regForm.classList.add("change-mode-anim");
    bannerMode.classList.remove("change-banner-anim")
    bannerMode.classList.add("change-banner-anim")
    resetAnimation();
    setTimeout(() => {
        mainWindow.classList.add("mode-reg")
        bannerMode.classList.add("change-banner-anim")
    }, 1000)
})


loginAccount.addEventListener("click", (e)=>{
    e.preventDefault();
    regForm.classList.remove("change-mode-anim");
    regForm.classList.add("change-mode-anim");
    bannerMode.classList.remove("change-banner-anim")
    bannerMode.classList.add("change-banner-anim")
    resetAnimation();

    setTimeout(() => {
        mainWindow.classList.remove("mode-reg")
        bannerMode.classList.remove("change-banner-anim")
    }, 1000)
})