let currentPath = 0;
let prevPath = 0;

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
       nextPath();
    }
});


function loadPath(id) {
  if(id == 1) {
    return "one"
  } else if(id == 2) {
    return "two"
  } else if(id == 3) {
    return "three"
  } else if(id == 4) {
    return "four"
  } else if(id == 5) {
    return "five"
  } else if(id == 6) {
    return "six"
  } else if(id == 7) {
    return "seven"
  }
}

function nextPath() {
  if(currentPath==7) {
    box();
    $(".nextButton").hide()
    $(".backButton").hide()
  } else {
    currentPath+=1;
    let element = "<div style='background:" + "#"+((1<<24)*Math.random()|0).toString(16) +"' class='path_" + currentPath + " newStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + currentPath, {duration: 1, left:0}); // after this delete the previous path element
  }
}

function previousPath() {
  if(currentPath<=1) {
    $(".newStory").remove();
    $(".prevStory").remove();
    //alert("remove all")

  } else {
    currentPath-=1;
  //  alert(currentPath)
    let element = "<div style='background:" + "#"+((1<<24)*Math.random()|0).toString(16) +"' class='path_" + currentPath + " prevStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + currentPath, {duration: 1, left:0}); // after this delete the previous path element

  }

}
