let currentPath = 0;
let prevPath = 0;
let nextPossible = true;
$( ".nextButton" ).click(function() {
  nextPath();
});

$( ".backButton" ).click(function() {
  previousPath();
});

$(document).keydown(function(e){

    if (e.which == 37) {
         previousPath();
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
function svgPanel(file) {
  return "<object type='image/svg+xml' class='storySvg' data='assets/"+ file + ".svg'></object>";
}
function loadPath(id) {
  console.log("loadPath: " + id)
  $(".nextButton").show();
  nextPossible = true;
  if(id == 1) {
  return "<div class='container'><div class='row'><div class='col-md-4 col-xs-12 imgColumn'>" + svgPanel("panel1a") + "</div><div class='col-md-4 col-xs-12 imgColumn'>" + svgPanel("panel1b") + "</div>  <div class='col-md-4 col-xs-12 imgColumn'>" + svgPanel("panel1c") + "</div></div></div>";
  } else if(id == 2) {
    return svgPanel("panel1a");
  } else if(id == 3) {
    $(".nextButton").hide();
    nextPossible = false;
    return "<a onclick='nextPath(4)'" + ">OPTION 1</a><br />" + "<a onclick='nextPath(5)'" + ">OPTION 2</a>"
  } else if(id == 4) {
    return svgPanel("panel4");
  } else if(id == 5) {
    return svgPanel("panel5");
  } else if(id == 6) {
    return svgPanel("panel6");
  } else if(id == 7) {
    return svgPanel("panel7");
  }
}

function nextPath(id=null) {
  emptyAllPathsExceptOne(currentPath);
  if(currentPath==7) {
    box();
    $(".nextButton").hide()
    $(".backButton").hide()
  } else {
    prevPath = currentPath;
    if(id==null) {
      currentPath+=1;
    } else {
      currentPath = id
    }
    let element = "<div style='background:white;' class='path_" + currentPath + " newStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + currentPath, {duration: 1, left:0, ease: "power4.out"}); // after this delete the previous path element
  }
}

function previousPath() {
  emptyAllPathsExceptOne(currentPath);
  if(currentPath<=1) {
    gsap.to(".path_" + currentPath, {duration: 2, scale:"0.5", left: "-100%", ease: "power4.out"});
    currentPath = 0;
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
    gsap.to(".path_" + currentPath, {duration: 1, left:0, ease: "power4.out"}); // after this delete the previous path element

  }

}
