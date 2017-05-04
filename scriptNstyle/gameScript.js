//creating angular module
var gameApp = angular.module('gameApp', []);

//creating controller

gameApp.controller('gameController',function($scope,$window){
	$scope.heading = "SPIN YOUR LUCK";
	var nwCount = 10;
    var wCount = 7;
    var bwCount = 3;
	var chartFunction = function(res){
		if(res === "win"){
			wCount = wCount + 1;
		}
		if(res === "noWin"){
			nwCount = nwCount + 1;
		}
		if(res === "bigWin"){
			bwCount = bwCount + 1;
		}
				
		//Better to construct options first and then pass it as a parameter
	var options = {
		title: {
			text: "Record of the day",
			fontColor: "red",
            fontSize: 20
		},
                animationEnabled: true,
		data: [
		{
			type: "column", //change it to line, area, bar, pie, etc
			dataPoints: [
				{ label: "No Wins", y: nwCount },
				{ label: "Wins", y: wCount },
				{ label: "Big Wins", y: bwCount }
			]
		}
		]
	};
    
	$("#chartContainer").CanvasJSChart(options);

	}
	
	$window.onload = chartFunction();

$scope.openPopup = false;
$scope.popupText = "";
var bonusCounter = 0;
var result = "";
$scope.closePopup = function(){
$scope.openPopup = false;
}
$scope.changeImages = function(){
	var num1 = Math.floor((Math.random() * 5) + 1);
	 var image1 = document.getElementById("screen1");
        switch(num1){
        case 1 :
            image1.src = "images/Symbol_1.png";
            break;
        case 2 :
            image1.src = "images/Symbol_2.png";
            break;
        case 3 :
            image1.src = "images/Symbol_3.png";
            break;
		case 4 :
            image1.src = "images/Symbol_4.png";
            break;
        case 5 :
            image1.src = "images/Symbol_5.png";
            break;
		}
	var num2 = Math.floor((Math.random() * 5) + 1);
	 var image2 = document.getElementById("screen2");
        switch(num2){
        case 1 :
            image2.src = "images/Symbol_1.png";
            break;
        case 2 :
            image2.src = "images/Symbol_2.png";
            break;
        case 3 :
            image2.src = "images/Symbol_3.png";
            break;
		case 4 :
            image2.src = "images/Symbol_4.png";
            break;
        case 5 :
            image2.src = "images/Symbol_5.png";
            break;
		}
	var num3 = Math.floor((Math.random() * 5) + 1);
	 var image3 = document.getElementById("screen3");
        switch(num3){
        case 1 :
            image3.src = "images/Symbol_1.png";
            break;
        case 2 :
            image3.src = "images/Symbol_2.png";
            break;
        case 3 :
            image3.src = "images/Symbol_3.png";
            break;
		case 4 :
            image3.src = "images/Symbol_4.png";
            break;
        case 5 :
            image3.src = "images/Symbol_5.png";
            break;
		}
		if(num1 === num2 && num2 === num3){
			bonusCounter = bonusCounter + 1;
			if(bonusCounter > 1){
				$scope.popupText = "Congrats! It's a BONUS win.";
			} else {
				$scope.popupText = "Congrats! It's a big win.";
			}
			result = "bigWin";
		}
		if(num1 !== num2 && num2 !== num3 && num3 !== num1){
			bonusCounter = 0;
			$scope.popupText = "Oops! It's not a win.";
			result = "noWin";
		}
	    if((num1 !== num2 && num2 === num3) || (num1 === num2 && num2 !== num3) || (num1 === num3 && num1!== num2)){
			bonusCounter = 0;
			$scope.popupText = "Congrats! It's a win.";
			result = "win";
		}
		$scope.openPopup = true;
		chartFunction(result);
}

});