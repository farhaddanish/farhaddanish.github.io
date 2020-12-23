const btnOpenNav = document.getElementById("button-nav");
const mobileNav = document.getElementById("mobile-nav");
const listMobile = document.querySelectorAll(".un-order-mobile-nav li");
const crossNav =document.getElementById('cross-nav')

const openMobileNav = () => {
 crossNav.style.display ="block"
 btnOpenNav.style.display ="none"
  mobileNav.style.display = "block";

  crossNav.addEventListener('click',()=>{
   mobileNav.style.display ="none";
   btnOpenNav.style.display="block";
   crossNav.style.display="none"

  })

  for (let i = 0; i < listMobile.length; i++) {
    listMobile[i].addEventListener("click", closeMobileNav);
  }
};

const closeMobileNav = () => {
  mobileNav.style.display = "none";
};

btnOpenNav.addEventListener("click", openMobileNav);








