var html = document.querySelector("html");
var nav = document.querySelector("#nav");
var menu = document.querySelector("#burger_menu");
var links = document.querySelector(".links");
var results = document.querySelectorAll(".game-result");
var dropdown = document.querySelectorAll(".dropdown");
let navTop = nav.offsetTop;
let entry = [];
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

dropdown.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

window.addEventListener("resize", () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});

menu.addEventListener("click", () => {
    if (menu.classList == "open") {
        dropdown.forEach((item) => {
            item.classList.remove("open");
        });
    }
    menu.classList.toggle("open");
    nav.classList.toggle("blur");
    links.classList.toggle("open");
    html.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= navTop) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});

var xhReq = new XMLHttpRequest();
xhReq.open(
    "GET",
    "https://spreadsheets.google.com/feeds/cells/1gVcxUeGsA0JEX6kLBPKC5S2NtY2uwhLvky9T-vEr2eI/1/public/values?alt=json",
    false
);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);
entry = jsonObject.feed.entry;

document.getElementById("jornada").innerHTML = "JORNADA " + jsonObject.feed.title.$t;

for (let i = 0; i < entry.length - 3; i++) {
    results[i].innerHTML = entry[i + 3].content.$t;
}