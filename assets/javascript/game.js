$( document ).ready(function(){

	var randomNumber = 0;
	var crystalNumber = [];
	var wins = 0;
	var losses = 0;
	var total = 0;
	$("#yourWins").html("Wins: " + wins);
	$("#yourLosses").html("Losses: " + losses);
	$(".yourScore").html("Your total score is: " + total);

		randomNumber = Math.floor(Math.random() * 80 + 20);
			$(".toGet").html("Random Number: " + randomNumber);

		function crystalValues(){
			for(var i = 0; i < 4; i++) {
				var number = Math.floor(Math.random() * 15 + 1)
				crystalNumber.push(number);
			};
		}

		crystalValues();


			$("#one").on ("click", function(){
				total += crystalNumber[0];
				$(".yourScore").html("Your total score is: " + total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

			$("#two").on ("click", function(){
				total += crystalNumber[1];
				$(".yourScore").html("Your total score is: " + total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

			$("#three").on ("click", function(){
				total += crystalNumber[2];
				$(".yourScore").html("Your total score is: " + total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

			$("#four").on ("click", function(){
				total += crystalNumber[3];
				$(".yourScore").html("Your total score is: " + total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

		function reset() {
			randomNumber = Math.floor(Math.random() * 80) + 20;
				$(".toGet").html("Random Number: " + randomNumber);
			crystalNumber = [];
			crystalValues();
			total = 0;
			$(".yourScore").html("Your total score is: " + total);
		}

		function winner(){
			alert("Winner!");
			wins++;
			$("#yourWins").html("Wins: " + wins);
			reset();
		}

		function loser(){
			alert("Sorry! You Lost");
			losses++;
			$("#yourLosses").html("Losses: " + losses);
			reset();
		}

});
