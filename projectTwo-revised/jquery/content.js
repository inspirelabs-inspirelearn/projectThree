
// $(window).load(function() {
// console.log("content function");
// //   var ps_audio_intro = document.getElementById("ps_audio_intro");
// //   var sdcard = navigator.getDeviceStorage("sdcard");
// //   request=sdcard.get(".insplearn/english/audios/ps_audio_intro.mp3");
// //   request.onsuccess = function () {
// //     var file = request.result;
// //     ps_audio_intro.src = window.URL.createObjectURL(file);
// // //     ps_audio_intro.play();
// // }
// });

// document.getElementById("ps_clickable").load(function(){console.log(content function");});
// $("#english_focus").load()
var playing =false;

function play_parts_of_speech(){
  // console.log("Playing parts of speech");
  // var ps_audio_intro = document.getElementById("ps_audio_intro");
  //  var sdcard = navigator.getDeviceStorage("music");
  //  request=sdcard.get("ps_audio_intro.mp3");
  //  request.onsuccess = function () {
  //    var file = request.result;
  //    ps_audio_intro.src = window.URL.createObjectURL(file);
     if(playing){
       document.getElementById("ps_clickable").innerText="Pause";
       playing=false;
       ps_audio_intro.pause();
     }else{
       document.getElementById("ps_clickable").innerText="Play";
       playing=true;
       ps_audio_intro.play();
     }

   }


document.getElementById("ps_clickable").addEventListener('click',play_parts_of_speech);
