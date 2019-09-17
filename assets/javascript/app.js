//Timer Mechanism//
setTimeout(twentySeconds, 1000 * 20);
setTimeout(twentyFiveSeconds, 1000 * 25);
setTimeout(timeUp, 1000 * 30);

function twentySeconds() {
    $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
    console.log("10 seconds left");
}
function twentyFiveSeconds() {
    $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
    console.log("5 seconds left");
}

function timeUp() {
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
    scoreboard();
}

//checking questions//
//variables//
var correct=0;
var incorrect=0;
var noAnswer=0;
//after submit is clicked, show scoreboard(), show vars correct, incorrect//
$(".submit").on("click", function(){
    $(".correct").append("Correct: " + correct);
    $(".incorrect").append("Incorrect: " + incorrect);
    $(".noAnswer").append("No Response: " + noAnswer);
})