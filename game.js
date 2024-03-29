var buttonColours =["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$(".btn").click(function(){
     var userChosenColour=$(this).attr("id");
     userClickedPattern.push(userChosenColour);
     playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});


// $(document).keydown(function(event){
    if (!started){
        $("#level-title").text("Level "+level);
        nextSequence();
      started=true;
    }
// })



function nextSequence(){
  userClickedPattern=[];   
    level++;
 $("#level-title").text("Level " + level);
  

   var randomNumber=Math.floor(Math.random()*4);
     var randomChosenColour=buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChosenColour);
};

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);

}

function checkAnswer(currentlevel){
    if (gamePattern[currentlevel]===userClickedPattern[currentlevel]){
        if (userClickedPattern.length===gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }}  
    else{
       
        playSound("wrong");
        $("#bod").addClass("game-over");
        setTimeout(function () {
            $("#bod").removeClass("game-over");
          }, 200);
          startOver();
          
    }
}

function startOver(){
    $("#level-title").text("Game Over, Press The Text to Restart");
    level = 0;
    gamePattern=[];
    userClickedPattern=[];   
    started=false; 
    $("#level-title").click(function(){
      window.location.href='intro.html';
    });
  
}




