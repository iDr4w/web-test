var nav = document.querySelector("#nav");
var menu = document.querySelector("#burger_menu");
var links = document.querySelector(".links");
var results = document.querySelectorAll(".game-result");
var dropdown = document.querySelectorAll(".dropdown");
let navTop = nav.offsetTop;
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let entry = [];

if(width <= 800){
  dropdown.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle('open');
    });
  })
};

menu.addEventListener("click", () => {
  if(menu.classList == 'open'){
    dropdown.forEach(item => {
        item.classList.remove('open');
    })
  }
  menu.classList.toggle('open');
  links.classList.toggle('open');
});


var xhReq = new XMLHttpRequest();
xhReq.open("GET", "https://spreadsheets.google.com/feeds/cells/1gVcxUeGsA0JEX6kLBPKC5S2NtY2uwhLvky9T-vEr2eI/1/public/values?alt=json", false);  
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);
entry = jsonObject.feed.entry;

for (let i = 0; i < entry.length-3; i++) {
  results[i].innerHTML = entry[i+3].content.$t;
};