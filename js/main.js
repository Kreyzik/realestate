const swiper = new Swiper('.slider-main-block', {
   // Optional parameters

   loop: true,
   autoplay: {
    delay: 5000,
  },

 
   // Navigation arrows
   navigation: {
     nextEl: '.body-main-block__arrow.swiper-button-next',
     prevEl: '.body-main-block__arrow.swiper-button-prev',
   }
 
   // And if we need scrollbar
  
 });


  //Анімація шапки

  const header = document.querySelector('header');

  function animationHeader () {
   if (window.pageYOffset){
     header.classList.add('header__color');
 
 
   }else{
     header.classList.remove('header__color');
 
 
   }
  }
 
  window.addEventListener('scroll', animationHeader);


const tabNavItems = document.querySelectorAll('.tabs-estate__button'),
      tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e){
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if(targetElement.closest('.tabs-estate__button')){
    tabNavItems.forEach((tabNavItem, index) => {
      if(tabNavItem.classList.contains('active')){
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');


      }
      if(tabNavItem == targetElement){
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');

  }
});