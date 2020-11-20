var currentProgress = 0;
var contentNumber = 0;
var currentPosition = 0;
var award = 0;


var content_1 = '<div class="row" style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >The green pigment in plant cells is called:</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. Chlorophyll</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. Formaldehyde</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. Verde</span><br> \
    </div>\
    <div class="row " id="id_4">\
    <span style="font-size:15px;">4. Alcohol</span><br> \
</div>\
        </div>\
<hr /></div>';


var content_2 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >T-cells, B-cells, macrophages, and platelets are all part of the ___________ system</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. Circulatory</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. Endocrine</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. Digestive</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. Immune \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_3 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Which organ breaks apart and grinds up food that enters it from the mouth via the esophagus?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. liver</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. kidney</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. stomach</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. small intestine \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_4 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Which of the following connects two bones in a joint?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. cartilage</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. muscle</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. ligament</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. tendon \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';


var content_5 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Fish breathe through ________.</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. Ears</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. Nose</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. Gills</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. Heart \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_6 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Which type of blood vessel carries oxygenated blood away from the heart to all of the body tissues?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. arteries</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. podocytes</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. capillaries</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. veins \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_7 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >What type of behavior is exhibited by a plant when it bends towards the light?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. positive phototropism</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. thirst</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. negative phototropism</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. anger \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';


var content_8 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >What is the first stage of development after fertilization of an egg?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. embryo</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. blastula</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. baby</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. zygote \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_9 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >What does a eukaryotic cell have that a prokaryotic cell is missing?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. cytoplasm</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. nucleus</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. mitochondria</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. vacuoles \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';


var content_10 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Which of the following contains instructions for all living things?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. Lipids</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. RNA</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. DNA</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. DNA and RNA \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_11 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >A person with type A blood can receive a transfusion from a person with which blood type(s)?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. Type O only</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. Type B only</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. Type A only</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. Type A and O \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';


var content_12 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Which list of homologous structures support the theory of evolution?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. A human hand, a while fin, and a bats wing</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. A cow leg, a snakes spine, and a frogs skull</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. A human leg, a catfish spine, and a raccoon nose</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. A human eaar, a cats mouth, and a dogs leg \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_13 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >A sarcomere is the basic structural unit of which type of tissue?</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. Kleenex</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. Liver</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. Brain</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. Muscle \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_14 = '<div class="row"  style="color:rgb(0,0,0);">\
<div class="row" >\
        <div class="navItem" style="border-radius:8px;width:98%;">\
            <span style="font-size:15px;" >Compared to cells, viruses do NOT have:</span>\
        </div>\
</div>\
<div class="row" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
    <div class="row processInput" id="id_1">\
            <span style="font-size:15px;">1. a nucleus</span><br>    \
    </div>\
    <div class="row processInput" id="id_2">\
            <span style="font-size:15px;">2. cell membrane</span><br>\
    </div>\
    <div class="row " id="id_3">\
            <span style="font-size:15px;">3. organelles</span><br> \
    </div>\
    <div class="row " id="id_4">\
        <span style="font-size:15px;">4. all of the above \
        </span><br> \
    </div>\
        </div>\
<hr /></div>';

var content_16 = '<div><h1>Final score :</h1><hr /><p></p></div>'





$("#quizBody").ready(function() {
    startQuiz();
});


// accessing the quiz here
var userInput = 0;
var questionAnswer = '{'+
'"questions" : ['+
  '{"number_1":"1"},'+
  '{"number_2":"4"},'+
  '{"number_3":"3"},'+
  '{"number_4":"3"},'+
  '{"number_5":"3"},'+
  '{"number_6":"1"},'+
  '{"number_7":"1"},'+
  '{"number_8":"4"},'+
  '{"number_9":"2"},'+
  '{"number_10":"4"},'+
  '{"number_11":"4"},'+
  '{"number_12":"1"},'+
  '{"number_13":"4"},'+
  '{"number_14":"4"},'+
  '{"number_15":"3"}'+
']'+
'}';



function startQuiz(){
             
            $("#quizContent").append(content_1);
            currentProgress = currentProgress + 6.6;
            document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);border-radius:18px;";
          //  document.getElementById("theValue").innerText = "10%";
            
        }

function showAward() {
        var content_100 = '<div class="row"  style="color:rgb(0,0,0);">\
        <div class="row" >\
                <div class="navItem" style="border-radius:8px;width:98%;">\
                    <span style="font-size:15px;" >Well done for playing the quiz</span>\
                </div>\
        </div>\
        <div class="row" id="blinkingBorder" style="border-radius:6px;background-color:rgba(0,0,0,0.04);width:94%;margin-left:4px;" >\
            <div class="row processInput" id="id_1"><center>\
                    <span style="font-size:15px;" class="w3-animate-left">FINAL SCORE </span><br><br><center><span style="font-weight:bold;background-color:#33cc33;color:rgb(255,255,255);border-radius:18px;padding:5px;" class="w3-animate-right">'+award+'</span></center><br>    \
            </div></center>\
        </div>\
        <hr /></div>';
         $("#quizContent").empty();
        
        // apkpending the incremented content number
        // alert("FINAL SCORE : "+award);
        $("#quizContent").append(content_100);
        console.log("this is the content in show award");


}

