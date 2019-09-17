//Timer Mechanism//
var seconds = Math.floor((distance % (1000 * 30)) / 1000);

setTimeout(twentySeconds, 1000 * 20);
setTimeout(twentyFiveSeconds, 1000 * 25);
setTimeout(timeUp, 1000 * 30);

function twentySeconds() {
    alert("About 10 Seconds Left!");
    console.log("10 seconds left");
}
function twentyFiveSeconds() {
    alert("About 5 Seconds Left!");
    console.log("5 seconds left");
}

function timeUp() {
    alert("Time's Up!");
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
function scoreboard () {
    $(".correct").append("Correct: " + correct);
    $(".incorrect").append("Incorrect: " + incorrect);
    $(".noAnswer").append("No Response: " + noAnswer);
}