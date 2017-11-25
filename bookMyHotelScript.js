var bookMyHotelApp = angular.module('bookMyHotelApp', ['ngAnimate']);
bookMyHotelApp.controller('bookMyHotelController', function($scope,$window,$timeout){
(function(){
	$scope.searchText = "";
$scope.userName = "";
$scope.userName = $window.localStorage.getItem("user");
$timeout(function () {
	     if($scope.userName === "Rishabh" && $window.localStorage.getItem("rishabhJson") !== null){
			$scope.hotelsJson = JSON.parse($window.localStorage.getItem("rishabhJson")); 
		 } else if($scope.userName === "Anurag" && $window.localStorage.getItem("anuragJson") !== null){
			$scope.hotelsJson = JSON.parse($window.localStorage.getItem("anuragJson")); 
		 } else {
			 $scope.hotelsJson = [
  {
    "uid": 1,
    "image": "hotelHilton.jpg",
    "name": "Hilton",
	"rating": 4,
	"price": 2000,
	"location": "New Delhi",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 2,
    "image": "hotelFormula1.jpg",
    "name": "Hotel Formula 1",
	"rating": 3.5,
	"price": 2200,
	"location": "Noida",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 3,
    "image": "hotelFortune.jpg",
    "name": "Fortune Hotel",
	"rating": 2.5,
	"price": 1300,
	"location": "New Delhi",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 4,
    "image": "hotelLeela.jpg",
    "name": "Hotel Leela",
	"rating": 3.5,
	"price": 1700,
	"location": "Gurgaon",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 5,
    "image": "hotelParkPlaza.jpg",
    "name": "Park Plaza",
	"rating": 4,
	"price": 2000,
	"location": "Gurgaon",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 6,
    "image": "hotelPullman.jpg",
    "name": "Pullman",
	"rating": 3,
	"price": 1200,
	"location": "Ghaziabad",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 7,
    "image": "hotelRadison.jpg",
    "name": "Radison Blu",
	"rating": 4.5,
	"price": 2500,
	"location": "New Delhi",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 8,
    "image": "hotelSangriLa.jpg",
    "name": "Sangri La",
	"rating": 4,
	"price": 1800,
	"location": "Noida",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 9,
    "image": "hotelSuperTech.jpg",
    "name": "Super Tech",
	"rating": 3.5,
	"price": 1500,
	"location": "Gurgaon",
	"isBooked": false,
	"triedBooking": 0
  },
  {
    "uid": 10,
    "image": "hotelTaj.jpg",
    "name": "Taj Hotel",
	"rating": 4.5,
	"price": 3000,
	"location": "New Delhi",
	"isBooked": false,
	"triedBooking": 0
  }];
}}, 500);
$scope.popupFlag = false;
$scope.selectedHotel = "";
$scope.selectedLocation = "";
$scope.selectedPrice = 0;
  $scope.dateModel = {
	  "sDate": "",
	  "eDate": ""
  };
  $scope.roomCounter = 1;
$scope.totalAmount = 0;
$scope.index = 0;
})();
var bookedOrNot = function(val,id){
	var flag = false;
	if(val === true){
	$scope.hotelsJson.forEach(function(data){
			if(data.uid === id && data.isBooked === true){
			 flag = true;
			}
	});
	}
	return flag;
};
//toggle popup
$scope.openBookingPopup = function(val,id){
	if(!bookedOrNot(val,id)){
      $scope.popupFlag = val;
	  $scope.dateModel.sDate = "";
	  $scope.dateModel.eDate = "";
      $scope.totalAmount = 0;
	if(val === true){
		$scope.hotelsJson.forEach(function(data){
			if(data.uid === id){
			$scope.selectedHotel = data["name"];
            $scope.selectedLocation = data["location"];
            $scope.selectedPrice = data["price"];
			}
		});
		$scope.index = id;
	} else {
		   $scope.hotelsJson.forEach(function(data){
			if(data.uid === $scope.index){
				data.triedBooking = data.triedBooking + 1;
			}
		   });
		   $timeout(function () {
           $scope.hotelsJson.sort(function(a, b){return b.triedBooking - a.triedBooking});
           }, 700);
		   $timeout(function () {
            var strJson =  JSON.stringify($scope.hotelsJson);
			if($scope.userName === "Anurag"){
			 $window.localStorage.setItem("anuragJson",strJson);	
			} else {
				$window.localStorage.setItem("rishabhJson",strJson);
			}
           }, 1000);
		   $scope.selectedHotel = "";
           $scope.selectedLocation = "";
           $scope.selectedPrice = 0;
	}
	} else {
		alert("Already Booked");
	}
};
//date selection function
var diffDays = 0;
$scope.selectCheckInDate = function(){
	if(($scope.dateModel.sDate !== "" || $scope.dateModel.sDate !== null) && ($scope.dateModel.eDate !== "" || $scope.dateModel.eDate !== null) && $scope.dateModel.sDate >= new Date() && $scope.dateModel.sDate < $scope.dateModel.eDate){
       var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
       var firstDate = new Date($scope.dateModel.sDate);
       var secondDate = new Date($scope.dateModel.eDate);
       diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	   $scope.totalAmount = document.getElementById("myNumber").value * $scope.selectedPrice * diffDays;
	} else if($scope.dateModel.sDate <= new Date() || $scope.dateModel.sDate >= $scope.dateModel.eDate){
		alert("Select Check In date greater than current date and lesser than Check Out date");
		$scope.totalAmount = 0;
		$scope.dateModel.sDate = "";
	} else if($scope.dateModel.eDate === "" || $scope.dateModel.eDate === null || $scope.dateModel.sDate === "" || $scope.dateModel.sDate === null){
		$scope.totalAmount = 0;
	} else {
		$scope.totalAmount = 0;
	}
};
$scope.selectCheckOutDate = function(){
	if(($scope.dateModel.sDate !== "" || $scope.dateModel.sDate !== null) && ($scope.dateModel.eDate !== "" || $scope.dateModel.eDate !== null) && $scope.dateModel.sDate >= new Date() && $scope.dateModel.sDate < $scope.dateModel.eDate){
       var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
       var firstDate = new Date($scope.dateModel.sDate);
       var secondDate = new Date($scope.dateModel.eDate);
       diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	   $scope.totalAmount = document.getElementById("myNumber").value * $scope.selectedPrice * diffDays;
	} else if($scope.dateModel.eDate <= new Date() || $scope.dateModel.sDate >= $scope.dateModel.eDate){
		alert("Select Check Out date greater than current date and Check In date");
		$scope.totalAmount = 0;
		$scope.dateModel.eDate = "";
	} else if($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null || $scope.dateModel.eDate === "" || $scope.dateModel.eDate === null){
		$scope.totalAmount = 0;
	} else {
		$scope.totalAmount = 0;
	}
};
//tracking rooms counter
$scope.changeCounter = function(){
	if($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null || $scope.dateModel.eDate === "" || $scope.dateModel.eDate === null){
		$scope.totalAmount = 0;
	} else {
		$scope.totalAmount = document.getElementById("myNumber").value * $scope.selectedPrice * diffDays;
	}
};
//booking functionality
$scope.bookNow = function(){
	if($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null || $scope.dateModel.eDate === "" || $scope.dateModel.eDate === null){
		alert("Select Check In / Check Out date");
	} else {
		$scope.hotelsJson.forEach(function(data){
			if(data.uid === $scope.index){
				data.isBooked = true;
				data.triedBooking = 0;
			}
		});
        $scope.popupFlag = false;		
        $timeout(function () {
        alert("Booking Successfull");
        }, 1000);
		$timeout(function () {
            var strJson =  JSON.stringify($scope.hotelsJson);
			if($scope.userName === "Anurag"){
			 $window.localStorage.setItem("anuragJson",strJson);	
			} else {
				$window.localStorage.setItem("rishabhJson",strJson);
			}
           }, 1000);
	}
};
//logout functionality
$scope.logoutFunc = function() {
	$window.localStorage.removeItem("user");
	$window.location.href = "login.html";
};    
});

