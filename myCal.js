
var myCal = angular.module('myCal',[]);

myCal.controller('myCalController', ['$scope','notifications',function($scope, notifications){
	$scope.total = 0;
	$scope.temp=0;
	this.add=function(){
		$scope.total = $scope.total + $scope.temp;
		$scope.temp = 0;
	};
	this.sub=function () {

		$scope.total=$scope.total - $scope.temp;
		$scope.temp=0;
	};
	this.mul=function () {

		if($scope.temp >= 1 && $scope.total == 0){
			$scope.total = 1;
		}
		$scope.total=$scope.total * $scope.temp;
		$scope.temp=0;
	};
	this.div=function () {
		if($scope.temp >= 1 && $scope.total == 0){
			$scope.total = 1;
		}
		$scope.total=$scope.total / $scope.temp;
		$scope.temp=0;
	};
	this.setTemp=function(number){

		$scope.temp = $scope.temp.toString() + number.toString();
		$scope.temp = parseInt($scope.temp,10);
	};
	this.result=function(){
		$scope.total = $scope.total + $scope.temp;
		notifications($scope.total);
	};
}]);

myCal.directive('loadHeader', function(){
	
	return{
		restrict: 'A',
		templateUrl: 'awesome.html'

	};
});



myCal.factory('notifications', ['$window', function(win, answer){

	string = "The operation resulted to: " + answer;

	return function(string){win.alert(string)};

}]);


