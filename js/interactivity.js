var audio = $("#panel1a")[0];

$("body").on('mouseenter', '.path_1a > object', function(){
  audio.play();
});
$("body").on('mouseout', '.path_1a > object', function(){
  audio.pause();
  audio.currentTime = 0;
});
