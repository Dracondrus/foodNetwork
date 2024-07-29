document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("burger").addEventListener("click", function() {
       document.querySelector(".header").classList.toggle("open")
   })
})



window.addEventListener('keydown', (e) => {
   if (e.key == "Escape") {
       document.querySelector(".header").classList.remove("open")
   }
});
let mask = document.querySelector('.mask');
window.addEventListener('load', () =>{
    mask.classList.add('hide');
    setTimeout(()=> {
        mask.remove()
    },300)
})




let specialNav = document.getElementById("menu");

if (specialNav) {
  let navItems = specialNav.getElementsByTagName('li');
  let i;
  for (i = 0; i <= navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      if (!this.classList.contains('active')) {
        clearActives(navItems);
        this.classList.toggle('active');
      }
    });
  }
}
function clearActives(classlist) {
  if (classlist) {
    for (i = 0; i < classlist.length; i++) {
      classlist[i].classList.remove('active');
    }
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


