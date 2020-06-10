let currentPath = 0;
let prevPath = 0;
let nextPossible = false;
let backPossible = false;

$( ".language1" ).click(function() {
  gsap.timeline({}).to(".language1", {duration: 0.25, y: "-2%", opacity:1}).to(".language1", {duration: 2, top: "200%", opacity:1});
  setTimeout(() => {
    boxControlsOnly();
    nextPath();
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".language2" ).click(function() {
  gsap.timeline({}).to(".language2", {duration: 0.25, y: "-2%", opacity:1}).to(".language2", {duration: 2, top: "200%", opacity:1});
  setTimeout(() => {
    boxControlsOnly();
    nextPath();
    nextPossible = true;
    backPossible = true;
  }, 2000);
});

$( ".language3" ).click(function() {
  gsap.timeline({}).to(".language3", {duration: 0.25, y: "-2%", opacity:1}).to(".language3", {duration: 2, top: "200%", opacity:1});
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
  return `<object type='image/svg+xml' class='${classVal}' data='assets/${file}.svg'></object>`;
}
function loadPath(id) {
  console.log("loadPath: " + id)
  $(".nextButton").show();
  nextPossible = true;
  if(id == 1) {
  return `
  <div class="vertical-center">
    <div class='container three-col-panel'>
      <div class='row'>
        <div class='col-md-4 col-xs-12 imgColumn vertical-center'>
          ${svgPanel("panel1a", true)}
         </div>
         <div class='col-md-4 col-xs-12 imgColumn vertical-center'>
          ${svgPanel("panel1b", true)}
          </div>
          <div class='col-md-4 col-xs-12 imgColumn vertical-center'>
           ${svgPanel("panel1c", true)}
          </div>
        </div>
      </div>
    </div>
    `;
  } else if(id == 2) {
    return svgPanel("panel2");
  } else if(id == 3) {
    $(".nextButton").hide();
    nextPossible = false;
    return `
    <div class="vertical-center">
      <div class="optionContainer container">
        <div onclick='nextPath(4)' class='optionButton'>
          Option 1
        </div>
        <div onclick='nextPath(5)' class='optionButton'>
          Option 2
        </div>
      </div>
    </div>
    `
    return "<a onclick='nextPath(4)'" + ">OPTION 1</a><br />" + "<a onclick='nextPath(5)'" + ">OPTION 2</a>"
  } else if(id == 4) {
    return svgPanel("panel3");
  } else if(id == 5) {
    return svgPanel("panel4");
  } else if(id == 6) {
    return svgPanel("panel5");
  } else if(id == 7) {
    return svgPanel("panel6");
  }
}

function nextPath(id=null) {
  emptyAllPathsExceptOne(currentPath);
  if(currentPath==7) {
    backPossible = false;
    box();
    $(".nextButton").hide()
    $(".backButton").hide()
  } else {
    backPossible = true;
    prevPath = currentPath;
    if(id==null) {
      currentPath+=1;
    } else {
      currentPath = id
    }
    let element = "<div style='background:white;' class='path_" + currentPath + " newStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + prevPath, {duration: 3, left:"-100%", ease: "power4.out"}); // after this delete the previous path element

    gsap.to(".path_" + currentPath, {duration: 3, left:0, ease: "power4.out"}); // after this delete the previous path element
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
    let element = "<div style='background:white;' class='path_" + currentPath + " prevStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + prevPath, {duration: 3, left:"100%", ease: "power4.out"});
    gsap.to(".path_" + currentPath, {duration: 3, left:0, ease: "power4.out"}); // after this delete the previous path element

  }

}
