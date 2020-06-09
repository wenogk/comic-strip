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
    $(".nextButton").hide()

    return "<a onclick='nextPath(5)'" + ">OPTION 1</a><br />" + "<a onclick='nextPath(6)'" + ">OPTION 2</a>"
  } else if(id == 5) {
    $(".nextButton").show()
    return "five"
  } else if(id == 6) {
    $(".nextButton").show()
    return "six"
  } else if(id == 7) {
    return "seven"
  }
}

function nextPath(id=null) {
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
    let tempPath = prevPath;
    prevPath = currentPath;
    currentPath = tempPath;
  //  alert(currentPath)
    let element = "<div style='background:" + "#"+((1<<24)*Math.random()|0).toString(16) +"' class='path_" + currentPath + " prevStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + currentPath, {duration: 1, left:0}); // after this delete the previous path element

  }

}
