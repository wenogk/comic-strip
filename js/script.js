
//gsap.to(".language1", {duration: 1, marginRight:"-200px"});
//gsap.to(".language2", {duration: 1});
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

function boxFullyHide() {
  let h = window.innerHeight - 50;
  gsap.to(".boxContainer", {duration: 2, display: "none", opacity:0, top:h, width:"50%", left:"25%"});
}

function boxControlsOnly() {
  let h = window.innerHeight - 50;
  gsap.to(".boxContainer", {duration: 2, display: "block", opacity:1, top:h, width:"10%", left:"45%"});
}

function box() {
  gsap.to(".boxContainer", {duration: 2, display: "block", opacity:1, top:100, width:"60%", left:"20%"});
}

function boxBack() {
  gsap.to(".boxContainer", {duration: 2, display:"block", opacity:1, top:100, width:"60%", left:"20%"});
}
