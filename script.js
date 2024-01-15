const menuBars = document.getElementById("menu-bars")
const overlay = document.getElementById("overlay")
const nav1 = document.getElementById("nav-1")
const nav2 = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const nav4 = document.getElementById("nav-4")
const nav5 = document.getElementById("nav-5")
const navItems = [nav1, nav2, nav3, nav4, nav5]

function navAnimation(from, to) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${from}-${index+1}`, `slide-${to}-${index+1}`)
    })
}

function toggleNav() {
    menuBars.classList.toggle('change')
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        navAnimation('out', 'in')
    } else {
        overlay.classList.remove('overlay-slide-right')
        overlay.classList.add('overlay-slide-left')
        navAnimation('in', 'out')
    }
}

menuBars.addEventListener('click', toggleNav)
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})
