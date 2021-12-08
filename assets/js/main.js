let body = document.querySelector('body')
let heartReact = document.querySelectorAll(".heartReact svg path")
let closeArrow = document.querySelector('.closeArrow')
let openRecom = document.querySelector('.openRecom')
let galleryGrid = document.querySelector('.galleryGrid')
let gridItem = document.querySelectorAll(".gridItem")
let dealsItem = document.querySelectorAll(".dealsItem")
let dealsItem3 = document.querySelector(".dealsItem:nth-child(3)")
let mySwiper = document.querySelector('.mySwiper')
let swiper


swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
        615:{
            slidesPerView: 2,
        },
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

    body.classList.add('fullScreen')
    galleryGrid.style.gridTemplateColumns = "1fr 1fr 1fr"

    dealsItem3.style.display = "flex"

    dealsItem.forEach(item => {
        item.style.height = '240px'
        item.style.width = "32.5%" 
    })

    if(document.body.clientWidth >= 1100) mySwiper.style.height = '300px'

    if(document.body.clientWidth >= 1600){
        gridItem.forEach(each => {
            each.style.height = '230px'
        })
    }

})

openRecom.addEventListener('click', () => {
    
    body.classList.remove('fullScreen')

    galleryGrid.style.gridTemplateColumns = "1fr 1fr"

    dealsItem3.style.display = "none"

    dealsItem.forEach(item => {
        item.style.height = '220px'
        item.style.width = "48%"
    })
    
    if(document.body.clientWidth >= 1100) mySwiper.style.height = '200px'

    if(document.body.clientWidth >= 1600){
        gridItem.forEach(each => {
            each.style.height = '200px'
        })
    } 


})


