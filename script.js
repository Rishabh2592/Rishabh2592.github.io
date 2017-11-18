var twubricApp = angular.module('twubricApp', ['ngAnimate']);
twubricApp.controller('twubricController', function($scope,$rootScope){
//Search box model 	
$scope.searchText = "";
/*
Declaring/Initilizing JSON array here only. 
Since we are not using server so it's not possible to do an AJAX call to fetch JSON array from some other file or location.   
Doing so gives an error of CORS (Cross Origin Resource Sharing). JavaScript doesn't even allow to access any local file because of this.
Without server & ajax it's only possible using ActiveX Control but that's a bad way. 
*/
$rootScope.twubricData = [
  {
    "uid": 1,
    "username": "sampleuser1",
    "image": "photo1.jpg",
    "fullname": "Sample User One",
    "twubric": {
	  "total": 7,
      "friends": 2,
      "influence": 3.5,
      "chirpiness": 1.5
    },
    "join_date": 1358899200
  },
  {
    "uid": 2,
    "username": "sampleuser2",
    "image": "photo1.jpg",
    "fullname": "Sample User Two",
    "twubric": {
      "total": 5,
      "friends": 2,
      "influence": 1.5,
      "chirpiness": 1.5
    },
    "join_date": 1355270400
  },
  {
    "uid": 3,
    "username": "sampleuser3",
    "image": "photo1.jpg",
    "fullname": "Sample User Three",
    "twubric": {
      "total": 3.5,
      "friends": 1,
      "influence": 1,
      "chirpiness": 1.5
    },
    "join_date": 1289433600
  },
  {
    "uid": 4,
    "username": "sampleuser4",
    "image": "photo1.jpg",
    "fullname": "Sample User Four",
    "twubric": {
      "total": 9,
      "friends": 2,
      "influence": 3,
      "chirpiness": 4
    },
    "join_date": 1300838400
  },
  {
    "uid": 5,
    "username": "sampleuser5",
    "image": "photo1.jpg",
    "fullname": "Sample User Five",
    "twubric": {
      "total": 8,
      "friends": 1,
      "influence": 4,
      "chirpiness": 4
    },
    "join_date": 1230768000
  },
  {
    "uid": 6,
    "username": "sampleuser6",
    "image": "photo1.jpg",
    "fullname": "Sample User Six",
    "twubric": {
      "total": 6,
      "friends": 2,
      "influence": 3,
      "chirpiness": 1
    },
    "join_date": 1252454400
  },
  {
    "uid": 7,
    "username": "sampleuser7",
    "image": "photo1.jpg",
    "fullname": "Sample User Seven",
    "twubric": {
      "total": 8,
      "friends": 2,
      "influence": 4,
      "chirpiness": 2
    },
    "join_date": 1278201600
  },
  {
    "uid": 8,
    "username": "sampleuser8",
    "image": "photo1.jpg",
    "fullname": "Sample User Eight",
    "twubric": {
      "total": 7,
      "friends": 2,
      "influence": 3,
      "chirpiness": 2
    },
    "join_date": 1331510400
  },
  {
    "uid": 9,
    "username": "sampleuser9",
    "image": "photo1.jpg",
    "fullname": "Sample User Nine",
    "twubric": {
      "total": 8,
      "friends": 1,
      "influence": 4,
      "chirpiness": 3
    },
    "join_date": 1367971200
  },
  {
    "uid": 10,
    "username": "sampleuser10",
    "image": "photo1.jpg",
    "fullname": "Sample User Ten",
    "twubric": {
      "total": 5,
      "friends": 1,
      "influence": 1,
      "chirpiness": 3
    },
    "join_date": 1228953600
  }];

  //Initilization function when document is ready to convert all the dates of json array in normal form and to add a displayFlag property in all the objects of an json array
(function() {
	var mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
   $rootScope.twubricData.forEach(function(data){
	   var newDate = new Date(data.join_date);
	   var m = mlist[newDate.getMonth()];
	   var d = newDate.getDate();
	   var y = newDate.getFullYear();
	   data.join_date = m+" "+d+", "+y;
	   data.displayFlag = true;
   });
})();  
//Switching displayFlag false when user intends to delete the specific profile
$scope.deleteUser = function(id){
   for(var i=0; i<$rootScope.twubricData.length; i++){
	   if($rootScope.twubricData[i].uid === id){
		    $rootScope.twubricData[i].displayFlag = false;
	   }
   }	
};  
});

