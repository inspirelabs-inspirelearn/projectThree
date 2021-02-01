

var current_position = 0;
var displayedContent = '';



// =======================================================================================================================
// functions for updating content in the reading section
// =======================================================================================================================




// ==================================================================================================
// accessing all the content here
// ==================================================================================================


// =====================================
// putting content access in the array variable of contents




// but first the content in variables

var content1_biology = '<div class="navItem row white_background" tabindex="10" id="content_1_biology">\
<h4>1.0 THE BRAIN AND NERVOUS SYSTEM</h4>\
<center>\
       <img id ="first_pic" src="" style="height:125px;width:90%;" />\
</center>\
</div>';

var content2_biology = '\
<div class="navItem row white_background"  tabindex="20" id="content_2_biology">\
<div style="background:rgba(0, 0, 0, 0.19);padding:2px;">\
        <h4 style="font-size:16px;font-weight:bold;">1.1 Introduction</h4>\
</div>\
  <p>The brain controls what you think and feel, how you learn and remember, and the way\
        you move and talk. But it also controls\
        things youre less aware of — like the\
        beating of your heart and the digestion of\
        your food.</p>\
</div>';


var content3_biology = '<div ><center>\
<button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="30" id="ns_intro_btn">Play</button>\
</center>\
</div>';


var content4_biology = '<div class="navItem row white_background"  tabindex="40" >\
<p>Think of the brain as a central computer\
      that controls all the bodys functions. The\
      rest of the nervous system is like a network\
      that relays messages back and forth from\
      the brain to different parts of the body. It\
      does this via the spinal cord, which runs\
      from the brain down through the back. It\
      contains threadlike nerves that branch out\
      to every organ and body part.</p>\
</div>';


var content5_biology = ' <div class="navItem row white_background"  tabindex="50">\
<div style="background:rgba(0, 0, 0, 0.19);padding:2px;" >\
        <h4 style="font-size:16px;font-weight:bold;">1.2 Sections of the Brain</h4>\
</div>\
<!-- this is where the first video element will be -->\
<video id="brain_sections" controls style="width:100%;">\
        <source  type="video/mp4">\
</video>\
</div>';



//======================================



function UpdateReadingContentNext(){

  // getting our data dynamically
  var contents = [content1_biology, content2_biology, content3_biology, content4_biology, content5_biology];
    
        console.log(current_position);

        // incrementing current position
        current_position = current_position + 1;

        // checking if maximum indexing has been reached, maintaining same maximum value
        if(current_position > 4){
          current_position = 4;
        }

        // assigning data on the current position to the dynamic variable 
        displayedContent = contents[current_position];
        console.log(displayedContent);
        
      // console.log("now running the next function");
      // $("#view").empty();
      
      $("#content_1_biology").empty();
      $("#content_1_biology").append(displayedContent);



    }


function UpdateReadingContentPrevious() {
  // we were incrementing in the next content function, and here we are just decrementing, for everything to load previous data


  var contents = [content1_biology, content2_biology, content3_biology, content4_biology, content5_biology];
  current_position = current_position - 1;

  // making sure the minimum value remains zero
  if(current_position < 0){
    current_position = 0;
  }
 
  console.log(current_position);
    
    
    displayedContent = contents[current_position];

    $("#content_1_biology").empty();
    $("#content_1_biology").append(displayedContent);

}


// ==================================================================================================
//
// functions for updating content in the reading section
// ==================================================================================================
// Here we are updating content for biology
// ==================================================================================================

var biology_content_1 = '';

var biology_content_2 = '';

var biology_content_3 = ' ';

var biology_content_4 = ' <div ><center>\
<button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="30" id="ns_intro_btn">Play</button>\
</center>\
</div>';

var biology_content_5 = ' <div class="navItem row white_background"  tabindex="40" >\
                                          <p>Think of the brain as a central computer\
                                                that controls all the bodys functions. The\
                                                rest of the nervous system is like a network\
                                                that relays messages back and forth from\
                                                the brain to different parts of the body. It\
                                                does this via the spinal cord, which runs\
                                                from the brain down through the back. It\
                                                contains threadlike nerves that branch out\
                                                to every organ and body part.</p>\
                                    </div>';

var biology_content_6 = '  <div class="navItem row white_background"  tabindex="50">\
<div style="background:rgba(0, 0, 0, 0.19);padding:2px;" >\
        <h4 style="font-size:16px;font-weight:bold;">1.2 Sections of the Brain</h4>\
</div>\
<!-- this is where the first video element will be -->\
<video id="brain_sections" controls style="width:100%;">\
        <source  type="video/mp4">\
</video>\
</div>';

