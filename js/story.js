let currentPath = 0;
let prevPath = 0;

$( ".nextButton" ).click(function() {
  nextPath();
});

$( ".backButton" ).click(function() {
  previousPath();
});


let PATHS = {
  1: {
    image: ""
  },
  2: {
    image: ""
  },
  3: {
    image: ""
  },
  4: {
    image: ""
  },
  5: {
    image: ""
  },
  6: {
    image: ""
  },
  7 : {
    image: ""
  }
}

function loadPath(id) {
  let element = "<div class='path_" + id + " newStory' ></div>"
  $("body").append(element);
  gsap.to(".path_" + id, {duration: 1, left:0}); //after this delete the previous path element
}

function nextPath() {
  if(currentPath==1) {
    
  } else {
    let element = "<div class='path_" + currentPath + " newStory' ></div>"
    $("body").append(element);
    gsap.to(".path_" + currentPath, {duration: 1, left:0}); // after this delete the previous path element
  }
  currentPath+=1;

  //alert("clicked")
}

function previousPath() {
  currentPath-=1;
  let element = "<div class='path_" + currentPath + " prevStory' ></div>"
  $("body").append(element);
  gsap.to(".path_" + currentPath, {duration: 1, left:0});
}
