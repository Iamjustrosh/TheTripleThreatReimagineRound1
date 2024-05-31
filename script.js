
function aniSplashScreen() {
  var h1 = document.querySelector(".splLoad");
  var text = "Ford";
  var arr = text.split("");

  function generateText(text) {
    text.forEach((data) => {
      var span = document.createElement("span");
      span.classList.add("char");
      span.innerHTML = data;
      h1.appendChild(span);
    });
  }
  generateText(arr);
  // gsap
  gsap.from(".char", {
    y: 100,
    stagger: 0.13,
    opacity: 0,
    delay: 0.1,
    ease: "ease-in",
    duration: 1,
  });
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


function aniCar() {
  var car = document.querySelector("#car");
  gsap.from(car, {
    x: 200,
    opacity: 0,
    delay: 3,
    ease: "ease-in",
    duration: 1.2,
  })
}

function heroTxt() {
  var h1 = document.querySelector(".heroTxt");
  var text = "MUSTANG";
  var arr = text.split("");

  function generateText(text) {
    text.forEach((data) => {
      var span = document.createElement("span");
      span.classList.add("chr");
      span.innerHTML = data;
      h1.appendChild(span);
    });
  }
  generateText(arr);
  // gsap
  gsap.from(".chr", {
    y: 100,
    stagger: 0.13,
    opacity: 0,
    delay: 3.1,
    ease: "ease-in",
    duration: 1,
  });
}


gsap.from(".smlHero", {
  y: 100,
  opacity: 0.1,
  delay: 2.7,
  ease: "ease-in",
  duration: 0.8,
});

function categoryAnimation(){
  gsap.from(".categoriesHeading",{
    scrollTrigger:{
        trigger:".category",
        start: "top 70%",
        scrub: 1,
    },
    y:20,
    opacity:0,
    duration:2,
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
}





document.addEventListener('contextmenu', event => event.preventDefault());


const totop =document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset >100){
    totop.classList.add("active");
  }
  else{
    totop.classList.remove("active");
  }
})

const navDialog = document.getElementById("nav-dialog");
function handleMenu(){
  navDialog.classList.toggle('hidden');
}







aniSplashScreen();
categoryAnimation();
aniCar();
cursor();
heroTxt();


