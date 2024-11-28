// Copy menu for mobile
function copyMenu(){
    //copy inside ..dpt-cat to .departments
    let dptCategory = document.querySelector(".dpt-cat");
    let dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;
    // copy inside nav to nav
    let mainNav = document.querySelector(".header-nav nav");
    let navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;
    // copy .header-top .wrapper to .thetop-nav
    let topNav =document.querySelector(".header-top .wrapper");
    let topPlace =document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();
// show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-class'),
    addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
addClass.classList.toggle('showMenu');
});
closeButton.addEventListener('click',function(){
    addClass.classList.remove('showMenu');
});

// show sub menu in mobile
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu)=>{
    menu.addEventListener('click',toggle);
});
function toggle(e){
    e.preventDefault();
    subMenu.forEach((item)=>{item != this? item.closest('.has-child').classList.remove('expand'):null});
    if(this.closest('.has-child').classList!= 'expand');
    this.closest('.has-child').classList.toggle('expand')
}
//slider
const swiper = new Swiper('.swiper', {
    
    loop: true,
     // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
  