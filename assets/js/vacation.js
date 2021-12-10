let img1 = document.querySelectorAll('.img1')
let img2 = document.querySelectorAll('.img2')
let next = document.querySelectorAll('.next')
let previous = document.querySelectorAll('.prev')



next.forEach(nxt => {
    nxt.addEventListener('click', () => {
        nxt.parentElement.querySelector('.prev').style.display = 'flex'
        nxt.style.display = 'none'
        nxt.parentElement.querySelector('.img2').classList.add('switch')
    })
})

previous.forEach(prev => {
    prev.style.display = 'none'
    prev.addEventListener('click', () => {
        prev.parentElement.querySelector('.next').style.display = 'flex'
        prev.style.display = 'none'
        prev.parentElement.querySelector('.img2').classList.remove('switch')
    })
})

