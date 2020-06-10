var ouchaudio = $("#ouch")[0];
var panicaudio = $("#panic")[0];
var showeraudio = $("#shower")[0];
var typingaudio = $("#typing")[0];
var dropaudio = $("#drop")[0];
var clockaudio = $("#clock")[0];

$("body").on('mouseenter', '.path_1 > object', function(){
  boxControlsOnly(1);
  ouchaudio.play();
});
$("body").on('mouseout', '.path_1 > object', function(){
  ouchaudio.pause();
  ouchaudio.currentTime = 0;

});
$("body").on('mouseenter', '.path_2b > object', function(){
  boxControlsOnly(1);
  dropaudio.play();
});
$("body").on('mouseout', '.path_2b > object', function(){
  dropaudio.pause();
  dropaudio.currentTime = 0;
});

$("body").on('mouseenter', '.path_2c > object', function(){
  boxControlsOnly(1);
  panicaudio.play();
});
$("body").on('mouseout', '.path_2c > object', function(){
  panicaudio.pause();
  panicaudio.currentTime = 0;
});

$("body").on('mouseenter', '.path_2b > object', function(){
  boxControlsOnly(1);
  panicaudio.play();
});
$("body").on('mouseout', '.path_2b > object', function(){
  panicaudio.pause();
  panicaudio.currentTime = 0;
});

$("body").on('mouseenter', '.path_3 > object', function(){
  boxControlsOnly(1);
  dropaudio.play();
});
$("body").on('mouseout', '.path_3 > object', function(){
  dropaudio.pause();
  dropaudio.currentTime = 0;
});

$("body").on('mouseenter', '.path_5 > object', function(){
  boxControlsOnly(1);
  showeraudio.play();
});
$("body").on('mouseout', '.path_5 > object', function(){
  showeraudio.pause();
  showeraudio.currentTime = 0;
});
$("body").on('mouseenter', '.path_7 > object', function(){
  boxControlsOnly(1);
  clockaudio.play();
});
$("body").on('mouseout', '.path_7 > object', function(){
  clockaudio.pause();
  clockaudio.currentTime = 0;
});
$("body").on('mouseenter', '.path_6 > object', function(){
  boxControlsOnly(1);
  typingaudio.play();
});
$("body").on('mouseout', '.path_6 > object', function(){
  typingaudio.pause();
  typingaudio.currentTime = 0;
});
