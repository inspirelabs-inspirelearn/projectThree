
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

// function play_parts_of_speech(){
//   // console.log("Playing parts of speech");
//   // var ps_audio_intro = document.getElementById("ps_audio_intro");
//   //  var sdcard = navigator.getDeviceStorage("music");
//   //  request=sdcard.get("ps_audio_intro.mp3");
//   //  request.onsuccess = function () {
//   //    var file = request.result;
//   //    ps_audio_intro.src = window.URL.createObjectURL(file);
//      if(playing){
//        document.getElementById("ps_clickable").innerText="Pause";
//        playing=false;
//        ps_audio_intro.pause();
//      }else{
//        document.getElementById("ps_clickable").innerText="Play";
//        playing=true;
//        ps_audio_intro.play();
//      }
//
//    }

   function play_ns_intro(){
     // console.log("Playing parts of speech");
     var ns_intro = document.getElementById("ns_intro");
      var sdcard = navigator.getDeviceStorage("sdcard");
      request=sdcard.get(".insplearn/ns_intro.mp4");
      request.onsuccess = function () {
        var file = request.result;
        ns_intro.src = window.URL.createObjectURL(file);
        if(playing){
          document.getElementById("ns_intro").innerText="Play";
          playing=false;
          ns_intro.pause();
        }else{
          document.getElementById("ns_intro").innerText="Pause";
          playing=true;
          ps_audio_intro.play();
        }

      }
}

function play_brain_sections(){
  // console.log("Playing parts of speech");
  var brain_sections = document.getElementById("brain_sections");
   var sdcard = navigator.getDeviceStorage("sdcard");
   request=sdcard.get(".insplearn/brain_sections.mp4");
   request.onsuccess = function () {
     var file = request.result;
     brain_sections.src = window.URL.createObjectURL(file);
     if(playing){
       document.getElementById("brain_sections").innerText="Play";
       playing=false;
       brain_sections.pause();
     }else{
       document.getElementById("brain_sections").innerText="Pause";
       playing=true;
       brain_sections.play();
     }

   }
}


function play_the_forebrain(){
  // console.log("Playing parts of speech");
  var the_forebrain = document.getElementById("the_forebrain");
   var sdcard = navigator.getDeviceStorage("sdcard");
   request=sdcard.get(".insplearn/the_forebrain.mp4");
   request.onsuccess = function () {
     var file = request.result;
    the_forebrain.src = window.URL.createObjectURL(file);
     if(playing){
       document.getElementById("the_forebrain").innerText="Play";
       playing=false;
       the_forebrain.pause();
     }else{
       document.getElementById("the_forebrain").innerText="Pause";
       playing=true;
       the_forebrain.play();
     }

   }
}

function play_the_cerebrum(){
  // console.log("Playing parts of speech");
  var the_cerebrum = document.getElementById("the_cerebrum");
   var sdcard = navigator.getDeviceStorage("sdcard");
   request=sdcard.get(".insplearn/the_cerebrum.mp4");
   request.onsuccess = function () {
     var file = request.result;
    the_cerebrum.src = window.URL.createObjectURL(file);
     if(playing){
       document.getElementById("the_cerebrum").innerText="Play";
       playing=false;
       the_cerebrum.pause();
     }else{
       document.getElementById("the_cerebrum").innerText="Pause";
       playing=true;
       the_cerebrum.play();
     }

   }
}



function play_the_midbrain(){
 // console.log("Playing parts of speech");
 var the_midbrain = document.getElementById("the_midbrain");
  var sdcard = navigator.getDeviceStorage("sdcard");
  request=sdcard.get(".insplearn/the_midbrain.mp4");
  request.onsuccess = function () {
    var file = request.result;
   the_midbrain.src = window.URL.createObjectURL(file);
    if(playing){
      document.getElementById("the_midbrain").innerText="Play";
      playing=false;
      the_midbrain.pause();
    }else{
      document.getElementById("the_midbrain").innerText="Pause";
      playing=true;
      the_midbrain.play();
    }

  }
}


function play_the_hindbrain(){
 // console.log("Playing parts of speech");
 var the_hindbrain = document.getElementById("the_hindbrain");
  var sdcard = navigator.getDeviceStorage("sdcard");
  request=sdcard.get(".insplearn/the_hindbrain.mp4");
  request.onsuccess = function () {
    var file = request.result;
   the_hindbrain.src = window.URL.createObjectURL(file);
    if(playing){
      document.getElementById("the_hindbrain").innerText="Play";
      playing=false;
      the_hindbrain.pause();
    }else{
      document.getElementById("the_hindbrain").innerText="Pause";
      playing=true;
      the_hindbrain.play();
    }

  }
}


document.getElementById("ns_intro_btn").addEventListener('click',play_ns_intro);
document.getElementById("brain_sections_btn").addEventListener('click',play_brain_sections);
document.getElementById("the_forebrain_btn").addEventListener('click',play_the_forebrain);
document.getElementById("the_cerebrum_btn").addEventListener('click',play_the_cerebrum);
document.getElementById("the_midbrain_btn").addEventListener('click',play_the_midbrain);
document.getElementById("the_hindbrain_btn").addEventListener('click',play_the_hindbrain);


function processInput() {
  console.log("this is working!!!");
}
document.getElementsByClassName("processInput").addEventListener("focus", processInput);