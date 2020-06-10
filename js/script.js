
//gsap.to(".language1", {duration: 1, marginRight:"-200px"});
//gsap.to(".language2", {duration: 1});
let boxState = "boxFullyHide";
$( window ).resize(function() {
  console.log(boxState)
  switch(boxState) {
    case "boxFullyHide":
      boxFullyHide(0.5);
      break;
    case "boxControlsOnly":
      boxControlsOnly(0.5);
      break;
    case "box":
      box(0.5);
      break;
    default:
      boxFullyHide(0.5);
      break;
  }
});

setTimeout(() => {
gsap.to(".firstHeader", {duration: 3, opacity:1});
}, 1000);

setTimeout(() => {
gsap.to(".firstHeader", {duration: 2, opacity:0});
}, 4000);

setTimeout(() => {
gsap.to(".language1", {duration: 1, top: "50%", opacity:1});
gsap.to(".language2", {duration: 2, top: "50%", opacity:1});
gsap.to(".language3", {duration: 3, top: "50%", opacity:1});
}, 6000);

function getLanguageDropsBackToFirstState() {
  gsap.to(".language1", {duration: 1, top: "48%", opacity:1});
  gsap.to(".language2", {duration: 1, top: "48%", opacity:1});
  gsap.to(".language3", {duration: 1, top: "48%", opacity:1});
}

function boxFullyHide(s = 2) {
  boxState = "boxFullyHide";
  let h = window.innerHeight - 50;
  gsap.to(".boxContainer", {duration: s, display: "none", opacity:0, top:h, width:"50%", left:"25%"});
}

function boxControlsOnly(s=2) {
  boxState = "boxControlsOnly"
  let h = window.innerHeight - 50;
  gsap.to(".boxContainer", {duration: s, display: "block", opacity:1, top:h, width:"10%", left:"45%"});
}

function box(s=1.5) {
  boxState = "box"
  gsap.timeline()
  .to(".aboutformat", {duration:0,opacity:0})
  .to(".boxContainer", {duration: s, display: "block", opacity:1, top:100, width:"60%", left:"20%"})
  .to(".aboutformat", {duration:0.5,opacity:1});
}

function boxBack(s=2) {
  gsap.to(".boxContainer", {duration: s, display:"block", opacity:1, top:100, width:"60%", left:"20%"});
}