function processAnswer() {
        var obj = JSON.parse(questionAnswer);
       
        switch(currentPosition){
                case 0:
                        var rightAnswer = obj.questions[currentPosition].number_1;
                        answerProcessorOne();
                        break;
                case 1:
                        var rightAnswer = obj.questions[currentPosition].number_2;
                        answerProcessorTwo();
                        break;
                case 2:
                        var rightAnswer = obj.questions[currentPosition].number_3;
                        answerProcessorThree();
                        break;
                case 3:
                        var rightAnswer = obj.questions[currentPosition].number_4;
                        answerProcessorFour();
                        break;
                case 4:
                        var rightAnswer = obj.questions[currentPosition].number_5;
                        answerProcessorFive();
                        break;
                case 5:
                        var rightAnswer = obj.questions[currentPosition].number_6;
                        answerProcessorSix();
                        break;
                case 6:
                        var rightAnswer = obj.questions[currentPosition].number_7;
                        answerProcessorSeven();
                        break;
                case 7:
                        var rightAnswer = obj.questions[currentPosition].number_8;
                        answerProcessorEight();
                        break;
                case 8:
                        var rightAnswer = obj.questions[currentPosition].number_9;
                        answerProcessorNine();
                        break;
                case 9:
                        var rightAnswer = obj.questions[currentPosition].number_10;
                        answerProcessorTen();
                        break;
                case 10:
                        var rightAnswer = obj.questions[currentPosition].number_11;
                        answerProcessorEleven();
                        break;
                case 11:
                        var rightAnswer = obj.questions[currentPosition].number_12;
                        answerProcessorTwelve();
                        break;
                case 12:
                        var rightAnswer = obj.questions[currentPosition].number_13;
                        answerProcessorThirteen();
                        break;
                case 13:
                        var rightAnswer = obj.questions[currentPosition].number_14;
                        answerProcessorFourteen();
                        break;
                case 14:
                        var rightAnswer = obj.questions[currentPosition].number_15;
                        answerProcessorFifteen();
                        break;
        }
        
        
        
        
        function answerProcessorOne() {
                
                if(userInput == rightAnswer){
                        award = award + 1;
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_2);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                         
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_2);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition = currentPosition + 1;
        }
        function answerProcessorTwo() {
                
                if(userInput == rightAnswer){
                        award ++;
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_3);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_3);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                        
                }
                currentPosition  = currentPosition + 1;
        }

        function answerProcessorThree() {
                
                if(userInput == rightAnswer){
                        award++;
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_4);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_4);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }

        function answerProcessorFour() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        console.log("oh yes thats the right answer");
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_5);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_5);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                        
                }
                currentPosition ++;
        }

        function answerProcessorFive() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        console.log("oh yes thats the right answer");
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_6);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_6);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorSix() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        console.log("oh yes thats the right answer");
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_7);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_7);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorSeven() {
                console.log("this is the right answer :1"+rightAnswer);
                document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        award++;
                        console.log("oh yes thats the right answer");
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_8);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                        setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_8);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorEight() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_9);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_9);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorNine() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_10);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_10);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorTen() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_11);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_11);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorEleven() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_12);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_12);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorTwelve() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_13);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_13);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorThirteen() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_14);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_14);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorFourteen() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                showAward();
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                showAward();
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorFifteen() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_16);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_16);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
        function answerProcessorSixteen() {
                
                if(userInput == rightAnswer){
                        console.log("oh yes thats the right answer");
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;"; 
                        
                        award++;
                        setTimeout(procedure, 1000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_17);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";
                                          
                        }
                }
                else {
                        document.getElementById("id_"+rightAnswer).style = "background:#66ff99;";
                        document.getElementById("id_"+userInput).style = "background:red;";
                         setTimeout(procedure, 2000);
                        function procedure(){
                                $("#quizContent").empty();
                                
                                // apkpending the incremented content number
                                $("#quizContent").append(content_17);
                    
                                currentProgress = currentProgress + 6.6;
                                document.getElementById("theProgress").style = "width:"+currentProgress+"%;background:#BAAAAA;color:rgb(194, 18, 18);font-size:13px;border-radius:20px;";                    
                        }
                        
                }
                currentPosition ++;
        }
       
}