var biology_content_7 = ' <div >\
<center>\
     <button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="60" id="brain_sections_btn">Play</button>\
</center>\
</div>\
<br>';

var biology_content_8 = ' <div class="navItem row white_background" tabindex="70">\
<center>\
        <img id="second_pic" src="" style="height:125px;width:90%;" />\
 </center>\
</div>';

var biology_content_9 = ' <div class="navItem row white_background" tabindex="80">\
The Fore Brain is the largest and most\
complex part of the brain. It consists of\
the cerebrum — the area with all the\
folds and grooves typically seen in\
pictures of the brain — as well as other\
structures under it.\
</div>';

var biology_content_10 = '  <!-- this is where the second video element will be -->\
<video id="the_forebrain" controls style="width:100%;">\
        <source src="" type="video/mp4">\
</video>\
<div >\
        <center>\
             <button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="90" id="the_forebrain_btn">Play</button>\
        </center>\
</div>';

var biology_content_11 = ' <div class="navItem row white_background" tabindex="100">\
                                            In the inner part of the forebrain sits the\
                                            thalamus, hypothalamus, and pituitary\
                                            gland :\
                                            The thalamus carries messages from the\
                                            sensory organs like the eyes, ears, nose,\
                                            and fingers to the cortex.\
                                            The hypothalamus controls your pulse,\
                                            thirst, appetite, sleep patterns, and other\
                                            processes in your body that happen\
                                            automatically\
                                            The hypothalamus also controls the\
                                            pituitary gland, which makes the\
                                            hormones that control growth,\
                                            metabolism, water and mineral balance,\
                                            The Cerebrum contains the information\
                                            that essentially makes you who you are:\
                                            your intelligence, memory, personality,\
                                            emotion, speech, and ability to feel and\
                                            move. Specific areas of the cerebrum are\
                                            in charge of processing these different\
                                            types of information. These are called\
                                            lobes, and there are four of them: the\
                                            frontal, parietal, temporal, and occipital\
                                            lobes.\
                                     </div>';

var biology_content_12 = '<!-- this is where the third video element will be -->\
                                            <video id="the_cerebrum" controls style="width:100%;">\
                                                    <source src="" type="video/mp4">\
                                            </video>\
                                            <div >\
                                                    <center>\
                                                         <button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="110" id="the_cerebrum_btn">Play</button>\
                                                    </center>\
                                            </div>';

var biology_content_13 = '<div class="navItem row white_background" tabindex="120">\
                                                <p>The outer layer of the cerebrum is called\
                                                        the cortex (also known as "gray\
                                                        matter"). Information collected by the\
                                                        five senses comes into the brain to the\
                                                        cortex</p>\
                                            </div>';


var biology_content_14 = '<div class="navItem row white_background" tabindex="130">\
                                                    <img id="third_pic" src="" width="100%;height:200px;" />\
                                                </div>';

var biology_content_15 = '<div class="navItem row white_background" tabindex="140">\
                                                <p>The midbrain, underneath the middle of\
                                                        the forebrain, acts as a master\
                                                        coordinator for all the messages going\
                                                        in and out of the brain to the spinal\
                                                        cord.</p>\
                                            </div>';

var biology_content_16 = ' <!-- this is where the fourth video element will be -->\
                                            <video id="the_midbrain" controls style="width:100%;">\
                                                    <source src="" type="video/mp4">\
                                            </video>';

var biology_content_17 = ' <div >\
                                                    <center>\
                                                         <button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="150" id="the_midbrain_btn">Play</button>\
                                                    </center>\
                                            </div>';

var biology_content_18 = '<div class="navItem row white_background" tabindex="160">\
                                                <p>The Hindbrain sits underneath the back\
                                                        end of the cerebrum. It consists of the\
                                                        cerebellum, pons, and medulla. The\
                                                        cerebellum — also called the "little\
                                                        brain" because it looks like a small\
                                                        version of the cerebrum — is\
                                                        responsible for balance, movement, and\
                                                        coordination.</p>\
                                            </div>';

var biology_content_19 = '<!-- this is where the fith video element will be -->\
                                            <video id="the_hindbrain" controls style="width:100%;">\
                                                    <source src="" type="video/mp4">\
                                            </video>\
                                            <div >\
                                                    <center>\
                                                         <button style="height:30px;border-radius:8px;border:1px solid rgba(0,0,0,0.2);width:80%;margin-left:17px;" type="button" class="navItem row" tabindex="170" id="the_hindbrain_btn">Play</button>\
                                                    </center>\
                                            </div>';

// these functions were at the top, have been transfered here due to global scopes
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
  
