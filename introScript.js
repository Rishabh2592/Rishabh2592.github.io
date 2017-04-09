// introScript.js

    // create the module and name it introApp
    var introApp = angular.module('introApp', []);

	
    // create the controller and inject Angular's $scope
    introApp.controller('introController', function($scope) {

        $scope.bioFlag = true;
		$scope.experienceFlag = false;
		$scope.achievementsFlag = false;
		$scope.bioClick = function(){
			$scope.bioFlag = true; 
			$scope.experienceFlag = false; 
			$scope.achievementsFlag = false;
		}
		$scope.experienceClick = function(){
			$scope.bioFlag = false; 
			$scope.experienceFlag = true; 
			$scope.achievementsFlag = false;
		}
		$scope.achievementsClick = function(){
			$scope.bioFlag = false; 
			$scope.experienceFlag = false; 
			$scope.achievementsFlag = true;
		}
		
    });