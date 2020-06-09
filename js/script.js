
//gsap.to(".language1", {duration: 1, marginRight:"-200px"});
//gsap.to(".language2", {duration: 1});
setTimeout(() => {
gsap.to(".firstHeader", {duration: 3, opacity:1});
}, 1000);
setTimeout(() => {
gsap.to(".firstHeader", {duration: 2, opacity:0});
}, 4000);
setTimeout(() => {
gsap.to(".languageButton", {duration: 3, opacity:1});
}, 6000);

function box() {
  gsap.to(".boxContainer", {duration: 2, top:100, width:"60%", left:"20%"});
}
setTimeout(() => {

}, 3000);
