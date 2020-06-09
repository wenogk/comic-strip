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


function loadPath(id) {
  console.log("loadPath: " + id)
  $(".nextButton").show();
  nextPossible = true;
  if(id == 1) {
  $.get('assets/panel1.html', function(data) {
    return data;
  });
  } else if(id == 2) {
    return "two"
  } else if(id == 3) {
    return "three"
  } else if(id == 4) {
    $(".nextButton").hide();
    nextPossible = false;

    return "<a onclick='nextPath(5)'" + ">OPTION 1</a><br />" + "<a onclick='nextPath(6)'" + ">OPTION 2</a>"
  } else if(id == 5) {

    return "five"
  } else if(id == 6) {
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
    gsap.to(".path_" + currentPath, {duration: 1, left:0, ease: "power4.out"}); // after this delete the previous path element
  }
}

function previousPath() {
  if(currentPath<=1) {
    $(".newStory").remove();
    $(".prevStory").remove();
    //alert("remove all")

  } else {
    let tempPath = prevPath;
    if(prevPath > currentPath) {
      currentPath -=1;
    } else {
      prevPath = currentPath;
      currentPath = tempPath;
    }

  //  alert(currentPath)
    let element = "<div style='background:" + "#"+((1<<24)*Math.random()|0).toString(16) +"' class='path_" + currentPath + " prevStory' >" + loadPath(currentPath)  + "</div>"
    $("body").append(element);
    gsap.to(".path_" + currentPath, {duration: 1, left:0, ease: "power4.out"}); // after this delete the previous path element

  }

}
