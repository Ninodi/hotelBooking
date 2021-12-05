let heartReact = document.querySelectorAll(".heartReact svg path")
let searchSection = document.querySelector('.searchSection')
let tourSec = document.querySelector('.tourSec')
let closeArrow = document.querySelector('.closeArrow')
let openRecom = document.querySelector('.openRecom')
let galleryGrid = document.querySelector('.galleryGrid')
let gridItem = document.querySelectorAll(".gridItem")
let swiper


swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints:{
        1600: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


heartReact.forEach(each => {
    each.addEventListener("click", () => {
        each.classList.toggle('reacted')
    })
})


closeArrow.addEventListener('click', () => {
    searchSection.classList.add('fullScreen')
    tourSec.classList.add('fullScreen')
    openRecom.classList.add('fullScreen')

    galleryGrid.style.gridTemplateColumns = "1fr 1fr 1fr"

    swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    if(document.body.clientWidth <= 1600){
        gridItem.forEach(each => {
            each.style.height = '200px'
        })
    }
})

openRecom.addEventListener('click', () => {
    searchSection.classList.remove('fullScreen')
    tourSec.classList.remove('fullScreen')
    openRecom.classList.remove('fullScreen')

    if(document.body.clientWidth <= 1600){
        galleryGrid.style.gridTemplateColumns = "1fr 1fr"
    }

    swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    if(document.body.clientWidth <= 1600){
        gridItem.forEach(each => {
            each.style.height = '150px'
        })
    }
})