// Filters/Sort Component
twubricApp.controller('filtersController', function($scope,$rootScope){
	//Filters to populate
	$scope.filters = [{
		"id":1,
		"name": "Twubric Score"
	},{
		"id":2,
		"name": "Friends"
	},{
		"id":3,
		"name": "Influence"
	},{
		"id":4,
		"name": "Chirpiness"
	}];
	//Flags to track ascending/descending order
	$scope.ascTwub = false;
	$scope.ascFrnd = false;
	$scope.ascInfl = false;
	$scope.ascChir = false;
	//Sort by function
	$scope.sortBy = function(id){
		if(id === 1){
	        $scope.ascFrnd = false;
	        $scope.ascInfl = false;
	        $scope.ascChir = false;
			if($scope.ascTwub === false){
			$rootScope.twubricData.sort(function(a, b) {
               return a.twubric.total - b.twubric.total;
            });
			} else {
			$rootScope.twubricData.sort(function(a, b) {
               return b.twubric.total - a.twubric.total;
            });	
			}
			$scope.ascTwub = !$scope.ascTwub;		
		}
		if(id === 2){
			$scope.ascTwub = false;
	        $scope.ascInfl = false;
	        $scope.ascChir = false;
			if($scope.ascFrnd === false){
			$rootScope.twubricData.sort(function(a, b) {
               return a.twubric.friends - b.twubric.friends;
            });
			} else {
			$rootScope.twubricData.sort(function(a, b) {
               return b.twubric.friends - a.twubric.friends;
            });	
			}
			$scope.ascFrnd = !$scope.ascFrnd;
		}
		if(id === 3){
			$scope.ascTwub = false;
			$scope.ascFrnd = false;
	        $scope.ascChir = false;
			if($scope.ascInfl === false){
			$rootScope.twubricData.sort(function(a, b) {
               return a.twubric.influence - b.twubric.influence;
            });
			} else {
			$rootScope.twubricData.sort(function(a, b) {
               return b.twubric.influence - a.twubric.influence;
            });	
			}
	        $scope.ascInfl = !$scope.ascInfl;
		}
		if(id === 4){
			$scope.ascTwub = false;
			$scope.ascFrnd = false;
	        $scope.ascInfl = false;
			if($scope.ascChir === false){
			$rootScope.twubricData.sort(function(a, b) {
               return a.twubric.chirpiness - b.twubric.chirpiness;
            });
			} else {
			$rootScope.twubricData.sort(function(a, b) {
               return b.twubric.chirpiness - a.twubric.chirpiness;
            });	
			}
	        $scope.ascChir = !$scope.ascChir;
		}
	};
	//Model to track selected date
	$scope.dateModel = {
		sDate: "",
		eDate: ""
	};
	//Start date validation
	$scope.selectStartDate = function(){
		if(($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null) && ($scope.dateModel.eDate === "" || $scope.dateModel.eDate === null)){
			$rootScope.twubricData.forEach(function(data){
				data.displayFlag = true;
			});
		} else if(($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null) && ($scope.dateModel.eDate !== "" || $scope.dateModel.eDate !== null)){
			$rootScope.twubricData.forEach(function(data){
				if(new Date(data.join_date) <= $scope.dateModel.eDate){
				data.displayFlag = true;
				} else {
					data.displayFlag = false;
				}
			});
		} else if(($scope.dateModel.sDate !== "" || $scope.dateModel.sDate !== null) && ($scope.dateModel.eDate === "" || $scope.dateModel.eDate === null)){
			$rootScope.twubricData.forEach(function(data){
				if(new Date(data.join_date) >= $scope.dateModel.sDate){
				data.displayFlag = true;
				} else {
					data.displayFlag = false;
				}
			});
		} else {
			$rootScope.twubricData.forEach(function(data){
				if(new Date(data.join_date) >= $scope.dateModel.sDate && new Date(data.join_date) <= $scope.dateModel.eDate){
				data.displayFlag = true;
				} else {
					data.displayFlag = false;
				} 
			});
		}
	};
	//End date validation
	$scope.selectEndDate = function(){
		if(($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null) && ($scope.dateModel.eDate === "" || $scope.dateModel.eDate === null)){
			$rootScope.twubricData.forEach(function(data){
				data.displayFlag = true;
			});
		} else if(($scope.dateModel.sDate === "" || $scope.dateModel.sDate === null) && ($scope.dateModel.eDate !== "" || $scope.dateModel.eDate !== null)){
			$rootScope.twubricData.forEach(function(data){
				if(new Date(data.join_date) <= $scope.dateModel.eDate){
				data.displayFlag = true;
				} else {
					data.displayFlag = false;
				}
			});
		} else if(($scope.dateModel.sDate !== "" || $scope.dateModel.sDate !== null) && ($scope.dateModel.eDate === "" || $scope.dateModel.eDate === null)){
			$rootScope.twubricData.forEach(function(data){
				if(new Date(data.join_date) >= $scope.dateModel.sDate){
				data.displayFlag = true;
				} else {
					data.displayFlag = false;
				}
			});
		} else {
			$rootScope.twubricData.forEach(function(data){
				if(new Date(data.join_date) >= $scope.dateModel.sDate && new Date(data.join_date) <= $scope.dateModel.eDate){
				data.displayFlag = true;
				} else {
					data.displayFlag = false;
				}
			});
		}
	};
	
});
