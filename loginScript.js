var loginApp = angular.module('loginApp', []);
loginApp.controller('loginController', function($scope,$window){
  $scope.userName = "";
  $scope.userPassword = "";
  $scope.errorMsg = "";
  $scope.validateLogin = function(){
	  if(($scope.userName === "Rishabh" && $scope.userPassword === "Rishabh")|| ($scope.userName === "Anurag" && $scope.userPassword === "Anurag")){
		  $window.localStorage.setItem("user",$scope.userName);
		  $window.location.href = "bookMyHotel.html";
		  $scope.userName = "";
          $scope.userPassword = "";
          $scope.errorMsg = "";
	  } else {
		  $scope.userName = "";
          $scope.userPassword = "";
          $scope.errorMsg = "Invalid User Name/Password";
	  }
  }
});