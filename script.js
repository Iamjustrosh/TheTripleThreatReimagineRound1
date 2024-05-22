var h1 = document.querySelector("h1");
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