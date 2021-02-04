var nav = document.querySelector("#nav");
let navTop = nav.offsetTop;
var menu = document.querySelector("#burger_menu");
var links = document.querySelector(".links");
var html = document.querySelector("html");

menu.addEventListener("click", () => {
    menu.classList.toggle('open');
    links.classList.toggle('open');
    html.classList.toggle('open');
});

window.addEventListener("scroll",() => {
    if (window.scrollY >= navTop) {    
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');    
      }
});