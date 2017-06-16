$(document).ready(function(){
	//create global variables
	var diceRoll;
	var playerTotal1;
	var playerTotal2;
	var playerName1;
	var playerName2;

    //save players and start game
	$("#save").click(function(){
        playerName1 = $("#player1").val();
    	playerName2 = $("#player2").val();

    	$("#playerNameOne").text(playerName1);
    	$("#playerNameTwo").text(playerName2);

    	$(".p1").attr("disabled", false);
    	$(".p2").attr("disabled", true);
    	$("#save").attr("disabled", true);
    });
    //save players and start game


    //player1 turn
    $("#p1 > .rollDice").click(function(){
        playerTotal1 = parseInt($("#score1 > .score").text());

        if(playerTotal1 < 100){
            diceRoll = Math.floor(Math.random()*6) + 1;
            $("#score").text(diceRoll);

            if(diceRoll>1){
            	playerTotal1 = playerTotal1 + diceRoll;
            	$("#score1 > .score").text(playerTotal1);
            } else {
            	$(".p1").attr("disabled", true);
            	$(".p2").attr("disabled", false);
            }
        } else {
        	$("#victory").text(playerName1.toUpperCase() + " " + "HAS WON!!");
        }
    });

    $("#p1 > .rollDice + .passTurn").click(function(){
        $(".p1").attr("disabled", true);
        $(".p2").attr("disabled", false);
    });
    //player1 turn


    //player2 turn
    $("#p2 > .rollDice").click(function(){
        playerTotal2 = parseInt($("#score2 > .score").text());

        if(playerTotal2 < 100){
            diceRoll = Math.floor(Math.random()*6) + 1;
            $("#score").text(diceRoll);

            if(diceRoll>1){
            	playerTotal2 = playerTotal2 + diceRoll;
            	$("#score2 > .score").text(playerTotal2);
            } else {
            	$(".p2").attr("disabled", true);
            	$(".p1").attr("disabled", false);
            }
        } else {
        	$("#victory").text(playerName2.toUpperCase() + " " + "HAS WON!!");
        }
    });

    $("#p2 > .rollDice + .passTurn").click(function(){
        $(".p2").attr("disabled", true);
        $(".p1").attr("disabled", false);
    });
    //player2 turn
});