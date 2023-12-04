// NAVIGATION MENU /////////////////////
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})



// CHANGE THE BACKGROUND ON SCROLL /////////////////////
function changeHeaderColor() {
    const header = document.getElementById("header");

    if (this.scrollY >= 10) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", changeHeaderColor)





// REMOVE MENU ON CLICK FOR MOBILE /////////////////////
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction))




// REMOVE MENU ON CLICK FOR MOBILE /////////////////////
const section = document.querySelectorAll("section[id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    section.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive)







// SWIPER FUNCTION /////////////////////
var swiper = new Swiper(".popular__container", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    loop: true,


    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 30,
        }
    }
});





// MIXITUP FUNCTION /////////////////////
var mixerProducts = mixitup(".product__content", {
    selectors: {
        target: ".product__card"
    },
    animation: {
        duration: 300
    },
});

// Link Active Product
const linkProduct = document.querySelectorAll(".product__item");

function activeProduct() {
    linkProduct.forEach((link) => link.classList.remove("active-product"));
    this.classList.add("active-product");
}

linkProduct.forEach((link) => link.addEventListener("click", activeProduct));







// SCROLL UP FUNCTION /////////////////////
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up")

    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);





// ANIMATION /////////////////////
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(".home-sub");
sr.reveal(".home__flex", { delay: 700 });
sr.reveal(".home__title", { delay: 500 });
sr.reveal(".home__description", { delay: 600 });
sr.reveal(".home__img", { delay: 900, origin: "bottom" });
sr.reveal(".home__value-number", ".home__value-number", {
    delay: 800,
    interval: 100,
});

sr.reveal(".line-h", { delay: 800 });
sr.reveal(".about__data", { origin: "right" });
sr.reveal(".about__img", { origin: "left" });
sr.reveal(".brands__content", { interval: 100 });
sr.reveal(".why__data");
sr.reveal(".newsletter__data", { origin: "bottom" });

sr.reveal(".popular__cards", { delay: 900, origin: "right" });
sr.reveal(".popular h2", { delay: 500 });
sr.reveal(".popular h2");

sr.reveal(".product__subtitle");
sr.reveal(".section__title");
sr.reveal(".products__filters", { delay: 600 });
sr.reveal(".product__card", { delay: 700, interval: 100 });

sr.reveal(".app__container", { origin: "bottom" });
sr.reveal(".app__data", { delay: 500, origin: "left" });
sr.reveal(".app__img", { delay: 600, origin: "right" });

sr.reveal(".footer-box", { interval: 100 });
sr.reveal(".copyright", { delay: 500 });