
var myCal = angular.module('myCal',[]);

myCal.controller('myCalController', ['$scope','notifications',function($scope, notifications){
	$scope.total = 0;
	$scope.temp=0;
	this.add=function(){
		$scope.total = $scope.total + $scope.temp;
		$scope.temp = 0;
		this.previous_op = 0;
	};
	this.sub=function () {

		$scope.total=$scope.total - $scope.temp;
		$scope.temp=0;
		this.previous_op = 1;
	};
	this.mul=function () {

		if($scope.temp >= 1 && $scope.total == 0){
			$scope.total = 1;
		}
		$scope.total=$scope.temp * $scope.total;
		$scope.temp=0;
		this.previous_op = 2;
	};
	this.div=function () {
		if($scope.temp >= 1 && $scope.total == 0){
			$scope.total = 1;
		}
		$scope.total= $scope.temp / $scope.total;
		$scope.temp=0;
		this.previous_op = 3;
	};
	this.setTemp=function(number){

		$scope.temp = $scope.temp.toString() + number.toString();
		$scope.temp = parseInt($scope.temp,10);
	};
	this.result=function(){
		if (this.previous_op == 1){
			$scope.total = $scope.total - $scope.temp;
		}
		else if (this.previous_op == 0){
			$scope.total = $scope.total + $scope.temp;
		}
		else if (this.previous_op == 2){
			$scope.total = $scope.total * $scope.temp;
		}
		else{
			$scope.total = $scope.total / $scope.temp;
		}
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


