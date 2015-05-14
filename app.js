
var myCal =angular.module('myCal',['service']);

myCal.controller('myCalController',['$scope','notifications',function($scope,notifications){
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
		$scope.total=$scope.total * $scope.temp;
		$scope.temp=0;
	};
	this.div=function () {
		$scope.total=$scope.total / $scope.temp;
		$scope.temp=0;
	};
	this.setTemp=function(number){
		$scope.temp = this.temp.toString() + number.toString();
		$scope.temp = parseInt($scope.temp,10);
	};
	this.result=function(){
		notifications($scope.total);

	}
}]);

myCal.directive('loadHeader', function(){
	
	return{
		restrict: 'E',
		templateUrl: 'awesome.html'

	};
});



