//variables//
var correct=0;
var incorrect=0;
var noAnswer=0;
setTimeout(twentySeconds, 1000 * 20);
setTimeout(twentyFiveSeconds, 1000 * 25);
setTimeout(timeUp, 1000 * 30);

function setTimer () {
    $("#timer").append(seconds); 
}
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
$(document).ready(function(){
    $('input:radio[name="question_1"]').change(function(){
        var Q1Correct = $("input[name='question_1']:checked").val();
        var Q1Incorrect = $("input[name='question_1']:checked").val();
        if (Q1Correct){
            correct++;
        }
        if (Q1Incorrect) {
            incorrect++;
        }

    $('input:radio[name="question_2"]').change(function(){
        if($(this.checked && this.value == "false")){
            correct++;
        }
        else if ($(this.checked && this.value == "true")){
            incorrect++;
        }
})})});






//after submit is clicked, show scoreboard(), show vars correct, incorrect//
$(".submit").on("click", function(){
    $(".correct").append("Correct: " + correct);
    $(".incorrect").append("Incorrect: " + incorrect);
    $(".noAnswer").append("No Response: " + noAnswer);
})
function scoreboard () {
    $(".correct").append("Correct: " + correct);
    $(".incorrect").append("Incorrect: " + incorrect);
    $(".noAnswer").append("No Response: " + noAnswer);};
