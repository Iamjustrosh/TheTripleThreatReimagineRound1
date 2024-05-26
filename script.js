


function aniSplashScreen(){
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


gsap.from(".heroTxt", {
  y: 100,
  stagger: 0.10,
  opacity: 0.5,
  delay: 3.1,
  ease: "ease-in",
  duration: 0.8,
});

function cursor(){

  var main = document.querySelector("#main");
  var cursor = document.querySelector("#cursor"); 
  main.addEventListener("mousemove",function(pts){
    gsap.to(cursor,{
      x:pts.x,
      y:pts.y,
    })
  })


  var mustang = document.querySelector("#car");
  mustang.addEventListener("mouseenter",function(){
    cursor.innerHTML = "Ride it!" ,
    gsap.to(cursor,{
      scale: "6",
      backgroundColor: "#f35f5fd8 "
    })
  })
  mustang.addEventListener("mouseleave",function(){
    cursor.innerHTML ="" ,
    gsap.to(cursor,{
      scale: "1",
      backgroundColor: "#ffffff93"
    })
  })

}


function aniCar(){
  var car = document.querySelector("#car");
  gsap.from(car,{
    x: 200,
    opacity: 0,
    delay: 3,
    ease: "ease-in",
    duration: 1.2,
  })
}

function heroTxt(){
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

<<<<<<< HEAD
document.addEventListener('contextmenu', event => event.preventDefault());
=======

// const navLinks = document.querySelector('.nav-links');
// function onToggleMenu(e){
// e.name = e.name === 'menu' ? 'close' : 'menu'
// navLinks.classList.toggle('top-[9%]');
// }

>>>>>>> rakesh
aniCar();
cursor();
aniSplashScreen();
heroTxt();
