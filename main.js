let menu = document.querySelector(".menu");
let right = document.querySelector(".right");
let menutext = document.querySelector(".a1");
let menutext2 = document.querySelector(".a2");
let menutext3 = document.querySelector(".a3");
let menutext4 = document.querySelector(".a4");
let menutext5 = document.querySelector(".a5");
let sp99 = document.querySelector(".sp99");
let sp98 = document.querySelector(".sp98");
let sp97 = document.querySelector(".sp97");

menu.addEventListener('click', function(){
    right.classList.toggle("active");
    menutext.classList.toggle("ss");
    menutext2.classList.toggle("ss");
    menutext3.classList.toggle("ss");
    menutext4.classList.toggle("ss");
    menutext5.classList.toggle("ss");
    menu.classList.toggle("menu2");
    sp99.classList.toggle("sp1");
    sp98.classList.toggle("sp2");
    sp97.classList.toggle("sp3");
})  