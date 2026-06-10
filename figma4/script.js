const toggle = document.getElementById("toggle");
const ball = document.getElementById("ball");

const h1 = document.getElementsByTagName("h1");
const nav = document.getElementsByClassName("nav");
const h2 = document.getElementsByTagName("h2");
const p = document.getElementsByTagName("p");
const foot = document.getElementsByClassName("foot-nav");
const footLinks = document.getElementsByClassName("foot-page");
const bar = document.getElementById("bar");
const icon = document.getElementsByTagName("i");
const page = document.getElementsByClassName("foot-page");
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const barhead = document.getElementById("bar-head")
const closebar = document.getElementById("close")


const menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "100vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

bar.addEventListener("click", toggleMenu);
closebar.addEventListener("click", toggleMenu);


toggle.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    ball.style.transform = "translateX(-30px)";
    ball.style.backgroundColor = "black";
    toggle.style.backgroundColor = "white";
    document.body.style.backgroundColor = "black";
    menuList.style.backgroundColor = "black"

    for (let i = 0; i < h1.length; i++) {
      h1[i].style.color = "white";
    }
    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "white";
    }
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "white";
    }
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "white";
    }
    for (let i = 0; i < foot.length; i++) {
      foot[i].style.color = "white";
    }
    for (let i = 0; i < footLinks.length; i++) {
      footLinks[i].style.color = "white";
    }
    for (let i = 0; i < icon.length; i++) {
      icon[i].style.color = "white";
    }

    prev.style.color = "white"
    bar.style.color = "white"
    next.style.color = "white"
  } 
  
  else {
    ball.style.transform = "translateX(0)";
    ball.style.backgroundColor = "";
    toggle.style.backgroundColor = "";
    document.body.style.backgroundColor = "white";
    menuList.style.backgroundColor = ""

    for (let i = 0; i < h1.length; i++) {
      h1[i].style.color = "";
    }
    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "";
    }
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "";
    }
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "";
    }
    for (let i = 0; i < foot.length; i++) {
      foot[i].style.color = "";
    }
    for (let i = 0; i < footLinks.length; i++) {
      footLinks[i].style.color = "";
    }
    for (let i = 0; i < icon.length; i++) {
      icon[i].style.color = "";
    }
   
    prev.style.color = ""
    bar.style.color = "";
    next.style.color = ""
  }

});


for (let i = 0; i < page.length; i++) {
  page[i].addEventListener("mouseenter", () => {
    page[i].style.padding = "10px 15px";
    page[i].style.borderRadius = "8px";
    page[i].style.color = "rgba(105, 65, 198, 1)";
    page[i].style.backgroundColor = "rgba(249, 245, 255, 1)";
  });

  page[i].addEventListener("mouseleave", () => {
    page[i].style.padding = "";
    page[i].style.borderRadius = "";
    page[i].style.color = "";
    page[i].style.backgroundColor = "";
  });
}