$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML

    // global vars
    var clicks = 0;



    $("#clickCountButton").click(function (event) {
        event.preventDefault();
        countClick();
    });

    $("#birthYearButton").click(function (event) {
        event.preventDefault();
        checkAge();
    });

    $("#salesTaxButton").click(function (event) {
        event.preventDefault();
        calcSalesTax();
    });

    $("#catAgeButton").click(function (event) {
        event.preventDefault();
        recommendFood();
    });

    $("#drawCardButton").click(function (event) {
        event.preventDefault();
        drawCard();
    });

	function countClick() {
		// Increment a variable that tracks the
        // number of button clicks
        clicks++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clicks);
		// When the count gets to 10, reset it to 0
        if (clicks === 10) {
            clicks = 0;
        }


	}


    function checkAge() {
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var year = parseInt($("#birthYear").val());

        var age = 2020 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if ( age < 18) {
            $("#birthYearOutput").text("Child");
        } else {
            $("#birthYearOutput").text("Adult");
        }

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax() {
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"

        var amount = parseFloat($("#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        var state = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        var output;
        if ( state === "WI" ) {
            output = amount * .05;
        } else if ( state === "IL") {
            output = amount * .08;
        } else if ( state === "MN") {
            output = amount * .075;
        } else if ( state === "MI") {
            output = amount * .055;
        } else {
            output = "ERROR"
        }
        $("#salesTaxOutput").text(output);
        // print "Error" instead
    }

    function recommendFood() {
        // Get the cat's age from the text box with
        // ID of "catAge"
        var catAge = parseInt($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        var output;
        if (catAge < 2) {
            output = "kitten chow";
        } else if (catAge >= 2 && catAge <= 10) {
            output = "adult chow";
        } else {
            output = "senior chow";
        }

        $("#catAgeOutput").text(output);
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard() {
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // determine face
        if (faceValue === 1) {
            description = "Ace";
        } else if (faceValue === 11) {
            description = "Jack";
        } else if (faceValue === 12) {
            description = "Queen";
        } else if (faceValue === 13) {
            description = "King";
        } else {
            description = faceValue;
        }

        description += ' of ';

        if (suit === 1) {
            description += "Clubs";
        } else if (suit === 2) {
            description += "Spades";
        }  else if (suit === 3) {
            description += "Hearts";
        } else {
            description += "Diamonds";
        }
        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);

    }

});