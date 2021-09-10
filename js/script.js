"use strict"

// preloader
document.body.onload = function () {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('done')
}


// active menu
document.addEventListener('scroll', function (event) {
    document.querySelectorAll("section").forEach((el, i) => {
        if (el.offsetTop - 400 <= window.scrollY) {
            document.querySelectorAll('.menu__item').forEach((el) => {
                el.classList.remove('active')
            })
            document.querySelectorAll('.menu__item')[i].classList.add('active')
        }
    })
})


// animate
function animateBind(animClass) {
    const animItems = document.querySelectorAll('.' + animClass)
    window.addEventListener('scroll', () => {
        animItems.forEach((animItem) => {
            const point = animItem.getBoundingClientRect().top - window.innerHeight + animItem.offsetHeight / 2
            if (point < 0) {
                animItem.classList.remove(animClass)
            } else {
                animItem.classList.add(animClass)
            }
        })
    })
}

animateBind('anim-bottom')
animateBind('anim-left')
animateBind('anim-right')


// live welcome
const title = document.querySelector('.welcome__title')
const subtitle = document.querySelector('.welcome__subtitle')
document.addEventListener('mousemove', (e) => {
    if (e.clientX > (window.innerWidth / 2)) {
        title.style.transform = 'skewY(6deg)'
        subtitle.style.transform = 'skewY(6deg)'
    } else {
        title.style.transform = 'skewY(-6deg)'
        subtitle.style.transform = 'skewY(-6deg)'
    }
})