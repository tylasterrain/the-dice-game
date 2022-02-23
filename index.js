let gameStarted = false;

function rollDice() {
    var number1 = Math.floor(Math.random() *6) +1;
var diceImage1 = "./images/dice" + number1 + ".png";

var number2 = Math.floor(Math.random() *6) +1;
var diceImage2 = "./images/dice" + number2 + ".png";

    $("img.img1").attr("src", diceImage1);
    $("img.img2").attr("src", diceImage2);

    if(number1 > number2) {
        $("h1").html("Player 1 Wins!");
        $(".winner2-flag").hide();
        $(".winner1-flag").show();

    } else if (number1 < number2) {
        $("h1").html("Player 2 Wins!");
        $(".winner1-flag").hide();
        $(".winner2-flag").show();

    } else {
        $("h1").html("Draw!");
        $(".winner1-flag").show();
        $(".winner2-flag").show();
    }
};

if(!gameStarted) {
    $(".winner1-flag").hide();
 $(".winner2-flag").hide();
}

    $(document).click(function (){
        
        if(!gameStarted){
            rollDice();
            gameStarted=true;
        } else {
rollDice();
        }});

        
    $(document).keydown(function (){
        if(!gameStarted){
            rollDice();
            gameStarted=true;
        } else {
rollDice();
    }});

