let currentPath = 0;
let prevPath = 0;
let nextPossible = false;
let backPossible = false;
let language = "en"

$( ".language1" ).click(function() {
  language = "en"
  gsap.timeline({}).to(".language1", {duration: 0.25, y: "-2%", opacity:1}).to(".language1", {duration: 2, top: "200%", opacity:1});
  hideLanguageDrops();
  setTimeout(() => {
    boxControlsOnly();
    nextPath();
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".language2" ).click(function() {
  language = "es"
  gsap.timeline({}).to(".language2", {duration: 0.25, y: "-2%", opacity:1}).to(".language2", {duration: 2, top: "200%", opacity:1});
  hideLanguageDrops();
  setTimeout(() => {
    boxControlsOnly();
    nextPath();
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".language3" ).click(function() {
  language = "ar"
  gsap.timeline({}).to(".language3", {duration: 0.25, y: "-2%", opacity:1}).to(".language3", {duration: 2, top: "200%", opacity:1});
  hideLanguageDrops();
  setTimeout(() => {
    boxControlsOnly();
    nextPath();
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".nextButton" ).click(function() {
  nextPath();
});

$( ".backButton" ).click(function() {
  previousPath();
});

$( ".restartButton" ).click(function() {
  alert("restart");
});

$(document).keydown(function(e){

    if (e.which == 37) {
      if(backPossible) {
         previousPath();
       }
    }
    if (e.which == 39) {
      if(nextPossible) {
         nextPath();
      }
    }
});

function emptyAllPathsExceptOne(id) { //for space optimization
  for(let x=0; x<8; x++) {
    if(x!=id) {
      $(".path_" + x).remove();
    } else {
    }
  }
}
function svgPanel(file, isCols = false) {
  let classVal = isCols ? "storySvgCols" : "storySvg";
  return `<object type='image/svg+xml' class='${classVal}' data='assets/${language}/${file}.svg'></object>`;
}
function loadPath(id, isNewStory = true) {
  console.log("loadPath: " + id)
  $(".nextButton").show();
  nextPossible = true;
  if(id == 1) {
  return `
  <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
    ${svgPanel("panel1a")}
  </div>
    `;
  } else if(id == 2) {
    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      <div class="vertical-center">
        <div class='container three-col-panel'>
          <div class='row'>
             <div class='col-md-6 col-xs-12 imgColumn vertical-center path_${id}b'>
              ${svgPanel("panel1b", true)}
              </div>
              <div class='col-md-6 col-xs-12 imgColumn vertical-center path_${id}c'>
               ${svgPanel("panel1c", true)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  } else if(id == 3) {
    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel2")}
    </div>

    `;
  } else if(id == 4) {
    $(".nextButton").hide();
    nextPossible = false;
    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      <div class="vertical-center">
        <div class="optionContainer container">
          <div onclick='nextPath(5)' class='optionButton'>
            Ask grandma about it
          </div>
          <div onclick='nextPath(6)' class='optionButton'>
            I asked a loved one about it and then research on it
        </div>
      </div>
    </div>
    `
  } else if(id == 5) {
    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel3")}
    </div>
    `
  } else if(id == 6) {
    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel4")}
    </div>
    `
  } else if(id == 7) {
    return `
    <div style="background:white;" class="path_${id} ${isNewStory ? "newStory" : "prevStory"}" >
      ${svgPanel("panel7")}
    </div>
    `
  }
}

function nextPath(id=null) {
  emptyAllPathsExceptOne(currentPath);
  if(currentPath==7) {
    backPossible = false;
    box();
    $(".nextButton").hide()
    $(".backButton").hide()
    $(".restartButton").show()
  } else {
    $(".restartButton").hide()
    backPossible = true;
    prevPath = currentPath;
    if(prevPath == 5) {
      currentPath = 7;
    } else if(id==null) {
      currentPath+=1;
    } else {
      currentPath = id
    }

    let element = loadPath(currentPath);
    $("body").append(element);
    gsap.to(".path_" + prevPath, {duration: 3, x:"-200%", ease: "power4.out"}); // after this delete the previous path element

    gsap.to(".path_" + currentPath, {duration: 3, x:"-100%", ease: "power4.out"}); // after this delete the previous path element
  }
}

function previousPath() {
  emptyAllPathsExceptOne(currentPath);
  if(currentPath<=1) {
    boxFullyHide();
    getLanguageDropsBackToFirstState();
    gsap.to(".path_" + currentPath, {duration: 3, scale:"0.5", left: "-100%", ease: "power4.out"});
    currentPath = 0;
    nextPossible = false;
    backPossible = false;
  } else {
    let tempPath = prevPath;
    if(prevPath > currentPath) {
      currentPath -=1;
    } else {
      prevPath = currentPath;
      currentPath = tempPath;
    }

  //  alert(currentPath)
    let element = loadPath(currentPath, false);
    $("body").append(element);
    gsap.to(".path_" + prevPath, {duration: 1, x:"100%", ease: "power4.out"});
    gsap.to(".path_" + currentPath, {duration: 1, x:"200%", ease: "power4.out"}); // after this delete the previous path element

  }

}
