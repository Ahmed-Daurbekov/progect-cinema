const schemeSvg = document.querySelector('.scheme-svg')
let outPrice = document.querySelector('.price-total')
const menuBtn = document.querySelector('.m-menu')
const menuList = document.querySelector('.menu')
let ticketPrice = 500
let totalPrice = 0
schemeSvg.addEventListener('click', e => {
    if(e.target.classList.contains('booked') || e.target.classList.contains('light')) {

    } else {
        e.target.classList.toggle('active')
        let numberSeats = schemeSvg.querySelectorAll('.active').length
        totalPrice = numberSeats * 500
        outPrice.innerHTML = totalPrice
    }
})

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('is-open')
})