var nav = document.querySelector("#nav");
var menu = document.querySelector("#burger_menu");
var links = document.querySelector(".links");
var html = document.querySelector("html");
var results = document.querySelectorAll(".game-result");
let navTop = nav.offsetTop;
let entry = [];

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

var xhReq = new XMLHttpRequest();
xhReq.open("GET", "https://spreadsheets.google.com/feeds/cells/13gmUgiwVI4eg3Ufc-C_WMouv8HDABk5YexB-9MNU9sU/1/public/values?alt=json", false);  
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);

entry = jsonObject.feed.entry;

console.log(entry);

for (let step = 0; step < entry.length; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  results[step].innerHTML = entry[step].content.$t;
}