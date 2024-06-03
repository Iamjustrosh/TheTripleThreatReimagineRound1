function loaderAnimation(){
  var tl = gsap.timeline();

var h1 = document.querySelector(".splLoad");
var text = "Ford";
var arr = text.split("");
var car = document.querySelector("#car");
var heroT = document.querySelector(".heroTxt");
var MusT = "MUSTANG";
var arrMust = MusT.split("");


function generateText(text) {
  text.forEach((data) => {
    var span = document.createElement("span");
    span.classList.add("char");
    span.innerHTML = data;
    h1.appendChild(span);
  });
}

generateText(arr);

tl.from(".char", {
  y: 100,
  stagger: 0.13,
  opacity: 0,
  ease: "ease-in",
  duration: 1,
});

tl.to(".splashScreen", {
  autoAlpha: 0,
})


tl.from(car, {
  x: 200,
  opacity: 0,
  ease: "ease-in",
  duration: 1.2,
},'a');





function generateTextForHeroText(text) {
  text.forEach((data) => {
    var spanMust = document.createElement("span");
    spanMust.classList.add("chr");
    spanMust.innerHTML = data;
    heroT.appendChild(spanMust);
  });
}
generateTextForHeroText(arrMust);

tl.from(".chr", {
  y: 100,
  stagger: 0.13,
  opacity: 0,
  duration: 1,
  ease: "ease-in",
},'a');



tl.from(".smlHero", {
  y: 100,
  opacity: 0,
  ease: "ease-in",
  duration: 1,
},'a');

}

function cursor() {

  var main = document.querySelector("#main");
  var cursor = document.querySelector("#cursor");
  main.addEventListener("mousemove", function (pts) {
    gsap.to(cursor, {
      x: pts.x,
      y: pts.y,
    })
  })


  var mustang = document.querySelector("#car");
  mustang.addEventListener("mouseenter", function () {
    cursor.innerHTML = "Throttle Up!",
      gsap.to(cursor, {
        scale: "8",
        backgroundColor: "#0143bd4d "
      })
  })
  mustang.addEventListener("mouseleave", function () {
    cursor.innerHTML = "",
      gsap.to(cursor, {
        scale: "1",
        backgroundColor: "#0142BD"
      })
  })

}


function categoryAnimation(){
  let staggerValue;

  if (window.innerWidth < 640) {
      staggerValue = 0.5; // For small screens
  } else if (window.innerWidth < 768) {
      staggerValue = 0.3; // For medium screens
  } else if (window.innerWidth < 1024) {
      staggerValue = 0.1; // For large screens
  } else {
      staggerValue = 0.01; // For extra-large screens
  }



  gsap.from(".categoriesHeading",{
    scrollTrigger:{
        trigger:".category",
        start: "top 70%",
        scrub: 1,
    },
    y:20,
    opacity:0,
    duration: 1,
    ease: "power4.out",
  })
  gsap.from(".categoryCard",{
    scrollTrigger:{
        trigger:".categoryCard",
        start: "top 65%",
        end: "top 20%",
        scrub: 2,
    },
    stagger: 0.01,
    y: 50,
    opacity: 0,
    ease: "power4.out",
  })
  gsap.from(".categoriesCTA",{
    scrollTrigger:{
        trigger:".categoriesCTA",
        start: "top 80%",
        end: "top top",
        scrub: 2,
    },
    y: 50,
    opacity: 0,
    ease: "power4.out",
  })

  gsap.from(".cardDescription",{
    scrollTrigger:{
        trigger:".outerCard",
        start: "top 60%",
        scrub: 1,
    },
    stagger: staggerValue,
    x:-20,
    opacity:0,
    ease: "power4.out",
  })
}


document.addEventListener('contextmenu', event => event.preventDefault());


const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});

const navDialog = document.getElementById("nav-dialog");
function handleMenu(){
  navDialog.classList.toggle('hidden');
}






loaderAnimation();
categoryAnimation();
cursor();



