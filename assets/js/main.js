const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
/**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

const onscroll = (el, listener) => {
el.addEventListener('scroll', listener)
}
let selectHeader =document.querySelector('#header')
if (selectHeader) {
const headerScrolled = () => {
    if (window.scrollY > 100) {
    selectHeader.classList.add('header-scrolled')
    } else {
    selectHeader.classList.remove('header-scrolled')
    }
}
window.addEventListener('load', headerScrolled)
onscroll(document, headerScrolled)
}
/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
select('#navbar').classList.toggle('navbar-mobile')
this.classList.toggle('bi-list')
this.classList.toggle('bi-x')
})

/**
 * Mobile nav dropdowns activate
 */
on('click', '.navbar .dropdown > a', function(e) {
if (select('#navbar').classList.contains('navbar-mobile')) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('dropdown-active')
}
}, true)
/*
*  AOS INIT
*/
function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });