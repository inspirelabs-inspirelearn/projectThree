
$(document).ready(function() {
// console.log("content function");
// //   var ps_audio_intro = document.getElementById("ps_audio_intro");
// //   var sdcard = navigator.getDeviceStorage("sdcard");
// //   request=sdcard.get(".insplearn/english/audios/ps_audio_intro.mp3");
// //   request.onsuccess = function () {
// //     var file = request.result;
// //     ps_audio_intro.src = window.URL.createObjectURL(file);
// // //     ps_audio_intro.play();
// // }
var sdcard = navigator.getDeviceStorage("sdcard");

request=sdcard.get(".insplearn/first_pic.jpg");



request.onsuccess = function () {
  var file = request.result;
  var first_pic =   document.getElementById("first_pic");
  first_pic.src = window.URL.createObjectURL(file);
}

request_Two =sdcard.get(".insplearn/second_pic.jpg");
request_Two.onsuccess = function () {
  var file = request_Two.result;
  var second_pic =   document.getElementById("second_pic");
  second_pic.src = window.URL.createObjectURL(file);
}



request_Three =sdcard.get(".insplearn/third_pic.jpg");
request_Three.onsuccess = function () {
  var file = request_Three.result;
  var third_pic =   document.getElementById("third_pic");
  third_pic.src = window.URL.createObjectURL(file);
}

});

// document.getElementById("ps_clickable").load(function(){console.log(content function");});
// $("#english_focus").load()
var playing =false; //is media playing or not?
var current_playing= null; //which media is playing?


   function play_ns_intro(){
     // console.log("Playing parts of speech");
     var ns_intro = document.getElementById("ns_intro");
      var sdcard = navigator.getDeviceStorage("sdcard");
      request=sdcard.get(".insplearn/ns_intro.mp4");
      request.onsuccess = function () {
        var file = request.result;
        ns_intro.src = window.URL.createObjectURL(file);
        if(!playing){
          ns_intro.play(); //start playing audio
          playing=true; //signal to say media is playing
          current_playing = ns_intro; // assing as current playing media
          document.getElementById("ns_intro_btn").innerText="Stop";
        }else if(current_playing != null && current_playing == ns_intro){
          ns_intro.stop();
          playing = false;
          current_playing =null;
          document.getElementById("ns_intro_btn").innerText="Play";
        }

        else{
          if(current_playing == null){
            current_playing.stop();
          }
           //stop whatever was playing first
          playing=true;
          ns_intro.play();
          current_playing = ns_intro;
          document.getElementById("ns_intro_btn").innerText="Stop";
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
     if(!playing){
       playing=true;
       brain_sections.play();
       current_playing = brain_sections;
       document.getElementById("brain_sections_btn").innerText="Stop";
     }
     else if(current_playing != null && current_playing == brain_sections){
       playing = false;
       current_playing = null;
       brain_sections.stop();
        document.getElementById("brain_sections").innerText="Play";
     }else{
       if(current_playing == null){
         current_playing.stop();
       }
       playing = true;
       current_playing = brain_sections;
       brain_sections.play();
       document.getElementById("brain_sections").innerText="Stop";
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
     if(!playing){
       playing =true;
       document.getElementById("the_forebrain_btn").innerText="Stop";
       the_forebrain.play();
       current_playing = the_forebrain;
     }else if (current_playing !=  null && current_playing == the_forebrain){
       playing=false;
       current_playing =null;
       the_forebrain.stop();
       document.getElementById("the_forebrain_btn").innerText="Play";
     }else{
       if(current_playing == null){
         current_playing.stop();
       }
       current_playing = the_forebrain;
       playing =true;
       the_forebrain.play();
       document.getElementById("the_forebrain_btn").innerText="Stop";

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
     if(!playing){
       document.getElementById("the_cerebrum_btn").innerText="Stop";
       playing=true;
       the_cerebrum.play();
       current_playing = the_cerebrum;
     }else if(current_playing != null && current_playing == the_cerebrum){
       the_cerebrum.stop();
       current_playing =  null;
       playing = false;
        document.getElementById("the_cerebrum_btn").innerText="Play";
     }else{

       if(current_playing == null){
         current_playing.stop();
       }
       document.getElementById("the_cerebrum_btn").innerText="Stop";
       playing=true;
       the_cerebrum.play();
       current_playing = the_cerebrum;
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
    if(!playing){
      document.getElementById("the_midbrain_btn").innerText="Stop";
      playing=true;
      the_midbrain.play();
      current_playing = the_midbrain;
    }else if (current_playing != null && current_playing == the_midbrain){
      the_midbrain.stop();
      current_playing = null;
      playing = false;
      document.getElementById("the_midbrain_btn").innerText="Play";
    }else{
      if(current_playing == null){
        current_playing.stop();
      }
      document.getElementById("the_midbrain_btn").innerText="Stop";
      playing=true;
      the_midbrain.play();
      current_playing = the_midbrain;
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
    if(!playing){
      document.getElementById("the_hindbrain_btn").innerText="Stop";
      playing=true;
      the_hindbrain.play();
      current_playing = the_hindbrain;
    }else if(current_playing != null && current_playing == the_hindbrain){
      the_hindbrain.stop();
      playing = false;
      current_playing = null;
      document.getElementById("the_hindbrain_btn").innerText="Play";
    }else{
      if(current_playing == null){
        current_playing.stop();
      }
      document.getElementById("the_hindbrain_btn").innerText="Stop";
      playing=true;
      the_hindbrain.play();
      current_playing = the_hindbrain;
    }

  }
}


document.getElementById("ns_intro_btn").addEventListener('click',play_ns_intro);
document.getElementById("brain_sections_btn").addEventListener('click',play_brain_sections);
document.getElementById("the_forebrain_btn").addEventListener('click',play_the_forebrain);
document.getElementById("the_cerebrum_btn").addEventListener('click',play_the_cerebrum);
document.getElementById("the_midbrain_btn").addEventListener('click',play_the_midbrain);
document.getElementById("the_hindbrain_btn").addEventListener('click',play_the_hindbrain);
